import React from "react";

export default function Objetivos() {
  return (
    <div class="dropdown d-inline-block">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        data-toggle="dropdown"
        class="mb-2 mr-2 dropdown-toggle btn btn-secondary"
      >
        Objetivos
      </button>
      <div
        tabindex="-1"
        role="menu"
        aria-hidden="true"
        class="dropdown-menu"
        x-placement="bottom-start"
        style={{
          position: "absolute",
          transform: "translate3d(0px, 33px, 0px)",
          top: "0px",
          left: "0px",
          willChange: "transform",
        }}
      >
        <button type="button" tabindex="0" class="dropdown-item">
          Conversión
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </button>
        <button type="button" tabindex="0" class="dropdown-item">
          Interacción
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </button>
        <button type="button" tabindex="0" class="dropdown-item">
          Reconocimiento de marca
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </button>
        <button type="button" tabindex="0" class="dropdown-item">
          Reproducciones de video
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </button>
        <button type="button" tabindex="0" class="dropdown-item">
          Tráfico
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </button>
      </div>
    </div>
  );
}
