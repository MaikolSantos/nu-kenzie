import React from "react";

import "./styles.css";

function Total({ total }) {
  return (
    <div className="wrapper-value">
      <h2>
        <span>Valor Total</span> <span className="value">$ {total}</span>
      </h2>
      <small>O valor se refere ao saldo</small>
    </div>
  );
}

export default Total;
