import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <div className="app-sidebar sidebar-shadow">
        <div className="app-header__logo">
          <div className="logo-src"></div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
        <div className="scrollbar-sidebar">
          <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
              <li>
                <NavLink activeClassName="mm-active" exact to={`/`}>
                  Comparación
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="mm-active" to={`/benchmark`}>
                  Benchmarks
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div id="logo-inbev">
          <img src="assets/images/logo-inbev.png" />
        </div>
      </div>
    </div>
  );
}
