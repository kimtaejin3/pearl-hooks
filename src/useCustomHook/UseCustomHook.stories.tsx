// src/stories/UseCustomHook.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { useCustomHook } from "./useCustomHook";

export default {
  title: "Hooks/useCustomHook",
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: StoryFn = () => {
  const { value, increment } = useCustomHook(0);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
