import managers from "../apis/managers";
export const createManagerProfile= managerValues=> async dispatch=>{
  dispatch({type:"CREATE_MANAGER_BEGIN"})
  const response= await managers.post("/managers", managerValues)
  .then( res=>{
  dispatch({type:"CREATE_MANAGER_SUCCESS" , payload:managerValues})
  }).catch( err=> {
     dispatch({type:"CREATE_MANAGER_FAILURE" , payload:err})
  })

}