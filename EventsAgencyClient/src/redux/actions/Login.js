import users from '../apis/users';

export const checkLoginValue = loginValues => async dispatch => {
    
   
 dispatch({type: "LOGIN_BEGIN"});

    const response = await users.get("/users?username="+loginValues.username+"&password="+loginValues.password)
    .then(res => {
     if(loginValues.username===res.data.username && loginValues.password===res.data.password){
        dispatch({type: "LOGIN_SUCCESS",  payload: loginValues});
        
     }
    })
    /*
    .catch(err => {
        dispatch({type: "LOGIN_FAILURE", payload: err});
    })
*/
}
