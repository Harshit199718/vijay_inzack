import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/Header/Header";
import PricingCard from "../../components/PricingCard/PricingCard";

function Pricing() {
  return (
    <div>
      <Header textColor="#000" />
      <Row gutter={68} style={{ padding: "60px 128px" }}>
        <Col span={12}>
          <PricingCard
            plan="Free Account"
            usage="unlimited usage"
            limit="limited design collections"
          />
        </Col>
        <Col span={12}>
          <PricingCard
            plan="Business Plan"
            usage="unlimited usage"
            limit="List your brand as part of  design collection"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Pricing;
