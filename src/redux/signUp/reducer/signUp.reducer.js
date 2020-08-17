let serializedState = JSON.parse(localStorage.getItem('state'));

const signUpReducer = (state = {}, action) => {
  if(action.type === 'SAVE') {
    if (serializedState === null) {
      serializedState = {signUp: {}}
    }
    serializedState.signUp[action.handler] = action.form;
    return serializedState.signUp
  } else return state
};
export { signUpReducer };
