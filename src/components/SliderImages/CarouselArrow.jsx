import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgba(142 142 142,0.6)",
        borderRadius: "50%",
        right: "6%",
        zIndex: "10",
      }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgba(142 142 142,0.6)",
        borderRadius: "50%",
        left: "6%",
        zIndex: "10",
      }}
      onClick={props.onClick}
    />
  );
};
