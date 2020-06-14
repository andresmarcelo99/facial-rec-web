import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>testing seas</h3>
        </div>
        <div>
          <Button
            variant="dark"
            style={{
              background: "#9615db",
              borderColor: "#9615db",
              color: "white",
              margin: "1em",
            }}
          >
            <NavLink style={{ color: "white" }} to="/">
              Home
            </NavLink>
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
