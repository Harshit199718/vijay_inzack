import { Row } from "antd";
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
        height: "650px",
        borderRadius: "40px",
        overflow: "hidden",
        background: "#FFEDC9",
        padding: "20px 0",
      }}
    >
      <div>
        <img
          style={{ float: "right", marginBottom: "5px" }}
          src={lock}
          alt=""
        />
        <img
          style={imgStyle}
          src={props.activeType === "Shirts" ? movingAvatar : movingAvatar2}
          alt=""
        />
      </div>
    </Row>
  );
}

export default Avatar;
