import { Col, Row, Typography } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import googleLogin from "../../assets/googlelogin.png";

const { Link } = Typography;

function MobileNav(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = [
    { text: "Our partners", path: "/partners" },
    { text: "Pricing", path: "/pricing" },
    { text: "Contact us", path: "/contact" },
  ];
  return (
    <Col
      className={`mobile-nav-links_container ${
        props.menuOpen ? "mobile-nav-links_container-active" : ""
      }`}
      lg={14}
      md={18}
    >
      <Typography className="mobile-nav">
        <Row align="middle">
          {routes.map((route) => (
            <Col span={24} className="text_align-center">
              <Link
                className={`header_nav-link ${
                  props.text === "light" ? "light_text" : "dark_text"
                }
              ${location.pathname === route.path ? "active-nav" : ""}
            `}
                onClick={() => navigate(route.path)}
              >
                {route.text}
              </Link>
            </Col>
          ))}
          <Col span={24}>
            <Row justify="center" onClick={() => navigate("/dashboard")}>
              <img
                src={googleLogin}
                alt="Login with google"
                className="cursor-pointer"
              />
            </Row>
          </Col>
        </Row>
      </Typography>
    </Col>
  );
}

export default MobileNav;
