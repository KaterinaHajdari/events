export default function(state = {}, action){

    switch(action.type){
        case "EVENT_BEGIN":
            return {...state, loading: true, error: null}
        case "EVENT_SUCCESS":
            return {...state, loading: false, error: null, values: action.payload}
        case "EVENT_FAILED":{
            return {...state, loading: false, error: action.payload}
        }
        default:
            return state;

    }

}