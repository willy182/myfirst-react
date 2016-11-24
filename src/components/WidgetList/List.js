import React, {Component} from 'react';
import config from '../../config';
import './List.css';

export default class List extends Component {
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
  render () {
    return (
        <div className="App-list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.users.map((u) => 
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
  }
}
