import apiClient from "./client";

const loginEndpoint = "/auth";
const registerEndpoint = "/users";

function login(email, password) {
  return apiClient.post(loginEndpoint, { email, password });
}

function register(name, email, password) {
  return apiClient.post(registerEndpoint, { name, email, password });
}

export default {
  login,
  register,
};
