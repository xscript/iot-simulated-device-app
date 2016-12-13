import React from 'react';
import SensorControl from './SensorControl.js';
import update from 'immutability-helper';

class SensorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sensors: props.sensors };
    this.addHandler = this.addHandler.bind(this);
    this.minusHandler = this.minusHandler.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.sendTelemetry(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  sendTelemetry() {
    var telemetryData = Object.keys(this.state.sensors).map(key => 
      { 
        return { 
          name: key,
          value: this.state.sensors[key].value
        }; 
      });
    console.log(JSON.stringify(telemetryData));
  }

  updateHandler(name, operation) {
    this.setState(prevState => {
      var updatedValue = prevState.sensors[name].value;
      switch (operation) {
        case 'add':
          updatedValue += 1;
          break;
        case 'minus':
          updatedValue -= 1;
          break;
        default:
          break;
      }
      var updatedSensor = {};
      updatedSensor[name] = { value: updatedValue };
      return { sensors: update(prevState.sensors, { $merge: updatedSensor }) };
    });
  }

  addHandler(name) {
    this.updateHandler(name, 'add');
  }

  minusHandler(name) {
    this.updateHandler(name, 'minus');
  }

  render() {
    const sensors = this.state.sensors;
    return (
      <div>
        {Object.keys(sensors).map(sensorName =>
          <SensorControl key={sensorName}
            name={sensorName}
            scale={sensors[sensorName].scale}
            value={sensors[sensorName].value}
            addHandler={this.addHandler}
            minusHandler={this.minusHandler} />)}
      </div>
    );
  }
}

export default SensorContainer;
