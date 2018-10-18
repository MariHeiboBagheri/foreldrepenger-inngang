import * as React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import BEMHelper from 'app/utils/bem';
import './loading.less';

const cls = BEMHelper('loading');

const Loading = ({ error }: { error: any }) => {
    if (error) {
        return null;
    } else {
        return (
            <div className={cls.className}>
                <NavFrontendSpinner negativ={false} />
            </div>
        );
    }
};

export default Loading;
