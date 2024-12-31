import { useCustomHook } from "./useCustomHook";
import { renderHook, act } from "@testing-library/react";

describe("useCustomHook", () => {
  it("should increment couter", () => {
    const { result } = renderHook(() => useCustomHook(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.value).toBe(1);
  });
});
