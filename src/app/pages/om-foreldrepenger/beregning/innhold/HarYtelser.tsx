import * as React from 'react';
import BEMHelper from './../../../../utils/bem';
import {  withIntl, IntlProps } from '../../../../intl/intl';
import StrukturertTekst from "../../../../components/strukturert-tekst/StrukturertTekst";
import {getContent} from "../../../../utils/getContent";

const cls = BEMHelper('arbeidstakerTxt');

const beregningTekstPath = 'all-informasjon/beregning/beregning_harYtelser';

const HarYtelser: React.StatelessComponent<IntlProps> = ({lang}) => {
    return (
        <div className={cls.className}>
            <StrukturertTekst tekst={getContent(beregningTekstPath, lang)}/>
        </div>
    )
};

export default withIntl(HarYtelser);