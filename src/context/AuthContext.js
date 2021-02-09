import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { errorMessage: '', token: action.payload }
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  // make api request to sign up with that email and password
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });

    navigate('TrackList');

  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
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
  { signup, signin, signout },
  {
    token: null,
    errorMessage: ''
  }
);