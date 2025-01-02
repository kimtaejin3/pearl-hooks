import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { useLocalStorage } from "./useLocalStorage";

export default {
  title: "Hooks/useLocalStorage",
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: StoryFn = () => {
  const { value, changeItem, setItem } = useLocalStorage<string>(
    "my-key",
    "my-value"
  );

  return (
    <div>
      <p>Value: {value}</p>
      <input
        type="text"
        placeholder="value"
        value={value}
        onChange={(e) => changeItem(e.target.value)}
      />
      <button onClick={() => setItem(value)}>Change Item</button>
    </div>
  );
};
