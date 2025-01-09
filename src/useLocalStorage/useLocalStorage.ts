// src/useLocalStorage/useLocalStorage.ts
import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T | null>(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);

    if (typeof window !== "undefined") {
      const valueToStore = item ? JSON.parse(item) : initialValue;
      setValue(valueToStore);
    }
  }, [key, initialValue]);

  const setItem = (value: T) => {
    setValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const removeItem = () => {
    setValue(null);
    window.localStorage.removeItem(key);
  };

  return { value, setItem, removeItem };
};
