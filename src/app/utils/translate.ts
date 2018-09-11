// TODO: Implementer i18n
const translations = {
    no: {
        // Route translations
        route_: 'Foreldrepenger, engangsstønad og svangerskapspenger',
        'route_hva-soker-du': 'Hva vil du søke om',
        route_foreldrepenger: 'Foreldrepenger',

        hva_vil_du_søke_om: 'Hva vil du søke om?',
        ingen_elektronisk_id: 'Jeg har ikke elektronisk ID',

        foreldrepenger: 'Foreldrepenger',
        foreldrepenger_beskrivelse:
            'Har du hatt inntekt eller ytelser fra NAV kan du få foreldrepenger når du er hjemme med barnet ditt. ',
        foreldrepenger_les_mer: 'Les mer om hvem som kan få foreldrepenger',
        søk_foreldrepenger: 'Søk om foreldrepenger',
        har_søkt_foreldrepenger: 'Jeg har allerede søkt',
        foreldrepenger_inngang:
            'Du kan tidligst søke om foreldrepenger 6 uker før du skal ta ut foreldrepenger.',
        begynn_søknad_om_foreldrepenger: 'Begynn søknad om foreldrepenger',
        når_starter_du: 'Når starter du?',
        ugyldig_dato_for_foreldrepenger:
            'Du søker tidligere enn 6 uker før du skal ta ut foreldrepenger. Du kan begynne på søknaden, det vil ikke være mulig å sende den inn før ',

        engangsstønad: 'Engangsstønad',
        engangsstønad_beskrivelse:
            'Hvis mor ikke har hatt inntekt, kan hun få en engangssum istedenfor foreldrepenger.\nI noen tilfeller kan far eller medmor få engangsstønaden.',
        engangsstønad_les_mer: 'Les mer om hvem som kan få engangsstønad',
        søk_engangsstønad: 'Søk om engangsstønad',

        svangerskapspenger: 'Svangerskapspenger',
        svangerskapspenger_beskrivelse:
            'Hvis du er frisk og gravid, men ikke kan jobbe fordi det kan skade det ufødte barnet, kan du få svangerskapspenger. ',
        svangerskapspenger_les_mer:
            'Les mer om hvem som kan få svangerskapspenger',
        søk_svangerskapspenger: 'Søk om svangerskapspenger'
    }
};

const translate = (s: string) => translations.no[s] || `**${s}**`;
export default translate;
