import users from '../apis/users';

export default function(state = {}, action){

    switch(action.type){
        case "LOGIN_BEGIN":
            return {...state, loading: true, error: null}
        case "LOGIN_SUCCESS":
            return {...state, loading: false, error: null, values: action.payload}
        case "LOGIN_ADMIN_SUCCESS":
            return {...state, loading:false, error:null, isLoggedIn:true}
        case "LOGIN_FAILED":{
            return {...state, loading: false, error: action.payload}
        }
        default:
            return state;

    }

}