// TodoForm.js is 7th

// This component is where will be creating a form to enter a new
// todo item. That being said we need to import out addTodo action 
// from our action.js file
import React, { Componenet } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoFrom extends Componenet {
  constructor( props ) {
    super( props );
    this.state = {
      todoValue: ""
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }
  // could define these here and use an arrow function
  // in class we did bind them like above
  addTodo( event ) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.todoValue,
      completed: false
    });
    this.setState({
      todoValue:""
    });
  }
  updateNewTodo(event) {
    this.setState({
      todoValue: event.target.value
    });
  }

  render() {
    return (
      <div className="TodoFrom">
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.updateNewTodo}
            placeholder="New Todo"
            value={this.state.todoValue}
            />
          </form>
      </div>  
    );
  }
}

mapStateToProps = ( state ) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo})(TodoFrom);
