import React from "react";
import { Col, Row, Typography } from "antd";
import usageIcon from "../../assets/usage.png";
import limitIcon from "../../assets/limit.png";
import "./PricingCard.css";

const { Title, Text } = Typography;

function PricingCard(props) {
  const { plan, usage, limit } = props;
  return (
    <Row className="pricing-card">
      <Col span={24}>
        <Title level={2} className="text_align-center">
          <Text>{plan}</Text>
        </Title>
      </Col>
      <Col span={24}>
        <Title level={4} className="text_align-center">
          <img src={usageIcon} alt="" />
          <Text className="pricing-card-text">{usage}</Text>
        </Title>
      </Col>
      <Col span={24}>
        <Title level={4} className="text_align-center">
          <img src={limitIcon} alt="" />
          <Text className="pricing-card-text">{limit}</Text>
        </Title>
      </Col>
    </Row>
  );
}

export default PricingCard;
