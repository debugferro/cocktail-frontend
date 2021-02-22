export function authenticationReducer(state = false, action) {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return { ...state, authenticated: true };
    case 'SET_LOGGED_OFF':
      return { ...state, authenticated: false };

    default:
      return state;
  }
}

export function userReducer(state = '', action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };

    default:
      return state;
  }
}
