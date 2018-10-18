import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
// import NårKanDuFåEngangsstønad from './når-kan-du-få-engangsstønad/NårKanDuFåEngangsstønad';
import { getContent } from '../../utils/getContent';
import CustomSVGFromSprite from '../../utils/CustomSVG';
import './omEngangsstønad.less';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('omEngangsstønad');

interface Props {
    location: any;
}

const engangsstønadSvg = require('../../assets/engangsstønad.svg').default;
const arbeidstakerSvg = require('../../assets/ark/ark-arbeidstaker.svg').default;
const utbetalingSvg = require('../../assets/ark/ark-frister.svg').default;
const farSvg = require('../../assets/ark/ark-far.svg').default;
const checkmarkIcon = require('../../assets/icons/checkmark.svg').default;

const hvaErEngangsstønadContent = 'om-engangsstønad/hva-er-engangsstønad/hva-er-engangsstønad';
const engangssumContent = 'om-engangsstønad/hva-er-engangsstønad/krav1';
const utbetalingShortContent = 'om-engangsstønad/hva-er-engangsstønad/krav2';

const OmEngangsstonad: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={infosiderCls.className}>
            <Sidebanner text={getTranslation('om_engangsstønad.tittel', lang)} />
            <div className={infosiderCls.element('body')}>
                <div className={infosiderCls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvaErEngangsstønad />
                    <HvaKanDuFå />
                    <NårBlirPengeneUtbetalt />
                    <EngangsstønadTilFar />
                </div>
            </div>
        </div>
    );
};

const HvaErEngangsstønadW: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        title={getTranslation('om_engangsstønad.hva_er.tittel', lang)}
        svg={engangsstønadSvg}>
        <StrukturertTekst tekst={getContent(hvaErEngangsstønadContent, lang)} />
        <div className={cls.element('kravContainer')}>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={checkmarkIcon} size={24} />
                <StrukturertTekst tekst={getContent(engangssumContent, lang)} />
            </div>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={checkmarkIcon} size={24} />
                <StrukturertTekst tekst={getContent(utbetalingShortContent, lang)} />
            </div>
        </div>
    </PanelMedIllustrasjon>
);

const HvaKanDuFåW: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        title={getTranslation('om_engangsstønad.hva_kan_du_få.tittel', lang)}
        svg={arbeidstakerSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/hva-kan-du-få', lang)} />
    </PanelMedIllustrasjon>
);

const NårBlirPengeneUtbetaltW: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        title={getTranslation('om_engangsstønad.utbetaling.tittel', lang)}
        svg={utbetalingSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/utbetaling', lang)} />
    </PanelMedIllustrasjon>
);

const EngangsstønadTilFarW: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        title={getTranslation('om_engangsstønad.til_far.tittel', lang)}
        svg={farSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/til-far', lang)} />
    </PanelMedIllustrasjon>
);

const HvaErEngangsstønad = withIntl(HvaErEngangsstønadW);
const HvaKanDuFå = withIntl(HvaKanDuFåW);
const NårBlirPengeneUtbetalt = withIntl(NårBlirPengeneUtbetaltW);
const EngangsstønadTilFar = withIntl(EngangsstønadTilFarW);

export default withIntl(OmEngangsstonad);
