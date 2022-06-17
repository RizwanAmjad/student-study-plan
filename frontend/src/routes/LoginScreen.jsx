import React from "react";
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";

import FormComponent from "../components/forms/FormComponent";
import FormInputComponent from "../components/forms/FormInputComponent";
import FormSubmitComponent from "../components/forms/FormSubmitComponent";
import useApi from "../hooks/useApi";
import userApi from "../api/user";
import useAuth from "../hooks/useAuth";

import "./css/form.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8).required().label("Password"),
});

function LoginScreen(props) {
  const { error, request: loginRequest } = useApi(userApi.login);

  const { login, user } = useAuth();

  const handleLogin = async ({ email, password }) => {
    const authToken = await loginRequest(email, password);
    if (authToken) login(authToken);
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <FormComponent
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        initialErrors={{ email: "", password: "" }}
        onSubmit={handleLogin}
      >
        <FormInputComponent type="text" name="email" placeholder="Email" />
        <FormInputComponent
          type="password"
          name="password"
          placeholder="Password"
        />
        <span className="form-link">
          Not Registered <Link to="/register">Register</Link>
        </span>

        <FormSubmitComponent value="Login" error={error} />
      </FormComponent>
    </div>
  );
}

export default LoginScreen;
