import React, {Component} from 'react';

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
    // $.post('http://192.168.9.231:1337/users', {u, e, p}, function(callback){
    //   //action
    // });
    console.log(u + '|' + e + '|' + p)
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
    const divStyle = {
      padding: 5,
      width: 295
    }
    const inputStyle = {
      float: "left",
      flex: 1,
      margin: 5,
      height: 34
    }
    const buttonStyle = {
      float: "left",
      marginRight: 0,
      width: 120,
      margin: 5,
      padding: 5
    }
    return (
      <div style={divStyle}>
        <input onChange={this.handleUsername.bind(this)} type="text" placeholder="your username" value={this.state.username} style={inputStyle} />
        <input onChange={this.handleEmail.bind(this)} type="text" placeholder="your email" value={this.state.email} style={inputStyle} />
        <input onChange={this.handlePassword.bind(this)} type="password" placeholder="your password" value={this.state.password} style={inputStyle} />
        <button style={buttonStyle} onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}
