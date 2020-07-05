import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import NavBar from "../NavBar";
import LoginModal from "../LoginModal";
import prodDemo from "../prod-demo-temp.jpg";

function LandingPage() {
  // const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const client = useSelector((state) => state.client);
  return (
    <div>
      <Row noGutters={true}>
        <Col md="7" className="leftside">
          <NavBar />

          <div id="pushContent"></div>
          <div className="landing-text">
            {client.logged && (
              <div
                style={{
                  color: "#b864e6",
                  fontWeight: "300",
                  fontSize: "3vh",
                }}
              >
                Welcome, Test Client
                {/* console.log(this.props.client.logged_client.name) */}
              </div>
            )}
            {/* {isAuthenticated && (
              <div
                style={{
                  color: "#b864e6",
                  fontWeight: "300",
                  fontSize: "3vh",
                }}
              >
                Welcome, {user.nickname}
              </div>
            )} */}

            <label>
              Identificando <br /> tu personal.
            </label>
            <p className="slogan-p">
              Somos una empresa que surge con la necesidad de reinventar un
              software eficiente para el reconocimiento facial, reduciendo
              costos, evitando demoras en el ingreso del personal a las empresas
              y haciendo el proceso mas efectivo y mucho más personal.
            </p>

            {
              !client.logged && (
                <span>
                  {<LoginModal />}
                  {client.curr !== "registered" && (
                    <Link className="registerLink" to="register">
                      ¿No eres usuario? ¡Registrate aqui!
                    </Link>
                  )}
                  {client.curr === "registered" && (
                    <div className="register-success">
                      ¡Fuiste registrado exitosamente!
                    </div>
                  )}
                </span>
              )

              // {!isAuthenticated && (
              //   <button
              //     className="auth-btn"
              //     onClick={() => loginWithRedirect({})}
              //   >
              //     Log in
              //   </button>
              // )}
              // {isAuthenticated && (
              //   <button className="auth-btn" onClick={() => logout()}>
              //     Log out
              //   </button>
              // )}

              // {!isAuthenticated && (
              //   <div>
              //     {/* <LoginModal /> */}
              //     <Link className="registerLink" to="register">
              //       ¿No eres usuario? ¡Registrate aqui!
              //     </Link>
              //   </div>
              //)
            }
          </div>
        </Col>
        <Col md="5" className="rightside"></Col>
      </Row>
      <hr className="page-div" />
      <Row noGutters={true}>
        <Col className="product-demo">
          <div className="demo-info">
            <label className="demo-label-title">
              Software de Reconocimiento Facial
            </label>
            <p className="demo-text">
              SID Software de reconocimiento facial para hacer eficiente el
              registro diario (marcaje) del personal de las empresas. Ofrecemos
              precisión y accesibilidad a tu empresa.
            </p>
          </div>
          <div>
            <img className="prod-demo-img" alt="prod demo" src={prodDemo} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps)(LandingPage);
