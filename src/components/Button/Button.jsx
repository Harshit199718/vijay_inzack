import { Button } from "antd";
import React from "react";
import "./Button.css";

function DesignButton(props) {
  return (
    <Button
      className={`design-btn ${props.active ? "active-design-btn" : ""}`}
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default DesignButton;
