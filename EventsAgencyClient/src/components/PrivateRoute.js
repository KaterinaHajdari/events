import React from "react";
import {connect} from "react-redux";
import {loginUserLocalStorage} from "../redux/actions/Login";
import {Route,Redirect} from "react-router-dom";

class PrivateRoute extends React.Component{

    login=async()=>{
        const values={
            email:localStorage.getItem("email"),
            password:localStorage.getItem("password"),
            id:localStorage.getItem("id"),
            username:localStorage.getItem("username"),
            type:localStorage.getItem("type")
        }

        await this.props.loginUserLocalStorage(values);
    }

    render(){
        const Component=this.props.component;

        return(
          <Route
          {...this.props.rest}
          render={props=>{
              if(this.props.login.values.id!==0){
                  return <Component {...props} />
              }
              else if(this.props.login.values.id===0 && typeof JSON.parse(localStorage.getItem("id"))==="number"){
                  this.login();
                  return <Component  {...props}/>

              }
              else{
                return <Redirect  to={{pathname:'/login' }} />
              }
          }} 
          />
        )
    }
}