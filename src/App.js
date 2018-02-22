//App.js is 4th

// planning to create two components
// We want to have a component where we can create a new Todo Item
// And another componenet that renders all of the Todo Items
import React, { Component } from 'react';
import TodoFrom from './components/TodoForm';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <Todos />
      </div>
    )
  }
}

export default App;