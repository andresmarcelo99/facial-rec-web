import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "../NavBar";
import LoginModal from "../LoginModal";
import prodDemo from "../prod-demo-temp.svg";

export class LandingPage extends Component {
  render() {
    return (
      <div>
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
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. <br />
                Ut enim ad minim veniam, quis nostrud <br />
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>

              {!this.props.client.logged && (
                <span>
                  <LoginModal />
                  <Link className="registerLink" to="register">
                    Not a user? Register here!
                  </Link>
                </span>
              )}
            </div>
          </Col>
          <Col md="5" className="rightside"></Col>
        </Row>
        <hr className="page-div" />
        <Row noGutters={true}>
          <Col className="product-demo">
            <div className="demo-info">
              <label className="demo-label-title">
                Facial Recognition Software
              </label>
              <p className="demo-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
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
}

const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps)(LandingPage);
