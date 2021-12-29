import { Avatar, Tabs, Typography } from "antd";
import React from "react";
import Designs from "../Designs/Designs";
import shirt from "../../assets/shirt.png";
import tshirt from "../../assets/t-shirt.png";

const { TabPane } = Tabs;
const { Title } = Typography;

function TabSelector(props) {
  const { name, image } = props;
  return (
    <>
      <span className="tab-circle"></span>
      <span className="tab-square"></span>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Avatar size={62}>
          <img src={image} alt="" />
        </Avatar>
        <Typography style={{ cursor: "pointer" }}>
          <Title
            className="qwerty"
            level={4}
            style={{
              fontSize: "16px",
              fontWeight: "400",
              whiteSpace: "nowrap",
              margin: "0",
              color: "#fff",
            }}
          >
            {name}
          </Title>
        </Typography>
      </div>
    </>
  );
}

function DashboardContent() {
  return (
    <div className="desktop-dashboard">
      <Tabs tabPosition="left">
        <TabPane tab={<TabSelector name="Formals" image={shirt} />} key="1">
          <Designs type="formals" />
        </TabPane>
        <TabPane tab={<TabSelector name="Casuals" image={tshirt} />} key="2">
          <Designs type="casuals" />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default DashboardContent;
