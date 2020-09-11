import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/FetchUser";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteUser } from "../redux/actions/deleteUser";

function FetchUser({ userData, fetchUsers, loading, error, deleteUser }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  function DeleteUser(user_id) {
    deleteUser(user_id);
  }

  console.log(userData);
  return loading ? (
    <h2> Loading </h2>
  ) : error ? (
    <h2> {error} </h2>
  ) : (
    <div>
      <h2> User List </h2>{" "}
      <div>
        {" "}
        {userData.map((user) => (
          <p>
            {" "}
            {user.username}
            <IconButton
              aria-label="delete"
              style={{ color: "red", width: "30px" }}
            >
              <DeleteIcon onClick={() => DeleteUser(user.id)} />
            </IconButton>
          </p>
        ))}{" "}
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
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchUser);
