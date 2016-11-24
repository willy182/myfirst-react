import React, {Component} from 'react';
import './List.css';

export default class List extends Component {
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
                {this.props.users.map((u) => 
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
