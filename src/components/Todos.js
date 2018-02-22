// Todos.js is 5th

import React from 'react';
// We need to connect this file to redux
import { connect } from 'react-redux';
// We also need a new component where we create a checkbox next to each
// todo item so that we can check it completed or not 
import Todo from './Todo';

const Todos = ( props ) => {
  // We've declared out todos here and in mapStateToProp we connect
  // this with our store
  const todos = props.todos.map((todo, i) => <Todo todo={todo} key={i} index={i} />);
  return (
    <ul>
      { todos }
    </ul>
  );
}

// This a container component because we are connecting state to the 
// store, but also a presentational component

// we are recieving the state from the store and breaking it down into
// what data that we want, which is just the todos
const mapStateToPorops = ( state ) => {
  
  return {
    todos: state.todos
  }
}
// We are passing mapStateToProps to the this file (Todos)
// this is connecting data to the redux store
export default connect(mapStateToProps)(Todos);