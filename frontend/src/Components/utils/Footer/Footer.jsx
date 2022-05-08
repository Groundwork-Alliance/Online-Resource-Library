import React from "react";

export default function Footer() {
  const brandName = {
    color: "black",
    textDecoration: "none",
    fontWeight: "700",
    position: "relative",
    fontSize: "30px",
    top: "5%",
    left: "9%",
  };
  return (
    <div className="mt-auto">
      <div
        style={{ backgroundColor: "#E2EAF2", textAlign: "center" }}
        className="p-1"
      >
        <p className="h6 mt-1" style={{ fontWeight: "700", color: "#001d42" }}>
          © Copyright 2021-2022 Suyog Kulkarni All rights reserved.
        </p>
      </div>
    </div>
  );
}
