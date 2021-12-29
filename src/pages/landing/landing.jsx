import React from "react";
import Header from "../../components/Header/Header";
import heroBg from "../../assets/hero-bg.png";
import Hero from "../../components/Hero/Hero";
import Points from "../../components/Points/Points";

function Landing() {
  const landingStyles = {
    minHeight: "100vh",
    background: `url(${heroBg})`,
    backgroundRepeat: "no-repeat",
    paddingBottom: "80px",
  };
  return (
    <div style={landingStyles}>
      <Header text="light" />
      <Hero />
      <Points />
    </div>
  );
}

export default Landing;
