import React from "react";
import { Avatar, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const { Title } = Typography;

function DashboardHeader() {
  const navigate = useNavigate();

  return (
    <Row className="dashboard-header" justify="space-between">
      <Typography>
        <Title
          className="logo-text"
          level={1}
          onClick={() => navigate("/vijay_inzack/")}
        >
          Inzack
        </Title>
      </Typography>
      <Row align="middle">
        <Typography>
          <Title className="user-name" level={4}>
            Welcome, virat
          </Title>
        </Typography>
        <Row
          align="middle"
          className="user-image_container"
          onClick={() => navigate("/vijay_inzack")}
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
