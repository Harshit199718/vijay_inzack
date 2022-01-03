import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import googleLogin from "../../assets/googlelogin.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header(props) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { Title } = Typography;

  return (
    <Row className="header_container" align="middle">
      <Col xl={12} lg={15} md={18} xs={24}>
        <Row align="middle" justify="space-between">
          <Col lg={10} md={6} xs={8}>
            <Typography>
              <Title
                className={`logo_text ${
                  props.text === "light" ? "light_text" : "dark_text"
                }`}
                level={1}
                onClick={() => navigate("/")}
              >
                Inzack
              </Title>
            </Typography>
          </Col>
          <Col xs={2} md={0}>
            <i
              class={`fas fa-bars cursor-pointer ${
                props.text === "light" ? "light_text" : "dark_text"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </Col>
          <Nav text={props.text} />
          <MobileNav menuOpen={menuOpen} />
        </Row>
      </Col>
      <Col xl={12} lg={9} md={6}>
        <Row justify="end" onClick={() => navigate("/dashboard")}>
          <img
            src={googleLogin}
            alt="Login with google"
            className="cursor-pointer login-btn"
          />
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
