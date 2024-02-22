import React from "react";

const footer = () => {
  return (
    <footer
      style={{
        background: "rgb(0, 2, 66)",
        color: "white",
        padding: "1rem",
        width: "99%",
        textAlign: "center",
        bottom: 0,
        position: "fixed",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <p style={{ margin: "0", fontSize: "1rem" }}>
          &copy; {new Date().getFullYear()} Hospital Application. All rights
          reserved.
        </p>
        <p style={{ margin: "0", fontSize: "1rem" }}>
          Powered by <strong>Purview Technologies</strong>
        </p>
      </div>
    </footer>
  );
};
export default footer;
