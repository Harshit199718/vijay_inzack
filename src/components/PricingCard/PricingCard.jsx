import React from "react";
import { Col, Row, Typography } from "antd";
import usageIcon from "../../assets/usage.png";
import limitIcon from "../../assets/limit.png";

const { Title, Text } = Typography;

function PricingCard(props) {
  const { plan, usage, limit } = props;
  return (
    <Row
      style={{
        height: "418px",
        padding: "37px 100px",
        borderRadius: "20px",
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Col span={24}>
        <Title level={2} style={{ textAlign: "center" }}>
          <Text>{plan}</Text>
        </Title>
      </Col>
      <Col span={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          <img src={usageIcon} alt="" />
          <Text style={{ display: "block", fontWeight: "700" }}>{usage}</Text>
        </Title>
      </Col>
      <Col span={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          <img src={limitIcon} alt="" />
          <Text style={{ display: "block", fontWeight: "700" }}>{limit}</Text>
        </Title>
      </Col>
    </Row>
  );
}

export default PricingCard;
