// src/useCustomHook/useCustomHook.ts
import { useState, useCallback } from "react";

export const useCustomHook = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);

  const increment = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  return { value, increment };
};
