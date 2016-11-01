import React, {Component} from 'react';
import FieldInput from './FieldInput';

export default class Form extends Component {
  handleSubmit (e) {
    console.log(e)
    e.preventDefault();
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FieldInput name="username" type="text" text="your username" />
        <FieldInput name="email" type="text" text="your email" />
        <FieldInput name="password" type="password" text="your password" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
