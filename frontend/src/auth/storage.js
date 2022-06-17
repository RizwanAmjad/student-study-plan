import jwtDecode from "jwt-decode";

const tokenKey = "authToken";

const storeToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

const getUser = () => {
  const token = localStorage.getItem(tokenKey);
  return jwtDecode(token);
};

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

const removeToken = () => {
  localStorage.removeItem(tokenKey);
};

export default {
  getUser,
  getToken,
  removeToken,
  storeToken,
};
