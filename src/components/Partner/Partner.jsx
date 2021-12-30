import { Col, Row, Typography } from "antd";
import React from "react";
import "./Partner.css";

const { Title } = Typography;

function Partner(props) {
  const { heading, partners, description } = props;
  return (
    <Col span={24}>
      <Row align="middle" className="partner-boxes_container">
        <Col md={6} xs={7}>
          <Title className="partner-box-title" level={3}>
            {heading}
          </Title>
        </Col>
        <Col md={2} xs={1}></Col>
        <Col md={14} xs={16}>
          {partners ? (
            <Row align="middle" className="partner-imgs_container">
              {partners.map((partner) => (
                <Col md={8} xs={10}>
                  <img src={partner} alt="" />
                </Col>
              ))}
            </Row>
          ) : (
            <Title className="partner-box-description" level={3}>
              {description}
            </Title>
          )}
        </Col>
      </Row>
    </Col>
  );
}

export default Partner;
