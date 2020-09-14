import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchManagerList } from "../redux/actions/ManagerList";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import { deleteUser } from "../redux/actions/deleteUser";
import DeleteIcon from "@material-ui/icons/Delete";

function ManagerList({
  managerData,
  fetchManagerList,
  loading,
  error,
  deleteManager,
}) {
  useEffect(() => {
    fetchManagerList();
  }, []);

  const deleteManagerHandler = (id) => {
    deleteManager(id);
  };
  return loading ? (
    <h2> Loading </h2>
  ) : error ? (
    <h2> {error} </h2>
  ) : (
    <div>
      <h2> Manager List </h2>{" "}
      <div>
        {" "}
        {managerData.map((managers) => (
          <p>
            {" "}
            {managers.username}
            <IconButton
              aria-label="delete"
              style={{ color: "red", width: "30px" }}
            >
              <DeleteIcon onClick={() => deleteManagerHandler(managers.id)} />
            </IconButton>
          </p>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    managerData: state.ManagerList.managers,
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchManagerList: () => dispatch(fetchManagerList()),
    deleteManager: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerList);
