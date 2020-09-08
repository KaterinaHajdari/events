import users from "../apis/events";

export const editProfile=(user_id, editProfileNewValues)=>async dispatch=>{
    dispatch({type:"EDIT_PROFILE_BEGIN"})
users.put(`/users/${user_id}`, editProfileNewValues)
    .then(res=>{
        dispatch({type:"EDIT_PROFILE_SUCCESS", payload:res.data})
    }).catch(err=>{
        dispatch({type:"EDIT_PROFILE_FAILURE" , payload:err})
    })
}