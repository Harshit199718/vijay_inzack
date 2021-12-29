import { Col, Row, Typography } from "antd";
import React from "react";
import Header from "../../components/Header/Header";

const { Title, Text } = Typography;

function Contact() {
  return (
    <div>
      <Header textColor="#000" />
      <div style={{ padding: "60px 128px" }}>
        <Row
          style={{
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            height: "570px",
            padding: "55px 32px",
          }}
        >
          <Col span={24}>
            <Title level={3} style={{ fontWeight: "800", margin: "0" }}>
              looking for customized solution?
            </Title>
            <Title level={4} style={{ fontWeight: "600", margin: "0" }}>
              reach us on <Text>hello@inzack.com</Text>
            </Title>
          </Col>
          <Col span={24}>
            <Row align="bottom" style={{ height: "100%" }}>
              <Col span={12}></Col>
              <Col span={12}>
                <Title level={3} style={{ fontWeight: "800", margin: "0" }}>
                  Registered Office
                </Title>
                <Title level={4} style={{ fontWeight: "600", margin: "0" }}>
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
