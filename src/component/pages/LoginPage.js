import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Forms/LoginForm";
//import { browserHistory } from "react-router";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
class LoginPage extends Component {
  state = {
    redirect: false
  };

  submit = data => {
    console.log(data);
    fetch("https://localhost:44371/api/Administer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        // return response.json();
        console.log(response);
      })
      .then(response => {
        if (response) {
          window.alert("Invalid Email or Password");
        } else {
          this.props.history.push("/AdminPanel");
        }
      });
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
        <Link to="/AdminPanel">Login</Link>
      </div>
    );
  }
}

export default withRouter(LoginPage);
