import users from "../apis/users";
const initialState = {
  loading: false,

  values: {},
  error: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN_BEGIN":
      console.log("here");
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      console.log(action);
      return {
        ...state,
        loading: false,
        error: null,
        values: action.payload ? action.payload : {},
      };
    case "LOGIN_ADMIN_SUCCESS":
      return { ...state, loading: false, error: null, isLoggedIn: true };
    case "LOGIN_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "USER_LOG_OUT":
      return {
        ...state,
        values: { id: 0 },
      };
    case "EDIT_PROFILE_SUCCESS":
      return { ...state, values: action.payload };
    default:
      return state;
  }
}
