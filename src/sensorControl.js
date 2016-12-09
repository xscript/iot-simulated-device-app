import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var defaultValue = 25;

const SensorControl = (props) => (
  <div>
    <TextField name={props.name} 
      value={props.name}
      disabled={true}
      underlineShow={false}
      style={{ margin: 'auto', display: null }}
      inputStyle={{ textAlign: 'center', cursor: 'none', color: 'black' }} />
    <div style={{ width: '100%', textAlign: 'center' }}>
      <RaisedButton primary={true}
        label="-"
        labelStyle={{ fontSize: '35px' }} />
      <TextField name={props.name}
        value={props.defaultValue || defaultValue}
        disabled={true}
        underlineShow={false}
        style={{ width: '120px' }}
        inputStyle={{ textAlign: 'center', cursor: 'none', color: 'black' }} />
      <RaisedButton primary={true} 
        label="+"
        labelStyle={{ fontSize: '35px' }} />
    </div>
  </div>
);

export default SensorControl;