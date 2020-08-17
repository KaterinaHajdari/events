import { combineReducers } from 'redux';
import signup from './Signup';
import login from './Login'
export default combineReducers({

    signup: signup,
    login:login
})