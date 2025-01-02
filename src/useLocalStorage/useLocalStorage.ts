// src/useLocalStorage/useLocalStorage.ts
import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);

    if (typeof window !== "undefined") {
      const valueToStore = item ? JSON.parse(item) : initialValue;
      setValue(valueToStore);
    }
  }, [key, initialValue]);

  const changeItem = (value: T) => {
    setValue(value);
  };

  const setItem = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return { value, changeItem, setItem };
};
