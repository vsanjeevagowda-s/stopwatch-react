import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startRefDate: 0,
      presentSeconds: 0,
      presentMin: 0,
      presentHour: 0,
    }
    this.intervalCtrl = '';
    // this.formateMinuesSeconds = this.formateMinuesSeconds.bind(this);
    this.calculate = this.calculate.bind(this);
    this.setIntervals = this.setIntervals.bind(this);
  }

  setIntervals = () => {
    return setInterval(() => {
      let presentDate = Date.now();
      let timediff = presentDate - this.state.startRefDate;
      let calcSec = (timediff / 1000);
      let secs = calcSec % 60;
      let calMin = calcSec / 60;
      let mins = calMin % 60;
      let calHour = calMin / 60;
      let hours = calHour % 60;
      this.setState({
        presentSeconds: Math.floor(secs),
        presentMin: Math.floor(mins),
        presentHour: Math.floor(hours)
      })
    }, 100)
  }

  calculate = () => () => {
    const nowDate = Date.now();
    this.setState((previousState) => {
      return {
        startRefDate: nowDate
      }
    })
    this.intervalCtrl = this.setIntervals();
  }

  render() {
    const {
      presentSeconds,
      presentMin,
      presentHour,
    } = this.state;
    return (
      <div className="App">
        <h1>
          {presentHour} : {presentMin} : {presentSeconds}
        </h1>
        <button onClick={this.calculate()}>Start</button>
      </div>
    );
  }
}

export default App;
