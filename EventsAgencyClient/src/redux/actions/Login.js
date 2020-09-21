import users from '../apis/users';

export const checkLoginValue = loginValues => async dispatch => {
     
 dispatch({type: "LOGIN_BEGIN"});
  
  
    const response = await users.get("/users?username="+loginValues.username+"&password="+loginValues.password)
    .then(res => {
     if(loginValues.username===res.data[0].username && loginValues.password===res.data[0].password){
        
          localStorage.setItem("id", res.data[0].id);
 
        dispatch({type: "LOGIN_SUCCESS",  payload: res.data[0]});      
     }
     else{
        dispatch({type: "LOGIN_FAILURE", payload: {error:"wrong credentials"}});
     }
    })
   
}


export const loginWithLocalStorage = userId => async dispatch=>{
   users.get(`/users/${userId}`).then(res=>{
      dispatch({type: "LOGIN_SUCCESS",  payload: res.data}); 
   })
}

export const userLogOut =()=> dispatch =>{
   localStorage.removeItem("id")
   dispatch({type:"USER_LOG_OUT"});
}



