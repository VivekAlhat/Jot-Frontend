import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const UserBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="user-navbar">
      <Navbar.Brand>
        <Link
          to="/dashboard"
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            textDecoration: "none",
            color: "#000",
          }}
        >
          Jot
        </Link>
      </Navbar.Brand>
      <BurgerMenu />
    </Navbar>
  );
};

export default UserBar;
