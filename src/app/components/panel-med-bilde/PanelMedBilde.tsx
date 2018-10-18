import React, { ReactNode } from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import BEMHelper from '../../utils/bem';
import { FlexibleSvg } from '../../utils/CustomSVG';
import { WithLink } from '../../utils/withLink';
import './panelMedBilde.less';
import { LoadableComponent } from 'react-loadable';

const cls = BEMHelper('panelMedBilde');

const PanelMedBilde = ({
    svgName,
    title,
    url,
    urlIsExternal,
    preloadableComponent,
    children
}: {
    svgName: any;
    title: string;
    urlIsExternal?: boolean;
    url: string;
    preloadableComponent?: LoadableComponent;
    children: ReactNode;
}) => {
    const svgFile = require(`./${svgName}.svg`).default;
    const onHover = () => {
        if (preloadableComponent) {
            preloadableComponent.preload();
        }
    };

    return (
        <WithLink
            className={cls.className}
            url={url}
            onHover={onHover}
            noStyling={true}
            urlIsExternal={urlIsExternal}>
            <div className={cls.element('imageOnPanel')}>
                <div className={cls.element('svgContainer')}>
                    <FlexibleSvg
                        className={cls.element('svg')}
                        iconRef={svgFile}
                        height={115}
                        width="100%"
                    />
                </div>
            </div>
            <PanelBase border={false} className={cls.element('panelOnPanel')}>
                <div className={cls.element('textOnPanel')}>
                    <TypografiBase type="undertittel">{title}</TypografiBase>
                    {children}
                </div>
                <HoyreChevron className={cls.element('panelChevron')} />
            </PanelBase>
        </WithLink>
    );
};

export default PanelMedBilde;
