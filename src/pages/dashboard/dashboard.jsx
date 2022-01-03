import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import MobileDashboard from "../../components/DashboardContent/MobileDashboard";
import { Row } from "antd";
import movingAvatar from "../../assets/gifs/moving-avatar.gif";

function Dashboard() {
  const [selectedType, setSelectedType] = useState("Shirts");
  const [menuOpen, setMenuOpen] = useState(false);
  const designs = [
    { category: "Formals", types: ["Shirts", "Trousers"] },
    { category: "Casuals", types: ["T Shirts", "Trousers"] },
  ];
  useEffect(() => {
    document.querySelector(".ant-tabs-nav-list").style.background = "#4B453A";
    document.querySelector(".ant-tabs-nav-list").style.paddingTop = "90px";
  }, []);
  return (
    <div id="dashboard-page">
      <DashboardHeader
        designs={designs}
        setSelectedType={setSelectedType}
        selectedType={selectedType}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <DashboardContent />
      <MobileDashboard
        selectedType={selectedType}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </div>
  );
}

export default Dashboard;
