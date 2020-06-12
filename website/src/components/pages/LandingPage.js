import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { useAuth0 } from "../../react-auth0-spa";

import NavBar from "../NavBar";
import LoginModal from "../LoginModal";
import prodDemo from "../prod-demo-temp.svg";

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
                Welcome, {client.logged_client.currentClient.name}
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
                  <Link className="registerLink" to="register">
                    ¿No eres usuario? ¡Registrate aqui!
                  </Link>
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
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
