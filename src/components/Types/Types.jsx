import { Row, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./Types.css";

function Types(props) {
  const { Title } = Typography;
  const { image, type, active, setActive } = props;
  return (
    <Row justify="center">
      <div className="text_align-center">
        <Row className="types-img_container">
          <img src={image} alt="" />
        </Row>
        <Typography className="cursor-pointer">
          <Title
            level={4}
            className={`types-title ${active === type ? "active-type" : ""}`}
            onClick={() => {
              setActive(type);
            }}
          >
            {type}
          </Title>
        </Typography>
      </div>
    </Row>
  );
}

export default Types;
