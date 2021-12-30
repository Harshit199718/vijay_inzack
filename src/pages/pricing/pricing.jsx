import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/Header/Header";
import PricingCard from "../../components/PricingCard/PricingCard";
import "./pricing.css";

function Pricing() {
  return (
    <div>
      <Header textColor="#000" />
      <Row gutter={{ lg: 64, sm: [32, 32] }} className="pricing_container">
        <Col md={12} xs={24}>
          <PricingCard
            plan="Free Account"
            usage="unlimited usage"
            limit="limited design collections"
          />
        </Col>
        <Col md={12} xs={24}>
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
