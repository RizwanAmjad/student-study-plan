import { useContext } from "react";
import AuthContext from "../auth/context";
import jwtDecode from "jwt-decode";
import authStorage from "../auth/storage";

// export default function useAuth() {
//   return useContext(AuthContext)
// }

export default () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (token) => {
    setUser(jwtDecode(token));
    authStorage.storeToken(token);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return {
    login,
    logout,
    user,
  };
};
