import React from "react";

import { FaTrash } from "react-icons/fa";
import Button from "../Button";

import "./styles.css";

function Card({ item, onClick, style }) {
  return (
    <li className={`card ${style}`}>
      <header className="header-card">
        <h3>{item.description}</h3>
        <p>R$ {Math.abs(item.value).toFixed(2)}</p>
        <Button type="button" onClick={onClick} style="icon">
          <FaTrash />
        </Button>
      </header>
      <small>{item.type[0].toUpperCase() + item.type.slice(1)}</small>
    </li>
  );
}

export default Card;
