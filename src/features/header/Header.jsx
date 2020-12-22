import React, { useEffect } from "react";

function Header() {
  return (
    <>
      <div className="app-header header-shadow">
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
        <div className="app-header__content">
          <div className="app-header-left">
            <ul className="header-menu nav">
              <li className="nav-item">
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    className="mb-2 mr-2 dropdown-toggle btn btn-secondary"
                  >
                    Marcas
                  </button>
                  <div
                    tabindex="-1"
                    role="menu"
                    aria-hidden="true"
                    className="dropdown-menu"
                    x-placement="bottom-start"
                    style={{
                      position: "absolute",
                      transform: "translate3d(0px, 33px, 0px)",
                      top: "0px",
                      left: "0px",
                      willChange: "transform",
                    }}
                  >
                    <button
                      type="button"
                      tabindex="0"
                      className="dropdown-item"
                    >
                      <img
                        src="assets/images/corona.png"
                        className="marcas-icon"
                      />
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </button>
                    <button
                      type="button"
                      tabindex="0"
                      className="dropdown-item"
                    >
                      <img
                        src="assets/images/patricia.png"
                        className="marcas-icon"
                      />
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </button>
                    <button
                      type="button"
                      tabindex="0"
                      className="dropdown-item"
                    >
                      <img
                        src="assets/images/stella.png"
                        className="marcas-icon"
                      />
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </button>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    className="mb-2 mr-2 dropdown-toggle btn btn-secondary"
                  >
                    Objetivos
                  </button>
                  <div
                    tabindex="-1"
                    role="menu"
                    aria-hidden="true"
                    className="dropdown-menu"
                    x-placement="bottom-start"
                    style={{
                      position: "absolute",
                      transform: "translate3d(0px, 33px, 0px)",
                      top: "0px",
                      left: "0px",
                      willChange: "transform",
                    }}
                  >
                    <button
                      type="button"
                      tabindex="0"
                      className="dropdown-item"
                    >
                      Conversión
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </button>
                    <button
                      type="button"
                      tabindex="0"
                      className="dropdown-item"
                    >
                      Interacción
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </button>
                    <button
                      type="button"
                      tabindex="0"
                      className="dropdown-item"
                    >
                      Reconocimiento de marca
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </button>
                    <button
                      type="button"
                      tabindex="0"
                      className="dropdown-item"
                    >
                      Reproducciones de video
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </button>
                    <button
                      type="button"
                      tabindex="0"
                      className="dropdown-item"
                    >
                      Tráfico
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="app-header-right">
            <ul className="header-menu nav">
              <li className="nav-item">
                <div
                  id="reportrange"
                  style={{
                    background: "white",
                    cursor: "pointer",
                    padding: "5px 10px",
                    border: "none",
                    width: "100%",
                    marginRight: "20px",
                    textTransform: "capitalize",
                  }}
                >
                  <i className="fa fa-calendar"></i>&nbsp;
                  <span></span> <i className="fa fa-caret-down"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
