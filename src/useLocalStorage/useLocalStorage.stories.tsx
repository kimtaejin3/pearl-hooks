import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { useLocalStorage } from "./useLocalStorage";

export default {
  title: "Hooks/useLocalStorage",
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: StoryFn = () => {
  const { value, setItem, removeItem } = useLocalStorage<string | null>(
    "my-key",
    null
  );

  return (
    <div>
      <span>값을 입력하여 저장해보세요: </span>
      <input
        type="text"
        value={value ?? ""}
        onChange={(e) => setItem(e.target.value)}
      />
      <p>저장된 값을 확인하세요: {value}</p>
      <br />
      <button onClick={removeItem}>remove Item</button>
    </div>
  );
};
