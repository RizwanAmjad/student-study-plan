import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import FormComponent from "../components/forms/FormComponent";
import FormInputComponent from "../components/forms/FormInputComponent";
import FormSubmitComponent from "../components/forms/FormSubmitComponent";

import useApi from "../hooks/useApi";
import authApi from "../api/user";

import "./css/form.css";

const loginSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8).required().label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required()
    .label("Confirm Password"),
});

function RegisterScreen(props) {
  const { error, request: registerRequest } = useApi(authApi.register);
  const navigate = useNavigate();

  const handleRegister = async ({ name, email, password }) => {
    const user = await registerRequest(name, email, password);
    if (user) {
      alert("Successfully Registered");
      navigate("/login");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <FormComponent
        validationSchema={loginSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        initialErrors={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleRegister}
      >
        <FormInputComponent type="text" name="name" placeholder="Name" />
        <FormInputComponent type="text" name="email" placeholder="Email" />
        <FormInputComponent
          type="password"
          name="password"
          placeholder="Password"
        />
        <FormInputComponent
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <span className="form-link">
          Already Registered <Link to="/login">Login</Link>
        </span>

        <FormSubmitComponent value="Register" error={error} />
      </FormComponent>
    </div>
  );
}

export default RegisterScreen;
