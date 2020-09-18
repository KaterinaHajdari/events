import React from "react";
import { connect } from "react-redux";
import { loginWithLocalStorage } from "../redux/actions/Login";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
 

  login =  () => {

     this.props.loginWithLocalStorage(localStorage.getItem('id'));

}

  render() {
    const Component = this.props.component;

    return (
      <Route
        {...this.props.rest}
        render={(props) => {
          if (this.props.login.values.id !== 0) {
            return <Component {...props} />;
          } else if(localStorage.getItem("id") !== null) {
            this.login();

                        return <Component {...props} />

            }else{
            return <Redirect to={{ pathname: "/login" }} />;
            }
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}
export default connect(mapStateToProps, { loginWithLocalStorage })(
  PrivateRoute
);
