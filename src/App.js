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
      members: []
    };
  }
  getAllUser () {
    fetch(config.API_URL+'/allusers').then(function(response) {
      return response.json();
    }).then(function(j) {
      var r = j.result
      var member = this.state.members;
        if(r.length > 0) {
          r.map(function(value){
            member.push({id: value.userId, name: value.username, email: value.email});
          })
          this.setState({members: member});
        }
    }.bind(this));
  }
  componentWillMount () {
    this.getAllUser();
  }
  onPlayerAdd(name) {
    let users = name
    let members = this.state.members
    members.push({id:members.length + 1, name: users.username, email: users.email})
    
    this.setState({
      members: members
    })
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
                <Form onAdd={this.onPlayerAdd.bind(this)} />
                <List members={this.state.members} />
            </div>
        </div>
    );
  }
}

export default App;
