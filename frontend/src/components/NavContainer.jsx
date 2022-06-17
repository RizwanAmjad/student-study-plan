import React from "react";
import useAuth from "../hooks/useAuth";

import NavComponent from "./NavComponent";

function NavContainer({ name, children }) {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <NavComponent onLogout={handleLogout} name={name} />
      {children}
    </>
  );
}

export default NavContainer;
