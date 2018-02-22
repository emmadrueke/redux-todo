// Started with Actions

// Declare the types. They are supposed to be strings, but it is easier
// to declare them as a variable.
export const NEW_TODO = "NEW_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

// Action creaters
// the todo is the new todo item and needs to be passed to the reducer
// so that it can be added to the state.
export const addTodo = ( todo ) => {
  return {
    // Type will be used in reducers switch statment as the case
    type: NEW_TODO,
    // Payload is the data that is used to motify the state.
    payload: todo
  }
}

export const toggleComplete = ( index ) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  }
}