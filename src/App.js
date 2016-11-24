import React, { Component } from 'react';
import Form from './components/WidgetForm/Form';
import List from './components/WidgetList/List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount () {
    fetch(config.API_URL+'/allusers').then(function(response) {
      return response.json();
    }).then(function(j) {
      var member = this.state.users;
      j.map(function(value, key){
        member.push({id: value.userId, name: value.username, email: value.email});
      })
      this.setState({users: member});
    }.bind(this));
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
  render() {
    return (
        <div>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
            <div className="App-frame">
                <Form onUsername={this.handleUsername.bind(this)} onEmail={this.handleEmail.bind(this)} onPassword={this.handlePassword.bind(this)} />
                <List />
            </div>
        </div>
    );
  }
}

export default App;
