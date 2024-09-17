import React from "react";
import "./Resultados.css";

const Resultados = ({ name }) => {
  return (
    <div className="main">
      <div id="text">
        <h2>{name}</h2>
        <p>/ person</p>
      </div>
      <div id="value">
        <p>$0.00</p>
      </div>
    </div>
  );
};

export default Resultados;
