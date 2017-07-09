/**
 * {
  "baseTemperature": 8.66,
  "monthlyVariance": [
    {
      "year": 1753,
      "month": 1,
      "variance": -1.366
    },
 */
import React, { Component } from 'react';
import Chart from './components/Chart';
import Actions from './Actions';
import Tooltip from './components/Tooltip';
import './App.css';

class App extends Component {
  state = {
    base_temperature: 0,
    data: [],
    tooltip_text: [],
    tooltip_visible: false,
    tooltip_pos : {x: 0, y:0}
  };
  componentWillMount = () => {
    Actions.getData()
    .then( (response) => {
      this.setState( { base_temperature: response.baseTemperature,
        data: response.monthlyVariance});
    });
  };
  handleMouseEnter = (d, e) => {
    this.setState( { tooltip_text: [d.year+":"+this.months[d.month-1],
        `${d.temperature}\u00b0C`,
        `${d.variance}\u00b0C`
      ],
      tooltip_visible:true,
      tooltip_pos: {x: e.clientX, y: e.clientY}
    });
  };
  handleMouseLeave = () => {
    this.setState( { tooltip_visible: false})
  };
  defaultData = [];
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  render() {
    const styles = {
      width   : 800,
      height  : 500,
      padding : 40
    };
    let data = this.defaultData;
    if( this.state.data.length){
      const base_temp = parseFloat( this.state.base_temperature);
      data = this.state.data.map( (dp) => {
        return { coords:[dp.year, dp.month],
                  year: dp.year, month: dp.month, month_name: this.months[dp.month-1],
                  variance: dp.variance,
                  temperature: parseFloat( base_temp + dp.variance).toFixed(2)
        };
      });
    }
    const tooltip = {display: (this.state.tooltip_visible)?"block":"none",
      left: this.state.tooltip_pos.x,
      top: this.state.tooltip_pos.y,
      padding: "10px"
      // top: `calc( 50% - ${styles.height/2}px + ${styles.padding}px )`,
      // left:`calc( 50% - ${styles.width/2}px + ${styles.padding}px + 5px)`
    };
    const axis_labels = {
      xaxis:"Years",
      yaxis:"Months",
    };
    return (
      <div className="App">
        { data.length?
          <Chart data={data} axis_labels={axis_labels} {...styles}
            handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave}/>
          :<div></div>
        }
        <Tooltip tip_text={this.state.tooltip_text} pos={tooltip} />
      </div>
    );
  }
}

export default App;
