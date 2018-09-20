import React, { ReactNode } from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import BEMHelper from '../../utils/bem';
import CustomSVG from '../../utils/CustomSVG';
import { WithLink } from '../../utils/withLink';
import './panelMedBilde.less';

const cls = BEMHelper('panelMedBilde');

const PanelMedBilde = ({
    svgName,
    title,
    url,
    urlIsExternal,
    children
}: {
    svgName: any;
    title: string;
    urlIsExternal?: boolean;
    url: string;
    children: ReactNode;
}) => {
    const svgFile = require(`./${svgName}.svg`).default;

    return (
        <WithLink
            className={cls.className}
            url={url}
            urlIsExternal={urlIsExternal}>
            <div className={cls.element('imageOnPanel')}>
                <CustomSVG
                    className={cls.element('svg')}
                    iconRef={svgFile}
                    size={180}
                />
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
