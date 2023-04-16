const initialState = {
    value: 0,
    email: "",
    password: ""
  };
  
  function addReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case "Login":
        return {
          ...state,
          value: state.value + action.value,
          email: action.email,
          password: action.password
        };
      case "Logout":
        return {
          ...state,
          value: state.value - action.value,
          email: action.email,
          password: action.password
        };
      default:
        return state;
    }
  }
  
  export default addReducer;
  