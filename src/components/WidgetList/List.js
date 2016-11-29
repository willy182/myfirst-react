import React, {Component} from 'react';
import './List.css';

export default class List extends Component {
  render () {
    return (
        <div className="App-list">
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.members.map((m) => 
                    <tr key={m.id}>
                        <td>{m.name}</td>
                        <td>{m.email}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
  }
}
