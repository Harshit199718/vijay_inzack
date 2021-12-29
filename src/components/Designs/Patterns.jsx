import { Col, Row } from "antd";
import React from "react";
import ImageUploader from "../ImageUploader/ImageUploader";

function Patterns(props) {
  const { designs } = props;
  return (
    <>
      <Row gutter={[12, 12]} className="patterns_container">
        {designs.map((design) => {
          return (
            <Col span={8}>
              <img className="pattern-img" src={design} alt="" />
            </Col>
          );
        })}
      </Row>
      <ImageUploader />
    </>
  );
}

export default Patterns;
