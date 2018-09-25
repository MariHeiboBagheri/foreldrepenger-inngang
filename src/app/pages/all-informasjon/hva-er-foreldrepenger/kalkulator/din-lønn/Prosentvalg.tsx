import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import { BEMWrapper } from '../../../../../utils/bem';

const Prosentvalg = ({
    parentCls,
    grandParentCls,
    percentage,
    onSelect,
    sum,
    isSelected
}: {
    parentCls: BEMWrapper;
    grandParentCls: BEMWrapper;
    percentage: number;
    onSelect: (percentage: number) => void;
    sum: number;
    isSelected: boolean;
}) => {
    const combinedClassnames = classnames(
        grandParentCls.element('option'),
        {
            [grandParentCls.element('option--selected')]: isSelected
        },
        parentCls.element('prosentvalg')
    );

    const sumToShow = Math.round(sum * (percentage / 100));

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onSelect(percentage)}
            onKeyPress={() => onSelect(percentage)}
            className={combinedClassnames}>
            <TypografiBase type="normaltekst">{`${percentage}%`}</TypografiBase>
            <TypografiBase type="element">{`${sumToShow},–`}</TypografiBase>
        </div>
    );
};

export default Prosentvalg;
