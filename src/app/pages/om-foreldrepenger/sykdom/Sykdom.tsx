import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';
import CustomSVG from '../../../utils/CustomSVG';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';

const pageSvg = require('../../../assets/page.svg').default;
const cls = BEMHelper('jegVilJobbe');
const barn = require('../../../assets/barn/barn1.svg').default;

const barnetErInnlagt = require('../../../../content/all-informasjon/sykdom/barnet-er-innlagt/barnet-er-innlagt');
const barnetErInnlagtForts = require('../../../../content/all-informasjon/sykdom/barnet-er-innlagt/barnet-er-innlagt-fortsettelse');
const barnetErInnlagtUtsette = require('../../../../content/all-informasjon/sykdom/barnet-er-innlagt/utsette');

const syke = require('../../../../content/all-informasjon/sykdom/en-av-foreldrene-er-syke/en-av-foreldrene-er-syke');
const sykeUtsette = require('../../../../content/all-informasjon/sykdom/en-av-foreldrene-er-syke/utsette');
const sykeOverta = require('../../../../content/all-informasjon/sykdom/en-av-foreldrene-er-syke/overta');

const BarnetErInnlagt = () => (
    <div>
        <StrukturertTekst tekst={barnetErInnlagt} />
        <LesMer intro={translate('slik_går_du_frem_for_å_utsette')}>
            <StrukturertTekst tekst={barnetErInnlagtUtsette} />
        </LesMer>
        <StrukturertTekst tekst={barnetErInnlagtForts} />
    </div>
);

const EnAvForeldreneErSyke = () => (
    <div>
        <StrukturertTekst tekst={syke} />
        <LesMer intro={translate('slik_går_du_frem_for_å_utsette')}>
            <StrukturertTekst tekst={sykeUtsette} />
        </LesMer>
        <LesMer intro={translate('slik_går_du_frem_for_å_overta')}>
            <StrukturertTekst tekst={sykeOverta} />
        </LesMer>
    </div>
);

const tabs = [
    {
        label: 'barnet_er_innlagt',
        component: <BarnetErInnlagt />,
        icon: <CustomSVG iconRef={barn} size={48} />
    },
    {
        label: 'en_av_foreldrene_er_syk',
        component: <EnAvForeldreneErSyke />,
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />
    }
];

const Sykdom = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            svg={pageSvg}
            title={translate('sykdom')}>
            <Innholdsfaner tabs={tabs} />
        </PanelMedIllustrasjon>
    );
};

export default Sykdom;