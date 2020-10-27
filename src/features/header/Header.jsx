import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logo/FNC-Logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className={styles.header}>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt="Logo FNC"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            BENCHMARK
          </Navbar.Brand>
        </Link>
      </Navbar>
    </>
  );
}

export default Header;
