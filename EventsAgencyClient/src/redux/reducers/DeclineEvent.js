export default function(state={},action){
    switch(action.type){
        case "DECLINE_EVENT_BEGIN":
            return{...state,loading:true, error:null}
        case "DECLINE_EVENT_SUCCESS":
            return{...state, loading:false, error:null}  
        case "DECLINE_EVENT_FAILURE":
            return {...state,loading:false, error:null}
     default:
         return state;
  
}
}