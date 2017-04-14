import React, { Component } from 'react';

import classnames from 'classnames';

class App extends Component {
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
            type="text" />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-success">
              Add Reminder
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
