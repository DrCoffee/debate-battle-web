import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Login extends Component {

  render() {
      const loginDivStyle = {
          marginTop: 100,
          color: 'white'
      }

    return (
        <div style={loginDivStyle}>
            <a id="twitter-button" onClick={this._handleSignInClick} class="btn btn-social  btn-twitter">
                <i class="fa fa-twitter"></i> Sign in with Twitter
            </a>
        </div>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open("http://localhost:4000/auth/twitter", "_self");
  };
}