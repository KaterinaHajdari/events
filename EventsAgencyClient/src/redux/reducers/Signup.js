export default function(state = {}, action){

    switch(action.type){
        case "SIGN_UP_BEGIN":
            return {...state, loading: true, error: null}
        case "SIGN_UP_SUCCESS":
            return {...state, loading: false, error: null, values: action.payload}
        case "SIGN_UP_FAILED":{
            return {...state, loading: false, error: action.payload}
        }
        default:
            return state;

    }

}