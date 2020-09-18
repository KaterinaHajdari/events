const initialState = {
    loading: false,
    
    values:{},
    error: "",
  };
export default function(state = initialState, action){

    switch(action.type){

        case "LOGIN_MANAGER_BEGIN":
            return{...state, loading:true, error:null}
        case "LOGIN_MANAGER_SUCCESS":
            return{...state, loading:false, error:null, values:action.payload}
        case "LOGIN_MANAGER_FAILURE":
            return{...state,loading:false, error:action.payload}
        default:
            return state;
    }
}




