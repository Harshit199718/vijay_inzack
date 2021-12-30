import { Col, Row, Typography } from "antd";
import React from "react";
import Header from "../../components/Header/Header";
import "./contact.css";

const { Title, Text } = Typography;

function Contact() {
  return (
    <div>
      <Header textColor="#000" />
      <div className="contact_container">
        <Row className="contact-details_container">
          <Col span={24}>
            <Title level={3} className="detail-heading">
              looking for customized solution?
            </Title>
            <Title level={4} className="detail-text">
              reach us on <Text>hello@inzack.com</Text>
            </Title>
          </Col>
          <Col span={24}>
            <Row align="bottom" style={{ height: "100%" }}>
              <Col md={12} xs={24}></Col>
              <Col md={12} xs={24}>
                <Title level={3} className="detail-heading">
                  Registered Office
                </Title>
                <Title level={4} className="detail-text">
                  T-Hub Foundation Catalyst IIIT-Hyderabad, Gachibowli,
                  Telangana 500032, India
                </Title>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
