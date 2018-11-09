import * as React from 'react';
import { EkspanderbartpanelBasePure } from 'nav-frontend-ekspanderbartpanel';
import BEMHelper from '../../utils/bem';
import './lesMer.less';
import Typografi from 'nav-frontend-typografi';

const cls = BEMHelper('lesMer');

interface Props {
    intro: string;
    children: React.ReactNode;
}

interface State {
    apen: boolean;
}

class LesMer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            apen: false
        };
    }

    toggle = () => {
        this.setState({
            apen: !this.state.apen
        });
    };

    render = () => {
        const heading = (
            <Typografi type="element" tag="span" className="ekspanderbartPanel__heading">
                {this.props.intro}
            </Typografi>
        );

        return (
            <div className={cls.className}>
                <EkspanderbartpanelBasePure
                    border={true}
                    renderContentWhenClosed={true}
                    apen={this.state.apen}
                    onClick={this.toggle}
                    heading={heading}>
                    {this.props.children}
                </EkspanderbartpanelBasePure>
            </div>
        );
    };
}

export default LesMer;
