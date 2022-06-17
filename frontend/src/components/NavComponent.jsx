import React from "react";
import { Link } from "react-router-dom";
import "./css/nav.css";

function NavComponent({ name, onLogout }) {
  return (
    <nav>
      <Link to="/">
        <h2>Study Plan App</h2>
      </Link>
      <Link to="/study-plans">
        <h2>Study Plans</h2>
      </Link>
      <h3>Hi, {name}</h3>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
}

export default NavComponent;
