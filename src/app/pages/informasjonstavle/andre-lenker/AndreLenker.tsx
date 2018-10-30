import * as React from 'react';
import { WithLink } from '../../../utils/withLink';
import BEMHelper from '../../../utils/bem';
import TypografiBase from 'nav-frontend-typografi';
import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import './andreLenker.less';

const links = [
    {
        label: 'informasjonstavle.andre_lenker.i_utlandet',
        href:
            'https://www.nav.no/no/Person/Familie/Venter+du+barn/Relatert+informasjon/foreldrepenger-og-utland'
    },
    {
        label: 'informasjonstavle.andre_lenker.meld_fra',
        href:
            'https://www.nav.no/no/NAV+og+samfunn/Om+NAV/Relatert+informasjon/du-har-plikt-til-%C3%A5-gi-nav-riktige-opplysninger'
    },
    {
        label: 'informasjonstavle.andre_lenker.søke_i_rett_tid',
        href: '/viktige-frister',
        internal: true
    },
    {
        label: 'informasjonstavle.andre_lenker.klage',
        href:
            'https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Klage+ris+og+ros/Klagerettigheter'
    },
    {
        label: 'informasjonstavle.andre_lenker.regelverk',
        href:
            'https://www.nav.no/rettskildene/Forside/Folketrygdloven/kapittel-14-ytelser-ved-svangerskap-f%C3%B8dsel-og-adopsjon'
    }
];

const cls = BEMHelper('andreLenker');

const AndreLenker: React.StatelessComponent<IntlProps> = ({ lang }) => {
    const otherLinks = links.map((link) => (
        <div key={link.label} className={cls.element('linkContainer')}>
            <WithLink url={link.href} urlIsExternal={!link.internal} addExternalIcon={true}>
                <TypografiBase type="normaltekst">{getTranslation(link.label, lang)}</TypografiBase>
            </WithLink>
        </div>
    ));

    return (
        <div className={cls.className}>
            <TypografiBase type="undertittel">
                {getTranslation('informasjonstavle.andre_lenker.tittel', lang)}
            </TypografiBase>
            <nav className={cls.element('links')}>{otherLinks}</nav>
        </div>
    );
};

export default withIntl(AndreLenker);
