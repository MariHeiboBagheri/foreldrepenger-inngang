import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import { withIntl, IntlProps, getTranslation } from '../../intl/intl';
import BEMHelper from '../../utils/bem';
import externalUrls from '../../utils/externalUrls';

import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import Header from './header/Header';
import MerInformasjon from './mer-informasjon/MerInformasjon';
import AndreLenker from './andre-lenker/AndreLenker';
import './informasjonstavle.less';
import { StatelessComponent } from 'enzyme';
import { HvaSøkerDu } from 'app/Router';

const cls = BEMHelper('informasjonstavle');

const Informasjonstavle = () => {
    return (
        <div className={cls.className}>
            <Header />
            <div className={cls.element('body')}>
                <main className={cls.element('content')}>
                    <Bildelenker />
                    <MerInformasjon />
                    <AndreLenker />
                </main>
            </div>
        </div>
    );
};

const BildelenkerWithoutIntl: StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <nav className={cls.element('bildepaneler')}>
            <PanelMedBilde
                svgName="jente-med-imac"
                title={getTranslation('informasjonstavle.hva_har_du_rett_på', lang)}
                urlIsExternal={false}
                url="/under-arbeid">
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hva_har_du_rett_på_body', lang)}
                </Tekstomrade>
            </PanelMedBilde>
            <PanelMedBilde
                svgName="se-over-søknad"
                title={getTranslation('informasjonstavle.hvor_lenge_kan_du_få_permisjon', lang)}
                urlIsExternal={true}
                url={externalUrls.foreldrepengeplanlegger}>
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hvor_lenge_kan_du_få_permisjon_body', lang)}
                </Tekstomrade>
            </PanelMedBilde>
            <PanelMedBilde
                svgName="fylle-ut-søknad"
                preloadableComponent={HvaSøkerDu}
                title={getTranslation('informasjonstavle.gå_rett_til_søknaden', lang)}
                urlIsExternal={false}
                url="/hva-soker-du">
                <Tekstomrade>
                    {getTranslation('informasjonstavle.gå_rett_til_søknaden_body', lang)}
                </Tekstomrade>
            </PanelMedBilde>
        </nav>
    );
};

const Bildelenker = withIntl(BildelenkerWithoutIntl);

export default Informasjonstavle;
