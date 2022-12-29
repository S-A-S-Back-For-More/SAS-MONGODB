import React from "react";
import videoBg from "../assets/videoBg.mp4";
import CTA from "./CTA";

function videoBackground() {
  return (
    <div
      className="main"
      style={{
        maxWidth: "100%",
        height: "100vh",
        display: "block",
        background: "#1a1a1a",
        overflow: "hidden",
      }}
    >
      <div
        className="cta"
        style={{
          background: "black",
          opacity: ".7",
          position: "absolute",
         
          zIndex: "3",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <CTA />
      </div>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default videoBackground;
