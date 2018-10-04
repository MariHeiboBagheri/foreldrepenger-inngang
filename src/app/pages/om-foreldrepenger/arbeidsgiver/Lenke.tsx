import * as React from 'react';
import PlaceholderSVG from './PlaceholderSVG';
import TypografiBase from 'nav-frontend-typografi';
import translate from '../../../intl/translate';
import BEMHelper from '../../../utils/bem';
import NavLenke from 'nav-frontend-lenker';

const cls = BEMHelper('arbeidsgiver');

const Lenke = ({ href, txt }: { href: string; txt: string }) => {
    return (
        <div className={cls.element('linkContent')}>
            <span className={cls.element('placeholderSVG')}>
                <PlaceholderSVG props={null} />
            </span>
            <span className={cls.element('link')}>
                <TypografiBase type="element">
                    <NavLenke href={href}>{translate(txt)}</NavLenke>
                </TypografiBase>
            </span>
        </div>
    );
};
export default Lenke;
