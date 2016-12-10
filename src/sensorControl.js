import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const DefaultValue = 25;

class SensorControl extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      name: props.name, 
      value: props.value || DefaultValue,
      unit: props.unit
    };
    // Bind
    this.increaseValue = this.increaseValue.bind(this);
    this.decreaseValue = this.decreaseValue.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  increaseValue() {
    this.setState(prevState => ({ value: prevState.value + 1}));
  }

  decreaseValue() {
    this.setState(prevState => ({ value: prevState.value - 1}));
  }

  render() {
    var inputStyle = { textAlign: 'center', cursor: 'none', color: 'black' };
    return (
      <div name={'sensor-control'}>
        <TextField name={this.state.name}
          value={this.state.name}
          disabled={true}
          underlineShow={false}
          style={{ margin: 'auto', display: null }}
          inputStyle={inputStyle} />
        <div style={{ width: '100%', textAlign: 'center' }}>
          <RaisedButton primary={true}
            label="-"
            onTouchTap={this.decreaseValue}
            style={{verticalAlign: 'middle'}}
            labelStyle={{ fontSize: '35px' }} />
          <TextField name={this.state.name}
            value={this.state.value + ' ' + this.state.unit}
            disabled={true}
            underlineShow={false}
            style={{ width: '120px' }}
            inputStyle={inputStyle} />
          <RaisedButton primary={true}
            label="+"
            onTouchTap={this.increaseValue}
            style={{verticalAlign: 'middle'}}
            labelStyle={{ fontSize: '35px' }} />
        </div>
      </div>
    );
  }
}

export default SensorControl;