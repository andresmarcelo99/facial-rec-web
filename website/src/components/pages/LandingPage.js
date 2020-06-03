import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../NavBar";
import LoginModal from "../LoginModal";

export class LandingPage extends Component {
  render() {
    return (
      <Row noGutters={true}>
        <Col md="7" className="leftside">
          <NavBar />
          <div id="pushContent"></div>
          <div className="landing-text">
            <label>
              We build & <br /> design <br /> web applications.
            </label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. <br />
              Ut enim ad minim veniam, quis nostrud <br />
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <LoginModal />
            <Link className="registerLink" to="register">
              Not a user? Register here!
            </Link>
          </div>
        </Col>
        <Col md="5" className="rightside"></Col>
      </Row>
    );
  }
}

export default LandingPage;
