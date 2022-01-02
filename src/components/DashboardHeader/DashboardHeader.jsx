import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Col, Radio, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import shirt from "../../assets/shirt.png";
import tshirt from "../../assets/t-shirt.png";

const { Title } = Typography;

function DashboardHeader(props) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Row className="dashboard-header" justify="space-between">
      <div
        className={`designs-selector_container ${
          menuOpen ? "dashboard-menu-active" : ""
        }`}
      >
        <Row className="category">
          <div className="category_container">
            <Row justify="center" className="category-img_container">
              <img src={shirt} alt="" />
            </Row>
            <Title level={4}>Formals</Title>
          </div>
          <div className="type_container">
            <Title
              className={`type-text ${
                selectedCategory === "Shirts" ? "active-type" : ""
              }`}
              level={5}
              onClick={() => setSelectedCategory("Shirts")}
            >
              Shirts
            </Title>
            <Title
              className={`type-text ${
                selectedCategory === "Trousers" ? "active-type" : ""
              }`}
              level={5}
              onClick={() => setSelectedCategory("Trousers")}
            >
              Trousers
            </Title>
          </div>
        </Row>
        <Row className="category">
          <div className="category_container">
            <Row justify="center" className="category-img_container">
              <img src={shirt} alt="" />
            </Row>
            <Title level={4}>Casuals</Title>
          </div>
          <div className="type_container">
            <Title
              className={`type-text ${
                selectedCategory === "T Shirts" ? "active-type" : ""
              }`}
              level={5}
              onClick={() => setSelectedCategory("T Shirts")}
            >
              T Shirts
            </Title>
            <Title
              className={`type-text ${
                selectedCategory === "Formals-Trousers" ? "active-type" : ""
              }`}
              level={5}
              onClick={() => setSelectedCategory("Formals-Trousers")}
            >
              Trousers
            </Title>
          </div>
        </Row>
      </div>
      <Typography className="logo-text_container">
        <Title className="logo-text" level={1} onClick={() => navigate("/")}>
          <span>Inzack</span>
        </Title>
      </Typography>
      <i
        className="fas fa-bars designs-menu-toggler"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>
      <Row align="middle">
        <Typography>
          <Title className="user-name" level={4}>
            Welcome, virat
          </Title>
        </Typography>
        <Row
          align="middle"
          className="user-image_container"
          onClick={() => navigate("/")}
        >
          <Avatar size={34} className="user-image">
            <Typography>
              <Typography.Text className="user-letter">V</Typography.Text>
            </Typography>
          </Avatar>
        </Row>
      </Row>
    </Row>
  );
}

export default DashboardHeader;
