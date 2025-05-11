import React from "react";

export default function Button({ status, children }) {
  let themeColor;

  if (status === "confirm") {
    themeColor = "black";
  } else if (status === "cancel") {
    themeColor = "red";
  }

  return (
    <button
      style={{
        border: "2px solid",
        color: themeColor,
        borderColor: themeColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}
