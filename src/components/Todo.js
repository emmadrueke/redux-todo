// Todo.js is 6th

import React, { Component } from 'react';
import { connect } from 'react-redux';
// We need to bring an action in
// This component we are creating checkboxes and these will change
// the Boolean value on our completion value
import { toggleComplete } from '../actions';

class Todo extends Componenet {
  toggleComplete() {
    // we have to use Redux to toggle
    // toggleComplete is already defined and is being passed to this
    // file through connect as a prop
    // toggleComplete expects an argument that is an index 
    // we defined this in our actions.js
    this.props.toggleComplete(this.props.index);
  }
  render() {
    return (
      <li>
        <input
        type="checkbox"
        // why .bind(this)?
        onChange={this.toggleComplete.bind(this)}
        />
        {/* this.props is being passed from Todo.js */}
        { this.props.todo.value }
      </li>
    )
  }
}
// we don't need anything from the redux store so we pass connect null
// But, we do need the action toggleComplete and we pass it to this
// componenet file (Todo.js)
export default connect(null, { toggleComplete })(Todo);

// connect() takes two arguments. The first is going to be the callback
// with your simplified state
// the second argument is an object of all your actions
// and then a second call to where you want to pass the two arguments to