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
    tooltip_visible: false
  };
  componentWillMount = () => {
    Actions.getData()
    .then( (response) => {
      this.setState( { base_temperature: response.baseTemperature,
        data: response.monthlyVariance});
    });
  };
  handleMouseEnter = (d) => {
    this.setState( { tooltip_text: [d.year+":"+d.month,
        d.temperature,
        d.variance
      ],
      tooltip_visible:true,
    });
  };
  handleMouseLeave = () => {
    this.setState( { tooltip_visible: false})
  };
  defaultData = [];
  render() {
    const styles = {
      width   : 800,
      height  : 500,
      padding : 30
    };
    let data = this.defaultData;
    if( this.state.data.length){
      const base_temp = parseFloat( this.state.base_temperature);
      data = this.state.data.map( (dp) => {
        return { coords:[dp.year, dp.month],
                  year: dp.year, month: dp.month,
                  variance: dp.variance,
                  temperature: base_temp + dp.variance
        };
      });
    }
    const tooltip = {display: (this.state.tooltip_visible)?"block":"none",
      top: `calc( 50% - ${styles.height/2}px + ${styles.padding}px )`, left:`calc( 50% - ${styles.width/2}px + ${styles.padding}px + 5px)`
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
