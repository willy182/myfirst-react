import React, {Component} from 'react';
import FieldInput from './FieldInput';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  validateEmail (value) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(value);
  }
  handleSubmit (e) {
    console.log(e)
    e.preventDefault();
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FieldInput name="username" type="text" text="your username" validate="" />
        <FieldInput name="email" type="text" text="your email" validate={this.validateEmail.bind(this)} />
        <FieldInput name="password" type="password" text="your password" validate="" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
