import users from "../apis/users";

export const deleteUser = (user_id) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_BEGIN" });
 
  users.delete(`/users/${user_id}`)
    .then((res) => {
      dispatch({ type: "DELETE_USER_SUCCESS",id:user_id });
      dispatch({type:"FETCH_USERS_REQUEST"})
    })
    .catch((err) => {
      dispatch({ type: "DELETE_USER_FAILURE ", payload: err });
    });
};