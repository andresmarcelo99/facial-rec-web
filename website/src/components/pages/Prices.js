import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { NavLink, Redirect } from "react-router-dom";

function Prices() {
  const [buy, setBuy] = useState(false);
  const isLogged = useSelector((state) => state.client.logged);

  if (buy) {
    return <Redirect to="/test" />;
  } else {
    return (
      <div className="pricesPage">
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
        <Row className="prices-row">
          <Col sm className="prices-col">
            <div className="col-header">Essential</div>
            <ul className="price-features-list">
              <li>Morbi at tortor ut neque maximus gravida.</li>
              <li>Aenean ac urna ac lectus tincidunt tempor.</li>
              <li>Sed pretium nunc vitae commodo feugiat.</li>
              <li>In condimentum felis ac faucibus tincidunt.</li>
              <li>Pellentesque volutpat ante non posuere convallis.</li>
            </ul>

            <div className="price-tag">Free</div>
            <div className="buy-div-btn">
              <Button
                variant="dark"
                onClick={() => {
                  console.log(isLogged);
                  setBuy(true);
                }}
              >
                Comprar
              </Button>
            </div>
          </Col>
          <Col sm className="prices-col">
            <div className="col-header">Advanced</div>
            <ul className="price-features-list">
              <li>Morbi at tortor ut neque maximus gravida.</li>
              <li>Aenean ac urna ac lectus tincidunt tempor.</li>
              <li>Sed pretium nunc vitae commodo feugiat.</li>
              <li>In condimentum felis ac faucibus tincidunt.</li>
              <li>Pellentesque volutpat ante non posuere convallis.</li>
            </ul>
            <div className="price-tag">$10</div>
            <div className="buy-div-btn">
              <Button
                variant="dark"
                onClick={() => {
                  setBuy(true);
                }}
              >
                Comprar
              </Button>
            </div>
          </Col>
          <Col sm className="prices-col">
            <div className="col-header">Elite</div>
            <ul className="price-features-list">
              <li>Morbi at tortor ut neque maximus gravida.</li>
              <li>Aenean ac urna ac lectus tincidunt tempor.</li>
              <li>Sed pretium nunc vitae commodo feugiat.</li>
              <li>In condimentum felis ac faucibus tincidunt.</li>
              <li>Pellentesque volutpat ante non posuere convallis.</li>
            </ul>
            <div className="price-tag">$30</div>
            <div className="buy-div-btn">
              <Button
                variant="dark"
                onClick={() => {
                  setBuy(true);
                }}
              >
                Comprar
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Prices;
