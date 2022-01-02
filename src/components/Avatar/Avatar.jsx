import { Col, Row } from "antd";
import React from "react";
import movingAvatar from "../../assets/gifs/moving-avatar.gif";
import movingAvatar2 from "../../assets/gifs/moving-avatar2.gif";
import lock from "../../assets/lock.png";

function Avatar(props) {
  const imgStyle = { display: "block", clear: "right" };
  return (
    <Row
      justify="center"
      align="top"
      style={{
        width: props.width ? props.width : "",
        height: "650px",
        borderRadius: "40px",
        overflow: "hidden",
        background: "#FFEDC9",
        padding: "20px 0",
      }}
    >
      <Col span={20}>
        <Row justify="end">
          <img
            style={{ float: "right", marginBottom: "5px" }}
            src={lock}
            alt=""
          />
        </Row>
      </Col>
      <Col>
        <img
          style={imgStyle}
          src={props.activeType === "Shirts" ? movingAvatar : movingAvatar2}
          alt=""
        />
      </Col>
    </Row>
  );
}

export default Avatar;
