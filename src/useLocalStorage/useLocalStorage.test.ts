import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  it("should initialize with the correct value", () => {
    const { result } = renderHook(() => useLocalStorage("my-key", "my-value"));
    expect(result.current.value).toBe("my-value");
  });

  it("should update the value when changeItem is called", () => {
    const { result } = renderHook(() => useLocalStorage("my-key", "my-value"));
    act(() => {
      result.current.setItem("new-value");
    });
    expect(result.current.value).toBe("new-value");
  });
});
