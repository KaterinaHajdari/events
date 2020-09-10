import { combineReducers } from "redux";
import signup from "./Signup";
import login from "./Login";
import FetchUser from "./FetchUser";
import ManagerLogin from "./ManagerLogin";
import DeclineEvent from "./DeclineEvent";
import ApproveEvent from "./ApproveEvent"
import ManagerList from "./ManagerList";
import EditProfile from "./EditProfile";
import deleteUser from "./deleteUser";
export default combineReducers({
  signup: signup,
  login: login,
  FetchUser: FetchUser,
  ManagerLogin: ManagerLogin,
  DeclineEvent: DeclineEvent,
  ApproveEvent:ApproveEvent,
  ManagerList: ManagerList,
  EditProfile:EditProfile,
  deleteUser:deleteUser
});

