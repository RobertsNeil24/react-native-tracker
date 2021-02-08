import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with that email and password

    // If we sign up, modify our state,  and say we are authenticated

    // If signing up fails, we probably need to reflect an error message
  };
};

const signin = (disatch) => {
  return ({ email, password }) => {
    // Try to signin

    //Handle success by updating by state

    // Handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    // Somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout},
  { isSignedIn: false }
);