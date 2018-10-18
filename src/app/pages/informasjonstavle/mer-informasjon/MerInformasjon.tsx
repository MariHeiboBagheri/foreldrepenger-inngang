import React, { StatelessComponent } from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import BEMHelper from '../../../utils/bem';
import externalUrls from '../../../utils/externalUrls';
import { WithLink } from '../../../utils/withLink';
import { LoadableComponent } from 'react-loadable';

import './merInformasjon.less';
import { OmForeldrepenger, OmEngangsstønad } from 'app/Router';

const cls = BEMHelper('merInformasjon');

const MerInformasjon: StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('title')}>
                <TypografiBase type="undertittel">
                    {getTranslation('informasjonstavle.mer_informasjon.tittel', lang)}
                </TypografiBase>
            </div>
            <nav className={cls.element('links')}>
                <MerInformasjonLink
                    title={getTranslation('foreldrepenger', lang)}
                    body={getTranslation('informasjonstavle.mer_informasjon.foreldrepenger', lang)}
                    url="/om-foreldrepenger"
                    preloadableComponent={OmForeldrepenger}
                    urlIsExternal={false}
                />
                <MerInformasjonLink
                    title={getTranslation('engangsstønad', lang)}
                    body={getTranslation('informasjonstavle.mer_informasjon.engangsstønad', lang)}
                    url="/om-engangsstonad"
                    preloadableComponent={OmEngangsstønad}
                    urlIsExternal={false}
                />
                <MerInformasjonLink
                    title={getTranslation('svangerskapspenger', lang)}
                    body={getTranslation(
                        'informasjonstavle.mer_informasjon.svangerskapspenger',
                        lang
                    )}
                    url={externalUrls.les_mer_svangerskapspenger}
                    urlIsExternal={true}
                />
            </nav>
        </div>
    );
};

const MerInformasjonLink = ({
    title,
    body,
    url,
    urlIsExternal,
    preloadableComponent
}: {
    title: string;
    body: string;
    url: string;
    urlIsExternal?: boolean;
    preloadableComponent?: LoadableComponent;
}) => {
    const onHover = () => {
        if (preloadableComponent) {
            preloadableComponent.preload();
        }
    };

    return (
        <WithLink
            url={url}
            urlIsExternal={urlIsExternal}
            noStyling={true}
            onHover={onHover}
            className={cls.element('link')}>
            <div>
                <TypografiBase type="undertittel">{title}</TypografiBase>
                <Tekstomrade>{body}</Tekstomrade>
            </div>
            <div className={cls.element('chevron')}>
                <HoyreChevron />
            </div>
        </WithLink>
    );
};

export default withIntl(MerInformasjon);
