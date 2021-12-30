import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Col, Radio, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const { Title } = Typography;

function DashboardHeader(props) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(props.designs[0]);
  }, [props.designs]);

  return (
    <Row className="dashboard-header" justify="space-between">
      <div
        className={`designs-selector_container ${
          menuOpen ? "dashboard-menu-active" : ""
        }`}
      >
        <div className="category">
          <Radio.Group
            defaultValue="Formals"
            buttonStyle="solid"
            onChange={(e) => {
              const index = props.designs.findIndex(
                (val) => val.category === e.target.value
              );
              setSelectedCategory(props.designs[index]);
            }}
          >
            {props.designs.map((design) => {
              return (
                <Radio.Button value={design.category}>
                  {design.category}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </div>
        <div className="sub-category">
          <Radio.Group
            defaultValue="Formals"
            buttonStyle="solid"
            onChange={(e) => {
              setMenuOpen(false);
              props.setSelectedType(e.target.value);
            }}
          >
            {selectedCategory &&
              selectedCategory.types.map((type) => {
                return <Radio.Button value={type}>{type}</Radio.Button>;
              })}
          </Radio.Group>
        </div>
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
