import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SensorControl from './sensorControl.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="IoT Device Simulator" showMenuIconButton={false} titleStyle={{ textAlign: 'center' }} />
          <SensorControl name='Temperature'/>
          <SensorControl name='Humidity'/>
        </div>
      </MuiThemeProvider>
/*
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Azure IoT Device Simulator</h2>
        </div>
      </div>
*/
    );
  }
}

export default App;
