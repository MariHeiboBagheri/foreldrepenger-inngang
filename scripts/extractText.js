const walk = require('walk');
const fs = require('fs');

const contentFolder = '../src/content/nb';
let files = [];

processStrukturertTekst = (tekst) =>
    tekst.map((avsnitt) => avsnitt.children.map((child) => child.text).join('|'));

writeToFile = (data, fileType) => {
    const fileName = `output.${fileType}`;
    fs.writeFile(fileName, data, 'utf8', () => {
        console.warn('Successfully wrote output to', fileName);
    });
};

const walker = walk.walk(contentFolder, { followLinks: false });

walker.on('file', (root, stat, next) => {
    files.push(root + '/' + stat.name);
    next();
});

walker.on('end', () => {
    files = files.sort().filter((file) => file.endsWith('.json'));

    console.warn('Extract text from the following files:', files);

    let contentBase = {};
    let stringified = '';

    for (const file of files) {
        const tekst = require(file);
        const processedTekst = processStrukturertTekst(tekst);

        contentBase[file] = processedTekst;
        stringified += `${file}\n${processedTekst.map((t) => `\t${t}`).join('\n')}\n\n`;
    }

    writeToFile(stringified, 'txt');
    writeToFile(JSON.stringify(contentBase), 'json');
});
