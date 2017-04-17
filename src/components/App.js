import React, { Component } from 'react';
import { connect } from 'react-redux' // used to connect the component to the redux flow
import { addReminder, clearReminders } from '../actions'
import Reminder from './Reminder'
import classnames from 'classnames';


class App extends Component {
  state = {
    text: '',
    dueDate:''
  }

  addReminder = () => {
    this.props.addReminder(this.state)
  }
  clearReminders = () => {
    this.props.clearReminders()
  }

  render() {

    return (
      <div className={classnames("App")} >
        <div className="title">
          <h2>Reminder Pro</h2>
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input 
            className="form-control"
            onChange={event => this.setState({text: event.target.value})}
            placeholder="I have to..."
            onFocus={() => this.setState({text:''})}
            value={this.state.text}
            type="text" />
            <input 
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({dueDate: event.target.value})}
              />
          </div>
          <div className="form-group">
            <button
              type="button"
              onClick={this.addReminder}
              className="btn btn-success">
              Add Reminder
            </button>
          </div>
        </div>
        <ul className="list-group col-sm-4">
          {this.props.reminders.map(reminder => <Reminder key={reminder.id} {...reminder} />)}
        </ul>
        <div className="">
          <button 
            className="btn btn-danger"
            onClick={this.clearReminders}>
            Clear Reminders
          </button>
        </div>
      </div>
    );
  }
}

// allows you to decide how you want state from the store to be passed to your components through props
function mapStateToProps(state) {
  return {
    reminders: state
  }
}

// // this function will be used when more that one actions will be used, else use the shorthad definition
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder}, dispatch)
// }

export default connect(mapStateToProps,{addReminder, clearReminders})(App);

//Shortcut for when using just one action creator:
// export default connect(null,{addReminder})(App);
//
//No need to use bindActionCreators in this case.