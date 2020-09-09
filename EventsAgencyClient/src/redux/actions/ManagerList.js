import axios from "axios";

export const  MANAGER_LIST_REQUEST = " MANAGER_LIST_REQUEST";

export const  MANAGER_LIST_SUCCESS = " MANAGER_LIST_SUCCESS";

export const MANAGER_LIST_FAILURE = "MANAGER_LIST_FAILURE";

export const ManagerListRequest = () => {
  return {
    type: MANAGER_LIST_REQUEST,
  };
};

const ManagerListSuccess = (managers) => {
  return {
    type: MANAGER_LIST_SUCCESS,
    payload: managers,
  };
};
const ManagerListFailure= (error) => {
  return {
    type: MANAGER_LIST_FAILURE,
    payload: error,
  };
};

export const fetchManagerList = () => {
  return (dispatch) => {
    dispatch(ManagerListRequest);
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        const managers = response.data;
       
        dispatch(ManagerListSuccess(managers));
      })
      .catch((error) => {
        const errorMsg = error.message;
        
        dispatch(ManagerListFailure(errorMsg));
      });
  };
};
