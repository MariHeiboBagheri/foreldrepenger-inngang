import * as React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import SøkForeldrepenger from './pages/søk-foreldrepenger/SøkForeldrepenger';
import Loadable from 'react-loadable';
import Loading from './components/loading/Loading';

const Informasjonstavle = Loadable({
    loader: () =>
        import('./pages/informasjonstavle/Informasjonstavle' /* webpackChunkName: "informasjonstavle" */),
    loading: Loading
});

const HvaSøkerDu = Loadable({
    loader: () => import('./pages/hva-søker-du/HvaSøkerDu' /* webpackChunkName: "hva-soker-du" */),
    loading: Loading
});

const OmForeldrepenger = Loadable({
    loader: () =>
        import('./pages/om-foreldrepenger/OmForeldrepenger' /* webpackChunkName: "om-foreldrepenger" */),
    loading: Loading
});

const OmEngangsstønad = Loadable({
    loader: () =>
        import('./pages/om-engangsstønad/OmEngangsstønad' /* webpackChunkName: "om-engangsstonad" */),
    loading: Loading
});

const ViktigeFrister = Loadable({
    loader: () =>
        import('./pages/viktige-frister/ViktigeFrister' /* webpackChunkName: "viktige-frister" */),
    loading: Loading
});

const Blindside = Loadable({
    loader: () => import('./pages/blindside/Blindside' /* webpackChunkName: "blindside" */),
    loading: Loading
});

const Router = () => (
    <Switch>
        <Route exact={true} path="/" component={Informasjonstavle} key="informasjonstavle" />
        <Route exact={true} path="/hva-soker-du" component={HvaSøkerDu} key="hva-soker-du" />
        <Route
            exact={true}
            path="/hva-soker-du/foreldrepenger"
            component={SøkForeldrepenger}
            key="foreldrepenger"
        />
        <Route
            exact={true}
            path="/om-foreldrepenger"
            component={OmForeldrepenger}
            key="om-foreldrepenger"
        />
        <Route
            exact={true}
            path="/om-engangsstonad"
            component={OmEngangsstønad}
            key="om-engangsstonad"
        />
        <Route exact={true} path="/under-arbeid" component={Blindside} key="under-arbeid" />
        <Route
            exact={true}
            path="/viktige-frister"
            component={ViktigeFrister}
            key="viktige-frister"
        />
        <Redirect to="/" />
    </Switch>
);

export default withRouter(Router);
