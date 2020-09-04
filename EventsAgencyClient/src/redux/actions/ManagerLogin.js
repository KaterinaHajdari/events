import managers from "../apis/managers";

export const checkManagerLoginValues= managerLoginValues=>async dispatch=>{
    dispatch({type:"LOGIN_MANAGER_BEGIN"})
    const response=await managers.get("/managers?username="+managerLoginValues.username+"&password="+managerLoginValues.password)
    .then(res=>{
       if(managerLoginValues.username===res.data[0].username && managerLoginValues.password===res.data[0].password){
          dispatch({type:"LOGIN_MANAGER_SUCCESS", payload:managerLoginValues});
       }
       else{
         dispatch({type:"LOGIN_MANAGER_FAILURE", payload:{error:"wrong credentials"}})
       }
    })
 }