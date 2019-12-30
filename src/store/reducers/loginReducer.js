const initialState = {
  token: null
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};

export default loginReducers;
