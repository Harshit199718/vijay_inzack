import { Col, Row, Typography } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Link } = Typography;

function Nav(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = [
    { text: "Our partners", path: "/vijay_inzack/partners" },
    { text: "Pricing", path: "/vijay_inzack/pricing" },
    { text: "Contact us", path: "/vijay_inzack/contact" },
  ];
  return (
    <Col className="desktop-nav-links_container" lg={14} md={18}>
      <Typography className="desktop-nav">
        <Row align="middle">
          {routes.map((route) => (
            <Col span={8} className="text_align-center">
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
        </Row>
      </Typography>
    </Col>
  );
}

export default Nav;
