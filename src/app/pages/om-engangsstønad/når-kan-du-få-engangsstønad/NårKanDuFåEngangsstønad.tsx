import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { getTranslation, Language, IntlProps, withIntl } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';
import CustomSVGFromSprite from '../../../utils/CustomSVG';

const nårKanDuFåEngangsstønadContent =
    'om-engangsstønad/når-kan-du-få-engangsstønad/når-kan-du-få-engangsstønad';
const adopsjonContent = 'om-engangsstønad/når-kan-du-få-engangsstønad/adopsjon';
const fødselContent = 'om-engangsstønad/når-kan-du-få-engangsstønad/fødsel';

const infoSvg = require('../../../assets/ark/ark-info.svg').default;
const barnevognSvg = require('../../../assets/icons/barnevogn.svg').default;
const adopsjonSvg = require('../../../assets/icons/adopsjon.svg').default;

const getTabs = (lang: Language) => [
    {
        label: 'fødsel',
        icon: <CustomSVGFromSprite size={30} iconRef={barnevognSvg} />,
        component: <StrukturertTekst tekst={getContent(fødselContent, lang)} />
    },
    {
        label: 'adopsjon',
        icon: <CustomSVGFromSprite size={30} iconRef={adopsjonSvg} />,
        component: <StrukturertTekst tekst={getContent(adopsjonContent, lang)} />
    }
];

const NårKanDuFåEngangsstønad: React.StatelessComponent<IntlProps> = ({
    lang
}: {
    lang: Language;
}) => (
    <PanelMedIllustrasjon
        title={getTranslation('om_engangsstønad.krav_tittel', lang)}
        svg={infoSvg}>
        <div>
            <StrukturertTekst tekst={getContent(nårKanDuFåEngangsstønadContent, lang)} />
            <Innholdsfaner tabs={getTabs(lang)} />
        </div>
    </PanelMedIllustrasjon>
);

export default withIntl(NårKanDuFåEngangsstønad);
