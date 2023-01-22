import React, { useState } from "react";
import Button from "../Button";

import "./styles.css";

function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");

  function handleSubmit(event) {
    event.preventDefault();

    if (type === "entrada") {
      setItems([...items, { description, value, type }]);
    } else {
      setItems([...items, { description, value: -value, type }]);
    }

    setDescription("");
    setValue("");
    setType("entrada");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper-input">
        <label htmlFor="description">Descrição</label>
        <input
          autocomplete="off"
          type="text"
          id="description"
          name="description"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <small>Ex: Compra de roupas</small>
      </div>

      <div className="input-group">
        <div className="wrapper-input value">
          <label htmlFor="value">Valor</label>
          <input
            autocomplete="off"
            type="number"
            id="value"
            name="value"
            placeholder="0"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            required
          />
        </div>
        <div className="wrapper-input type">
          <label htmlFor="type">Tipo de valor</label>
          <select
            autocomplete="off"
            id="type"
            name="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            required
          >
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </div>

      <div className="wrapper-input">
        <Button type="submit" style="primary">
          Inserir valor
        </Button>
      </div>
    </form>
  );
}

export default Form;
