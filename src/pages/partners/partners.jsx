import { Row } from "antd";
import React from "react";
import Header from "../../components/Header/Header";
import wolf3d from "../../assets/wolf3d.png";
import deft from "../../assets/deft.png";
import Partner from "../../components/Partner/Partner";
import "./partners.css";

function Partners() {
  return (
    <div>
      <Header textColor="#000" />
      <Row gutter={[0, 75]} className="partners_container">
        <Partner
          heading="Our approach"
          description="We aspire to innovate in the area of user engagement by
                challenging traditional norms"
        />
        <Partner heading="Our partners" partners={[wolf3d, deft]} />
        <Partner heading="Trial Blazers" description="Comming soon.." />
      </Row>
    </div>
  );
}

export default Partners;
