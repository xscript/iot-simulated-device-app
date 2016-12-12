import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SensorControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      scale: props.scale
    };
    this.addValue = this.addValue.bind(this);
    this.minusValue = this.minusValue.bind(this);
  }

  addValue() {
    this.props.addHandler(this.state.name);
  }

  minusValue() {
    this.props.minusHandler(this.state.name);
  }

  render() {
    var inputStyle = { textAlign: 'center', cursor: 'none', color: 'black' };
    return (
      <div>
        <TextField name={this.state.name}
          value={this.state.name}
          disabled={true}
          underlineShow={false}
          style={{ margin: 'auto', display: null }}
          inputStyle={inputStyle} />
        <div style={{ width: '100%', textAlign: 'center' }}>
          <RaisedButton primary={true}
            label="-"
            onTouchTap={this.minusValue}
            style={{ verticalAlign: 'middle' }}
            labelStyle={{ fontSize: '35px' }} />
          <TextField name={this.state.name}
            value={this.props.value + ' ' + this.state.scale}
            disabled={true}
            underlineShow={false}
            style={{ width: '120px' }}
            inputStyle={inputStyle} />
          <RaisedButton primary={true}
            label="+"
            onTouchTap={this.addValue}
            style={{ verticalAlign: 'middle' }}
            labelStyle={{ fontSize: '35px' }} />
        </div>
      </div>
    );
  }
}

export default SensorControl;
