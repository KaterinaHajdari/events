const initialState = {
    loading: false,
    
    values:{},
    error: "",
  };

export default function(state=initialState,action){
    switch(action.type){
        case "EDIT_PROFILE_BEGIN":
            return{...state,loading:true, error:null}
        case "EDIT_PROFILE_SUCCESS":
            return{...state, loading:false, error:null}  
        case "EDIT_PROFILE_FAILURE":
            return {...state,loading:false, error:null}
     default:
         return state;
  
}
}
