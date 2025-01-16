import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { useInView } from "./useInView";

export default {
  title: "Hooks/useInView",
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: StoryFn = () => {
  const { ref, isInView } = useInView();

  if (isInView) {
    alert("in view");
  }

  return (
    <div>
      <h1>useInView</h1>
      <br />
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#ff7f27",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div
        ref={ref}
        style={{
          width: "100px",
          height: "100px",
          background: "#ff6600",
          borderRadius: "10px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        target
      </div>
    </div>
  );
};
