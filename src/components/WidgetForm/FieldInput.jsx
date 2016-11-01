import React, {Component} from 'react';

export default class FieldInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nilai: ""
    };
  }
  handleChange (e){
    this.setState({
      nilai: e.target.value
    })
  }
  render () {
    return (
      <div>
        <input
          placeholder={this.props.text}
          type={this.props.type}
          name={this.props.name}
          onChange={this.handleChange.bind(this)}
          value={this.state.nilai} />
      </div>
    );
  }
}
