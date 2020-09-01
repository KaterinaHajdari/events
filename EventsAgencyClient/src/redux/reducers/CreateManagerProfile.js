export default function(state={},action){
    switch(action.type){
        case "CREATE_EVENT_BEGIN":
            return{...state,loading:true, error:null}
        case "CREATE_EVENT_SUCCESS":
            return{...state, loading:false, error:null}  
        case "CREATE_EVENT_FAILURE":
            return {...state,loading:false, error:null}
     default:
         return state;
  
}
}