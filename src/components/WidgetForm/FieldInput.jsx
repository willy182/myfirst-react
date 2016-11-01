import React, {Component} from 'react';

export default class FieldInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      errorMessage: ""
    };
  }
  handleChange (s){
    let u = s.target.value
    let valid = this.props.validate(u);
    this.validation(event.target.value, valid);
  }
  validation (value, valid) {
    if (typeof valid === 'undefined') {
      valid = true;
    }
    
    var message = "";
    
    //we know how to validate text fields based on information passed through props
    if (!valid) {
      message = 'Input is not invalid';
      valid = false;
    }

    this.setState({
      valid: valid,
      errorMessage: message,
    });
  }
  render () {
    return (
      <div>
        <input
          placeholder={this.props.text}
          type={this.props.type}
          name={this.props.name}
          onChange={this.handleChange.bind(this)} /><span>{this.state.errorMessage}</span>
      </div>
    );
  }
}
