import { combineReducers } from 'redux';
import signup from './Signup';
import login from './Login';
import FetchUser from './FetchUser'

export default combineReducers({

    signup: signup,
    login:login,
    FetchUser:FetchUser
})