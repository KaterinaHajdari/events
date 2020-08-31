import { combineReducers } from 'redux';
import signup from './Signup';
import login from './Login';
import FetchUser from './FetchUser';
import CreateEvent from './CreateEvent'

export default combineReducers({

    signup: signup,
    login:login,
    FetchUser:FetchUser,
    CreateEvent:CreateEvent
})