import React, { Component } from "react";
import  "./billing.scss";

class Billing extends Component {
    render () {
        const barStyle = (percentage) => ({
            height: (percentage / 100 * 300) + 'px'
        });

        return (
            <div className="billing">
                <div className="billingSummary">
                    <div className="amountDue">
                        <div className="label">Amount due:</div>
                        $ {this.props.amountDue}
                    </div>
                    <div className="dueDate">
                        <div className="label">Due date:</div>
                        {this.props.dueDate}
                    </div>
                </div>
                <div className="recentCharges">
                    <div className="title">
                        Your recent charges
                    </div>
                    {this.props.recentCharges.map((element, i) => {
                        return <div className="bar">
                            <div className="indicator">
                                <div className="spacer"></div>
                                <div className="value">${element.value}</div>
                                <div className="usage" style={barStyle(element.percentage)}></div>
                            </div>
                            <div className="period">{element.period}</div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Billing;