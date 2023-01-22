import React from "react";

import "./styles.css";

function Button({ type, children, onClick, style }) {
  return (
    <button className={style} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
