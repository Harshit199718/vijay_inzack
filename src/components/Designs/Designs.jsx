import React, { useState } from "react";
import { Col, Row, Tabs, Typography } from "antd";
import movingAvatar from "../../assets/gifs/moving-avatar.gif";
import rightArrow from "../../assets/rightArrow.png";
import Patterns from "./Patterns";
import { shirtDesigns, trouserDesigns } from "./all_designs";
import "./Designs.css";
import DesignButton from "../Button/Button";

const { TabPane } = Tabs;
const { Title } = Typography;

function Designs(props) {
  const [selectedTab, setSelectedTab] = useState("1");
  const [activeDesign, setActiveDesign] = useState("ficco designs");
  const [btnsPosition, setBtnsPosition] = useState(0);
  const { type } = props;
  return (
    <Row className="designs">
      <Col lg={7} md={24} className="design-selector_container">
        <Row className="type-tabs_container">
          <Tabs
            defaultActiveKey="1"
            onChange={(tabIndex) => setSelectedTab(tabIndex)}
          >
            <TabPane
              tab={
                <Typography>
                  <Title
                    level={4}
                    className={`types-tab ${
                      selectedTab === "1" ? "active-types-tab" : ""
                    }`}
                  >
                    {type === "formals" ? "SHIRT" : "T SHIRT"}
                  </Title>
                </Typography>
              }
              key="1"
            >
              <div style={{ position: "relative" }}>
                <Row
                  align="middle"
                  style={{ transform: `translateX(${btnsPosition}%)` }}
                  className="design-btns_container"
                >
                  <DesignButton
                    active={activeDesign === "ficco designs"}
                    onClick={() => setActiveDesign("ficco designs")}
                  >
                    ficco designs
                  </DesignButton>
                  <DesignButton
                    active={activeDesign === "cornetti designs"}
                    onClick={() => setActiveDesign("cornetti designs")}
                  >
                    cornetti designs
                  </DesignButton>
                  <DesignButton
                    active={activeDesign === "Percy designs"}
                    onClick={() => setActiveDesign("Percy designs")}
                  >
                    Percy designs
                  </DesignButton>
                </Row>
                <img
                  className="btn-slider"
                  src={rightArrow}
                  alt=""
                  onClick={() => setBtnsPosition(btnsPosition - 33.33)}
                />
                <img
                  className="btn-slider btn-slider-left"
                  src={rightArrow}
                  alt=""
                  onClick={() => setBtnsPosition(btnsPosition + 33.33)}
                />
              </div>
              <Patterns designs={shirtDesigns} />
            </TabPane>
            <TabPane
              tab={
                <Typography>
                  <Title
                    level={4}
                    className={`types-tab ${
                      selectedTab === "2" ? "active-types-tab" : ""
                    }`}
                  >
                    TROUSER
                  </Title>
                </Typography>
              }
              key="2"
            >
              <Patterns designs={trouserDesigns} />
            </TabPane>
          </Tabs>
        </Row>
      </Col>
      <Col lg={16} md={24}>
        <Row justify="center" className="design-view_container">
          <Row
            align="middle"
            justify="center"
            className="design-view-img_container"
          >
            <img src={movingAvatar} alt="" />
          </Row>
        </Row>
      </Col>
    </Row>
  );
}

export default Designs;
