import { Col, Row, Typography } from "antd";
import React, { useState } from "react";
import Types from "../Types/Types";
import shirt from "../../assets/shirt.png";
import tshirt from "../../assets/t-shirt.png";
import trousers from "../../assets/trousers.png";
import effect from "../../assets/effect.png";
import Avatar from "../Avatar/Avatar";
import "./Hero.css";

function Hero() {
  const { Title } = Typography;
  const [activeType, setActiveType] = useState("Shirts");

  return (
    <Row className="hero_container">
      <Col className="hero-left" xs={24} xl={15}>
        <Row justify="space-between">
          <Col xl={20} sm={18} xs={22} className="hero-left-title_container">
            <Typography>
              <Title className="hero-left-title" level={2}>
                Experience new design combinations and match your choice with
                latest fashion trends
              </Title>
            </Typography>
          </Col>
          <Col xl={4} xs={24} className="hero-left-types_container">
            <Row gutter={[0, 30]}>
              <Col xl={24} xs={4}>
                <Types
                  type="Shirts"
                  image={shirt}
                  active={activeType}
                  setActive={setActiveType}
                />
              </Col>
              <Col xl={24} xs={4}>
                <Types
                  type="T Shirts"
                  image={tshirt}
                  active={activeType}
                  setActive={setActiveType}
                />
              </Col>
              <Col xl={24} xs={4}>
                <Types
                  type="Trousers"
                  image={trousers}
                  active={activeType}
                  setActive={setActiveType}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col className="hero-right" xl={9} xs={24}>
        <Avatar activeType={activeType} />
      </Col>
    </Row>
  );
}

export default Hero;
