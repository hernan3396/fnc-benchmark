import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Home.module.css";
import * as constants from "../../app/constants.js";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      {constants.brands.map((brand) => (
        <li key={brand.id}>
          <Link to={brand.name}>
            <img
              src={brand.image}
              alt={brand.name}
              className={styles.brandImage}
            />
            - {brand.name}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Main;
