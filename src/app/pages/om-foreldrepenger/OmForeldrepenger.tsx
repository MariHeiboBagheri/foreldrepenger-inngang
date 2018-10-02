import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import HvaErForeldrepenger from './hva-er-foreldrepenger/HvaErForeldrepenger';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';
import NyeRegler from './nye-regler/NyeRegler';
import ForÅFåForeldrepenger from './for-å-få-foreldrepenger/ForÅFåForeldrepenger';
import JegHarHattInntekt from './jeg-har-hatt-inntekt/JegHarHattInntekt';
import JegVilJobbe from './jeg-vil-jobbe/JegVilJobbe';
import Sykdom from './sykdom/Sykdom';
import Ferie from './ferie/Ferie';
import Adopsjon from './adopsjon/Adopsjon';
import './omForeldrepenger.less';
import Arbeidsgiver from './arbeidsgiver/Arbeidsgiver';
import Sidebanner from '../../components/sidebanner/Sidebanner';

const cls = BEMHelper('infosider');

interface Props {
    location: any;
}

const pageSvg = require('../../assets/page.svg').default;

const sections = [
    'for-å-få-foreldrepenger',
    'hva-er-foreldrepenger',
    'ferie',
    'jeg-vil-jobbe',
    'sykdom',
    'hjemme-samtidig',
    'jeg_har-hatt-inntekt',
    'beregning',
    'adopsjon-og-arbeidsgiver'
];

const OmForeldrepenger: React.StatelessComponent<Props> = ({ location }) => {
    return (
        <div className={cls.className}>
            <Sidebanner text={translate('all_informasjon_foreldrepenger')} />
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <Hurtiglenker links={sections} />
                    <ForÅFåForeldrepenger id={sections[0]} />
                    <NyeRegler />
                    <HvaErForeldrepengerWrapper id={sections[1]} />
                    <Ferie id={sections[2]} />
                    <JegVilJobbe id={sections[3]} />
                    <Sykdom id={sections[4]} />
                    {/* <HjemmeSamtidig id={sections[5]} /> */}
                    <JegHarHattInntekt id={sections[6]} />
                    {/* <Beregning id={sections[7]} /> */}
                    <Adopsjon id={sections[8]} />
                    <Arbeidsgiver id={sections[8]} />
                </div>
            </div>
        </div>
    );
};

const HvaErForeldrepengerWrapper = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={translate('hva_er_foreldrepenger')}
            svg={pageSvg}>
            <HvaErForeldrepenger />
        </PanelMedIllustrasjon>
    );
};

export default OmForeldrepenger;