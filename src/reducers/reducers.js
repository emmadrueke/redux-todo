// Reducers are 2nd

// Need to import action types
import {
  NEW_TODO,
  TOGGLE_COMPLETE
} from '../actions';

// Reducer needs two paramaters. first parameter is the initial
// piece of state. Second paramater is action
export default ( todos = [], action ) => {
  // What is a switch?
  switch (aciton.type) {
    case NEW_TODO:
      // We don't want to mutate the original state.
      // todos.push(action.payload) would be wrong
      return todos.concat(action.payload);
    case TOGGLE_COMPLETE:
      // .slice makes a shallow copy starting at index 0
      const newTodos = todos.slice(0);
      // each todo will have a Boolean value for completion
      // this line says that the newTodo array at a specific index
      // will change the completion Boolean value to it's opposite
      newTodos[aciton.payload].complete = !newTodos[aciton.payload].complete;
      return newTodos;
      // Always have a default that just returns the state
    default: 
      return todos;
  }
}