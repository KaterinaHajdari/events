import {
  MANAGER_LIST_REQUEST,
  MANAGER_LIST_SUCCESS,
  MANAGER_LIST_FAILURE,
} from "../actions/ManagerList";

const initialState = {
  loading: false,
  managers: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MANAGER_LIST_SUCCESS:
      return {
        loading: false,
        managers: action.payload,
        error: "",
      };
    case MANAGER_LIST_FAILURE:
      return {
        loading: false,
        managers: [],
        error: action.payload,
      };
    case "DELETE_USER_SUCCESS":
      console.log(action.id);
      return {
        ...state,

        managers: state.managers.filter((el) => el.id !== action.id),
      };
    default:
      return state;
  }
};
export default reducer;
