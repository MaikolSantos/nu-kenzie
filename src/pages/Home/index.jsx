import React from "react";

import Button from "../../components/Button";
import ImageHome from "../../components/ImageHome";

import logo from "../../assets/images/logo.svg";

import "./styles.css";

function Home({ setIsStarted }) {
  function handleStarted() {
    setIsStarted(true);
  }

  return (
    <section className="home">
      <div className="container">
        <div className="introduction-wrapper">
          <img src={logo} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <Button type="button" onClick={handleStarted} style="primary">
            Iniciar
          </Button>
        </div>
        <ImageHome />
      </div>
    </section>
  );
}

export default Home;
