import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "../logo.png";

function ThanksPage() {
  return (
    <div className="thanks-page">
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "4vh",
          padding: "3vh",
        }}
      >
        Gracias por registrarte
        <p>ahora puedes iniciar sesion en la pagina principal!</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <NavLink className="thanks-go-home-link" to="/">
          Home
        </NavLink>
      </div>
      <div className="thanks-logo">
        <Image src={logo} fluid />
      </div>
    </div>
  );
}

export default ThanksPage;
