import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/FetchUser";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
function FetchUser({ userData, fetchUsers, loading, error }) {

  useEffect(() => {
    fetchUsers();
  }, []);

console.log(userData)
  return loading ? (
    <h2> Loading </h2>
  ) : error ? (
    <h2> {error} </h2>
  ) : (
    <div>
      <h2> User List </h2>{" "}
      <div>
        {" "}
        {
          userData.map((user) => <p> {user.username} 
          <div className="col-4">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>

              <IconButton aria-label="check">
                <CheckIcon />
              </IconButton>
            </div>
          </p>)}{" "}
      </div>{" "}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.FetchUser.users,
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchUser);
