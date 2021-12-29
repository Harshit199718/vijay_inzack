import { Col, Row, Typography } from "antd";
import React from "react";
import Header from "../../components/Header/Header";
import wolf3d from "../../assets/wolf3d.png";
import deft from "../../assets/deft.png";

const { Title } = Typography;
function Partners() {
  return (
    <div>
      <Header textColor="#000" />
      <Row gutter={[0, 75]} style={{ padding: "60px 128px" }}>
        <Col span={24}>
          <Row
            align="middle"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              padding: "10px 50px",
              minHeight: "120px",
            }}
          >
            <Col span={6}>
              <Title style={{ margin: "0", fontWeight: "700" }} level={3}>
                Our approach
              </Title>
            </Col>
            <Col span={2}></Col>
            <Col span={14}>
              <Title style={{ margin: "0" }} level={3}>
                We aspire to innovate in the area of user engagement by
                challenging traditional norms
              </Title>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row
            align="middle"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              padding: "10px 50px",
              minHeight: "120px",
            }}
          >
            <Col span={6}>
              <Title style={{ margin: "0", fontWeight: "700" }} level={3}>
                Our partners
              </Title>
            </Col>
            <Col span={2}></Col>
            <Col span={14}>
              <Row align="middle">
                <Col span={8}>
                  <img src={wolf3d} alt="" />
                </Col>
                <Col span={8}>
                  <img src={deft} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row
            align="middle"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              padding: "10px 50px",
              minHeight: "120px",
            }}
          >
            <Col span={6}>
              <Title style={{ margin: "0", fontWeight: "700" }} level={3}>
                Trial Blazers
              </Title>
            </Col>
            <Col span={2}></Col>
            <Col span={14}>
              <Title style={{ margin: "0" }} level={3}>
                Comming soon..
              </Title>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Partners;
