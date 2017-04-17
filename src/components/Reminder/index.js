import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReminder } from '../../actions'


class Reminder extends Component {
  deleteReminder = (id) => {
    this.props.deleteReminder(id);
  }

  render() {
    return (
        <li className="list-group-item">
          <div className="list-item">{this.props.text}</div>
          <div className="list-item">{this.props.dueDate}</div>
          <div className="list-item delete-button"
               onClick={()=>this.deleteReminder(this.props.id)}>
            &#x2715;
          </div>
            
        </li>
    );
  }
}

export default connect(null, {deleteReminder})(Reminder);