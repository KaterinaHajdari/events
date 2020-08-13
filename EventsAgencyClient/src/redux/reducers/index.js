import { combineReducers } from 'redux';
import signup from './reducers';

export default combineReducers({
    replaceMe:()=>'project',
    signUp: signup
})