

const initialState = {
    loading: false,
    
    values:{},
    error: "",
  };
export default function(state=initialState,action){
    switch(action.type){
        case "APPROVE_EVENT_BEGIN":
            return{...state,loading:true, error:null}
        case "APPROVE_EVENT_SUCCESS":
            return{...state, loading:false, error:null}  
        case "APPROVE_EVENT_FAILURE":
            return {...state,loading:false, error:null}
     default:
         return state;
  
}
}