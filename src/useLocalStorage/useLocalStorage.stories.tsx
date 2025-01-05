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
  const [key, setKey] = useState("my-key");
  const { value, setItem } = useLocalStorage<string>(key, "my-value");

  return (
    <div>
      <p>Value: {value}</p>
      <input
        type="text"
        placeholder="value"
        value={value}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={() => setItem(value)}>Change Item</button>
      <button onClick={() => setKey("new-key")}>Change Key</button>
    </div>
  );
};
