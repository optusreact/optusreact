import React, { Component } from "react";
import  "./usage-donut.scss";

class UsageDonut extends Component {
    render () {
        const sectionStyle = (percentage) => ({
            transform: 'rotate(' + percentage + 'deg)'
        }),
        cicleStyle = (percentage) => ({
            transform: 'rotate(' + percentage/100*360 + 'deg)'
        });
        var startingPoint = 0;

        return (
        <div className="donut-chart-block block">
            <div className="donut-chart">
                {this.props.usageBreakdown.map((element, i) => {
                    const start = startingPoint;
                    startingPoint += element.percentage/100 * 360;
                    return <div id={'part' + (i + 1)} style={sectionStyle(start)} className="portion-block">
                        <div style={cicleStyle(element.percentage)} className="circle"></div>
                    </div>
                })}
                <p className="center">Data</p>
            </div>
            <div className="labels">
                {this.props.usageBreakdown.map((element, i) => {
                    return <div className="label">
                        <div className={'color' + (i + 1)}></div>
                        <div className="name">{element.name}</div>
                        <div className="percentage">{element.percentage} %</div>
                    </div>
                })}
            </div>
        </div>
        )
    }
}

export default UsageDonut;