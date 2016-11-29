import React, {Component} from 'react';
import jQuery from 'jquery';
import config from '../../config';
import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleSubmit (event){
    let u = this.state.username
    let e = this.state.email
    let p = this.state.password
    let member = {password: p, email: e, username: u}
    this.props.onAdd(member)
    jQuery.post(config.API_URL+'/users', {username:u, email:e, password:p}, function(callback){
      //action
    });
    this.setState({
      username: "",
      email: "",
      password: "",
    })
    event.preventDefault();
  }
  handleUsername (e) {
    this.setState({username: e.target.value});
  }
  handleEmail (e) {
    this.setState({email: e.target.value});
  }
  handlePassword (e) {
    this.setState({password: e.target.value});
  }
  render () {
    return (
      <div className="Frm">
        <input onChange={this.handleUsername.bind(this)} type="text" placeholder="your username" value={this.state.username} className="Frm-inpt" />
        <input onChange={this.handleEmail.bind(this)} type="text" placeholder="your email" value={this.state.email} className="Frm-inpt" />
        <input onChange={this.handlePassword.bind(this)} type="password" placeholder="your password" value={this.state.password} className="Frm-inpt" />
        <button className="Frm-bttn" onClick={this.handleSubmit.bind(this)}>Add</button>
      </div>
    );
  }
}
