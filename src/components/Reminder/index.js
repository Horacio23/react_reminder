import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReminder } from '../../actions'

import moment from 'moment';

class Reminder extends Component {
  deleteReminder = (id) => {
    this.props.deleteReminder(id);
  }

  render() {
    return (
        <li className="list-group-item">
          <div className="list-item">
            <div>{this.props.text}</div>
            {this.props.dueDate &&
              <div><em>{moment( new Date(this.props.dueDate)).fromNow()}</em></div>}
          </div>
          <div className="list-item delete-button"
               onClick={()=>this.deleteReminder(this.props.id)}>
            &#x2715;
          </div>
            
        </li>
    );
  }
}

export default connect(null, {deleteReminder})(Reminder);