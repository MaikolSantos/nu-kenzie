import React, { useState } from "react";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Total from "../../components/Total";

import "./styles.css";

import Logo from "../../assets/images/logo-dark.svg";
import Empty from "../../assets/images/empty.svg";
import Card from "../../components/Card";

function DashBoard({ setIsStarted, items, setItems }) {
  const [filter, setFilter] = useState("");

  const itemsFilter = !filter
    ? [...items]
    : items.filter((item) => item.type === filter);

  const totalCash = items.reduce(
    (previous, current) => previous + current.value,
    0
  );

  function handleStarted() {
    setIsStarted(false);
  }

  function removeItem(current) {
    const newArray = items.filter((item) => item != current);
    setItems(newArray);
  }

  return (
    <section className="dashboard">
      <header className="header-section">
        <div className="container">
          <img src={Logo} alt="" />
          <Button type="button" onClick={handleStarted} style="grey">
            Início
          </Button>
        </div>
      </header>

      <section className="container">
        <aside>
          <Form items={items} setItems={setItems} />
          <Total total={totalCash} />
        </aside>
        <section className="wrapper-transactions">
          <div className="filters">
            <h2>Resumo Financeiro</h2>
            <div className="buttons">
              <Button
                type={"button"}
                onClick={() => setFilter("")}
                style={filter === "" ? "primary" : "grey"}
              >
                Todos
              </Button>
              <Button
                type={"button"}
                onClick={() => setFilter("entrada")}
                style={filter === "entrada" ? "primary" : "grey"}
              >
                Entradas
              </Button>
              <Button
                type={"button"}
                onClick={() => setFilter("despesa")}
                style={filter === "despesa" ? "primary" : "grey"}
              >
                Despesas
              </Button>
            </div>
          </div>

          <div className="transactions">
            {!itemsFilter.length ? (
              <div className="empty-transactions">
                <h3>Você ainda não possui nenhum lançamento</h3>
                <img src={Empty} alt="" />
                <img src={Empty} alt="" />
                <img src={Empty} alt="" />
              </div>
            ) : (
              <ul className="cards">
                {itemsFilter.map((item, index) => {
                  return (
                    <Card
                      item={item}
                      onClick={() => removeItem(item)}
                      key={index}
                      style={item.type}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </section>
    </section>
  );
}

export default DashBoard;
