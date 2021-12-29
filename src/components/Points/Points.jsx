import { Col, List, Row, Typography } from "antd";
import React from "react";
import stylesImg from "../../assets/styles.png";
import "./Points.css";

const listPoints = [
  `Try 100+ trending fashion designs at one go..`,

  `Match your design with the leading trends  
and know where you stand`,

  `Be the first to share your design choice

`,
];

function Points() {
  return (
    <Row className="points-section_container">
      <Col className="points-img_container" xl={11} xs={24}>
        <img src={stylesImg} alt="" />
      </Col>
      <Col xl={2} xs={24}></Col>
      <Col xl={11} xs={24}>
        <List
          gutter={0}
          split={false}
          dataSource={listPoints}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Title className="list-point" level={2}>
                  {item}
                </Typography.Title>
              </List.Item>
            );
          }}
        />
      </Col>
    </Row>
  );
}

export default Points;
