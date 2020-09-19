const initialState = {
    loading: false,
    
    values:{},
    error: "",
  };

export default function(state=initialState,action){
    switch(action.type){
        case "DELETE_USER_BEGIN":
            return{...state,loading:true, error:null}
        case "DELETE_USER_SUCCESS":
            return{...state, loading:false, error:null}  
        case "DELETE_USER_FAILURE":
            return {...state,loading:false, error:null}
     default:
         return state;
  
}
}
