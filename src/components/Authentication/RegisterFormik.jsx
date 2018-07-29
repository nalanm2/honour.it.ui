import React from "react";
import { Formik } from "formik";
import Register from "./Register.jsx";

export const RegisterFormik = rootProps => (
  <Formik
    initialValues={{
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      businessname: "",
      abn: "",
      accountingSoftware: ""
    }}
    validate={values => {
      const errors = {};
      if (!values.firstname) {
        errors.firstname = "Please enter first name";
      }
      if (!values.lastname) {
        errors.lastname = "Please enter last name";
      }
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
      if (!values.businessname) {
        errors.businessname = "Please enter businessname";
      }
      if (!values.abn) {
        errors.abn = "Please enter an acn";
      }
      if (!values.password) {
        errors.accountingSoftware = "Please select an accounting software";
      }
      return errors;
    }}
    onSubmit={values => {
      this.props.submit(values);
    }}
    render={props => <Register {...props} rootProps={rootProps} />}
  />
);

export default RegisterFormik;
