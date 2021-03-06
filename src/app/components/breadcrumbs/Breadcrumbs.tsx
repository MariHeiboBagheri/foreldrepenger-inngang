import React, { Component, ReactNodeArray } from 'react';
import TypografiBase from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';
import BEMHelper from '../../utils/bem';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { getTranslation, Language, IntlProps, withIntl } from '../../intl/intl';
import './breadcrumbs.less';

const cls = BEMHelper('breadcrumbs');

interface BreadcrumbsProps {
    path: string;
}

const parsePath = (path: string, lang: Language) => {
    const parts = path.split('/');

    // Remove any trailing slash ("/")
    if (parts.length > 1 && parts[parts.length - 1] === '') {
        parts.pop();
    }

    return parts.map((part, index) => {
        const recombinedParts = parts.slice(0, index + 1);
        const url = recombinedParts.length === 1 ? '/' : recombinedParts.join('/');

        return {
            url,
            label: getTranslation(`route.${part}`, lang)
        };
    });
};

class Breadcrumbs extends Component<BreadcrumbsProps & IntlProps> {
    state: {
        windowWidth?: number;
    } = {
        windowWidth: undefined
    };

    componentWillMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = () => {
        this.updateWindowDimensions();
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    };

    render() {
        const breadcrumbChain: ReactNodeArray = [];
        const parsedPath = parsePath(this.props.path, this.props.lang);

        if (this.state.windowWidth && this.state.windowWidth < 576) {
            const routeLength = parsedPath.length;
            const lastUrl = parsedPath[routeLength - 2].url;

            breadcrumbChain.push(
                <div key="chevron" aria-hidden={true}>
                    <NavFrontendChevron type="venstre" />
                </div>
            );

            breadcrumbChain.push(
                <TypografiBase
                    aria-label="Gå til forrige side"
                    key="tilbake"
                    type="normaltekst"
                    className={cls.element('item')}>
                    <Link to={lastUrl}>{getTranslation('tilbake', this.props.lang)}</Link>
                </TypografiBase>
            );
        } else {
            parsedPath.forEach((path, index) => {
                if (index !== 0) {
                    breadcrumbChain.push(
                        <div key={`chevron${index}`} aria-hidden={true}>
                            <NavFrontendChevron type="høyre" />
                        </div>
                    );
                }

                const current = index === parsedPath.length - 1;
                breadcrumbChain.push(
                    <TypografiBase
                        aria-label={current ? 'Denne siden' : 'Tidligere side'}
                        aria-current={current ? 'page' : ''}
                        key={`crumb${index}`}
                        type="normaltekst"
                        className={classnames(cls.element('item'), {
                            [cls.element('current')]: current
                        })}>
                        {current ? path.label : <Link to={path.url}>{path.label}</Link>}
                    </TypografiBase>
                );
            });
        }

        return (
            <nav aria-label="Du er her" className={cls.className}>
                {breadcrumbChain}
            </nav>
        );
    }
}

export default withIntl(Breadcrumbs);
