import { Col, Row, Typography } from "antd";
import React, { useState } from "react";
import DesignButton from "../Button/Button";
import { shirtDesigns } from "../Designs/all_designs";
import Patterns from "../Designs/Patterns";
import "./DashboardContent.css";
import rightArrow from "../../assets/rightArrow.png";
import close from "../../assets/close.png";
import movingAvatar from "../../assets/gifs/moving-avatar.gif";

const designs = ["ficco designs", "cornetti designs", "Percy designs"];

function MobileDashboard(props) {
  const [activeDesign, setActiveDesign] = useState("ficco designs");
  const [btnsPosition, setBtnsPosition] = useState(0);
  const [showDesigns, setShowDesigns] = useState(false);

  return (
    <Row className="designs-card">
      <img
        className="close-btn cursor-pointer"
        src={close}
        alt=""
        onClick={() => setShowDesigns(false)}
      />
      <Patterns setShowDesigns={setShowDesigns} designs={shirtDesigns} />
      <div className="design-btns" style={{ position: "relative" }}>
        <Row
          align="middle"
          style={{ transform: `translateX(${btnsPosition}%)` }}
          className="design-btns_container"
        >
          {designs.map((design) => (
            <DesignButton
              active={activeDesign === design}
              onClick={() => setActiveDesign(design)}
              style={{
                transform: `translateX(-${btnsPosition * 100}%)`,
              }}
            >
              {design}
            </DesignButton>
          ))}
        </Row>
        {btnsPosition > 0 ? (
          <img
            className="btn-slider btn-slider-left"
            src={rightArrow}
            alt=""
            onClick={() => setBtnsPosition(btnsPosition - 1)}
          />
        ) : null}
        {btnsPosition < designs.length - 2 ? (
          <img
            className="btn-slider"
            src={rightArrow}
            alt=""
            onClick={() => setBtnsPosition(btnsPosition + 1)}
          />
        ) : null}
      </div>
      {/*  */}
      <Row
        justify="center"
        style={{
          position: "fixed",
          top: "62px",
          left: "0",
          width: "100%",
          height: "calc(100vh - 62px)",
          background: "#fff",
          paddingTop: "40px",
          transform: `translateY(-${showDesigns ? "100" : "0"}vh)`,
          transition: ".5s",
        }}
      >
        <Row
          justify="center"
          align="top"
          style={{
            width: "90%",
            height: "500px",
            overflow: "hidden",
            background: "#FFEDC9",
            padding: "20px 0",
            boxShadow: "0px 4px 4px 3px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Col span={24}>
            <Typography.Title level={4} style={{ marginLeft: "20px" }}>
              {props.selectedType}
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <img src={movingAvatar} alt="" />
            </Row>
          </Col>
        </Row>
        <Row
          level={5}
          align="middle"
          className="cursor-pointer"
          style={{ marginRight: "auto", marginLeft: "20px" }}
          onClick={() => {
            props.setMenuOpen(false);
            setTimeout(
              () => {
                setShowDesigns(true);
              },
              props.menuOpen ? 200 : 0
            );
          }}
        >
          <Row
            align="middle"
            justify="center"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid",
            }}
          >
            <Typography.Title level={4}>+</Typography.Title>
          </Row>
          <Typography.Title level={4} style={{ margin: "0 5px" }}>
            Select design
          </Typography.Title>
        </Row>
      </Row>
    </Row>
  );
}

export default MobileDashboard;
