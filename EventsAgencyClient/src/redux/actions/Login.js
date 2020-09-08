import users from '../apis/users';

export const checkLoginValue = loginValues => async dispatch => {
     
 dispatch({type: "LOGIN_BEGIN"});
  if(loginValues.username==="admin" && loginValues.password==="admin"){
      dispatch({type:"LOGIN_ADMIN_SUCCESS"})
  }
  else{
    const response = await users.get("/users?username="+loginValues.username+"&password="+loginValues.password)
    .then(res => {
     if(loginValues.username===res.data[0].username && loginValues.password===res.data[0].password){
        {/*
          localStorage.setItem("id", res.data[0].id);
          localStorage.setItem("username", res.data[0].username);
          localStorage.setItem("email", res.data[0].email);
          localStorage.setItem("type", "user");
          localStorage.setItem("password", res.data[0].password);
        
        */}
        dispatch({type: "LOGIN_SUCCESS",  payload: res.data[0]});      
     }
     else{
        dispatch({type: "LOGIN_FAILURE", payload: {error:"wrong credentials"}});
     }
    })
   
}
}

export const loginUserLocalStorage = savedUserValues => async dispatch=>{
   dispatch({type:"LOGIN_SUCCESS", payload:savedUserValues})
}

export const adminLogOut =()=> dispatch =>{
   dispatch({type:"ADMIN_LOG_OUT"});
}
 

