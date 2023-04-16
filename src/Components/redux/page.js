import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {loginAction, logoutAction } from "./actions";

class Page extends PureComponent {
  render() {
    const {
      value,
      email,
      password,
      loginAction,
      logoutAction
    } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={loginAction}>login</button>
        <button onClick={logoutAction}>logout</button>
        <p>Email - {email}</p>
        <p>Password - {password}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
  email: state.email,
  password: state.password
});

const mapDispatchToProps = (dispatch) => ({
 loginAction: () => dispatch(loginAction()),
  logoutAction: () => dispatch(logoutAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
