import { Row } from "antd";
import React, { useState } from "react";
import DesignButton from "../Button/Button";
import { shirtDesigns } from "../Designs/all_designs";
import Patterns from "../Designs/Patterns";
import "./DashboardContent.css";
import rightArrow from "../../assets/rightArrow.png";
import close from "../../assets/close.png";

function MobileDashboard() {
  const [activeDesign, setActiveDesign] = useState("ficco designs");
  const [btnsPosition, setBtnsPosition] = useState(0);
  return (
    <Row className="designs-card">
      <img className="close-btn cursor-pointer" src={close} alt="" />
      <Patterns designs={shirtDesigns} />
      <div className="design-btns" style={{ position: "relative" }}>
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
    </Row>
  );
}

export default MobileDashboard;
