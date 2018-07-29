import React from "react";
import { withRouter } from "react-router";
import { Formik } from "formik";
import Login from "./Login.jsx";

export const LoginFormik = rootProps => (
  <Formik
    initialValues={{
      username: "",
      password: "",
      submitted: false
    }}
    validate={values => {
      const errors = {};

      if (!values.username) {
        errors.username = "Please enter an email address";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
      ) {
        errors.username = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Please enter password";
      }

      return errors;
    }}
    onSubmit={(values, { props }) => {
      if (values.username === "nalanm@ymail.com" && values.password === "123") {
        values.submitted = true;
      }

      //this.props.submit(values);
    }}
    render={props => <Login {...props} rootProps={rootProps} />}
  />
);

export default withRouter(LoginFormik);
