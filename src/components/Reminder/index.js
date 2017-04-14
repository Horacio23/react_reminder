import React, { Component } from 'react';

class Reminder extends Component {
  render() {
    return (
      <div>
        <li key={this.props.id}>{this.props.text}</li>
      </div>
    );
  }
}

export default Reminder;