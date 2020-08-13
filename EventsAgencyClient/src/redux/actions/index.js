import users from '../apis/users';

export const createUserProfile = formValues => async dispatch => {
    
    dispatch({type: "SIGN_UP_BEGIN"});

    const response = await users.post("/users", formValues)
    .then(res => {
        dispatch({type: "SIGN_UP_SUCCESS",  payload: formValues});
    })
    .catch(err => {
        dispatch({type: "SIGN_UP_FAILURE", payload: err});
    })

}
