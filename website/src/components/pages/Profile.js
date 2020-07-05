import React from "react";
import { Button, NavLink } from "react-bootstrap";
import picture from "../profilepicture.png";

function Profile() {
  return (
    <div>
      <div className="home-btn">
        <Button variant="dark">
          <NavLink style={{ color: "white" }} to="/">
            Home
          </NavLink>
        </Button>
      </div>

      <div className="wrapper">
        <div class="left">
          <img src={picture} alt="user" width="100" />
          <h4>Test User</h4>
          <p>Client</p>
        </div>
        <div class="right">
          <div class="info">
            <h3>Información</h3>
            <div class="info_data">
              <div class="data">
                <h4>Correo</h4>
                <p>test@mail.com</p>
              </div>
              <div class="data">
                <h4>Telefono</h4>
                <p>0001-213-998761</p>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3></h3>
            <div class="projects_data">
              <div class="data">
                <h4>Empresa</h4>
                <p>Empresa de prueba</p>
              </div>
              <div class="data">
                <h4>Tipo de Cliente</h4>
                <p>Normal</p>
              </div>
            </div>
          </div>

          <div class="social_media">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
