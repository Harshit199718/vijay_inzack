import React, { useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import MobileDashboard from "../../components/DashboardContent/MobileDashboard";

function Dashboard() {
  useEffect(() => {
    document.querySelector(".ant-tabs-nav-list").style.background = "#4B453A";
    document.querySelector(".ant-tabs-nav-list").style.paddingTop = "90px";
  }, []);
  return (
    <div id="dashboard-page">
      <DashboardHeader />
      <DashboardContent />
      <MobileDashboard />
    </div>
  );
}

export default Dashboard;
