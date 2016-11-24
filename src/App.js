import React, { Component } from 'react';
import Form from './components/WidgetForm/Form';
import List from './components/WidgetList/List';
import config from './config';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentWillMount () {
    fetch(config.API_URL+'/allusers').then(function(response) {
      return response.json();
    }).then(function(j) {
      var member = this.state.users;
      j.map(function(value){
        member.push({id: value.userId, name: value.username, email: value.email});
      })
      this.setState({users: member});
    }.bind(this));
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
                <Form />
                <List users={this.state.users} />
            </div>
        </div>
    );
  }
}

export default App;
