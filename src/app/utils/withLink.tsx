import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Lenke from 'nav-frontend-lenker';
import CustomSVGFromSprite from './CustomSVG';
import BEMHelper from './bem';
import classnames from 'classnames';
import './withLink.less';

const externalLinkIcon = require('../assets/icons/external.svg').default;

const withLink = (url: string, componentToRender: ReactNode, urlIsExternal?: boolean) => {
    if (urlIsExternal) {
        return (
            <a href={url} aria-label="This is a link">
                {componentToRender}
            </a>
        );
    } else {
        return <Link to={url}>{componentToRender}</Link>;
    }
};

const navlab = process.env.NODE_ENV === 'navlab';
const cls = BEMHelper('withLink');

interface Props {
    url: string;
    urlIsExternal?: boolean;
    addExternalIcon?: boolean;
    noStyling?: boolean;
    className?: string;
    style?: any;
    ariaLabel?: string;
    onHover?: () => void;
    children: ReactNode;
}

export class WithLink extends React.Component<Props> {
    goToSection = (e: any, id: string): void => {
        e.preventDefault();
        window.history.replaceState(null, '', id);
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render = () => {
        const {
            urlIsExternal,
            url,
            addExternalIcon,
            noStyling,
            className,
            style,
            ariaLabel,
            onHover,
            children
        } = this.props;

        if (urlIsExternal) {
            if (noStyling) {
                return navlab ? (
                    <Link className={className} to="/under-arbeid">
                        {children}
                    </Link>
                ) : (
                    <a className={className} href={url}>
                        {children}
                    </a>
                );
            } else if (navlab) {
                return (
                    <span
                        title="Lenke under arbeid"
                        className={classnames(cls.className, cls.modifier('disabled'), className)}>
                        {children}
                    </span>
                );
            }

            return (
                <Lenke className={classnames(cls.className, className)} href={url}>
                    {children}
                    {addExternalIcon && (
                        <span className={cls.element('icon')}>
                            <CustomSVGFromSprite size={15} iconRef={externalLinkIcon} />
                        </span>
                    )}
                </Lenke>
            );
        } else if (url.charAt(0) === '#') {
            if (noStyling) {
                return (
                    <span
                        role="link"
                        aria-label={ariaLabel}
                        className={className + ' anchorLink'}
                        style={style}
                        onClick={(e) => this.goToSection(e, url)}>
                        {children}
                    </span>
                );
            } else {
                return (
                    <Lenke
                        className={className + ' anchorLink'}
                        style={style}
                        onClick={(e) => this.goToSection(e, url)}
                        href={url}>
                        {children}
                    </Lenke>
                );
            }
        } else {
            return (
                <Link
                    onMouseOver={onHover}
                    className={classnames(cls.className, className)}
                    to={url}>
                    {children}
                </Link>
            );
        }
    };
}

export default withLink;
