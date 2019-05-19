import React, { Component } from "react";
import  "./donut.scss";

class App extends Component {
  render(){
    return(
      <div>
        <DonutChart value={this.props.donutval} />
        <button
          className="btn btn-optus mt-50"
          color="primary"
          type="submit"
          onClick={this.props.onCheckUsage}
        >
          View Breakdown
        </button>
      </div>
    )
  }
};

class DonutChart extends Component {

  static defaultProps = {
      value:0,
      valuelabel:'Remaining',
      size:200,
      strokewidth:26
  }

  render() {
    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.strokewidth};
    const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
      <div>
        <svg width={this.props.size} height={this.props.size} className="donutchart">
          <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
          <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
          <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
            <tspan className="donutchart-text-val">{this.props.value}</tspan>
            <tspan className="donutchart-text-percent">%</tspan>
            <tspan className="donutchart-text-label" x={halfsize} y={halfsize+10}>{this.props.valuelabel}</tspan>
          </text>
        </svg>
      </div>
    );
  }
}

export default App;
