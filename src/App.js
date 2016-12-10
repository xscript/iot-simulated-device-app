import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SensorContainer from './SensorContainer.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="IoT Device Simulator" showMenuIconButton={false} titleStyle={{ textAlign: 'center' }} />
          <SensorContainer
            sensors={{
              'TEMPERATURE': { scale: '℃', value: 10 },
              'HUMIDITY': { scale: '%', value: 75 }
            }} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
