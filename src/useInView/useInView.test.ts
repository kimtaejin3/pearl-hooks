import { renderHook } from "@testing-library/react";
import { useInView } from "./useInView";

describe("useInView", () => {
  const mockIntersectionObserver = jest.fn();

  beforeEach(() => {
    // IntersectionObserver 모킹
    global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("기본 상태값이 올바르게 초기화되어야 함", () => {
    const { result } = renderHook(() => useInView());

    expect(result.current.isInView).toBe(false);
    expect(result.current.ref.current).toBe(null);
  });

  it("ref가 설정되면 IntersectionObserver가 observe를 호출해야 함", () => {
    const { result } = renderHook(() => useInView());
    const element = document.createElement("div");

    // ref에 요소 설정
    if (result.current.ref.current) {
      result.current.ref.current = element;
    }

    expect(global.IntersectionObserver).toHaveBeenCalled();
  });

  it("컴포넌트가 언마운트되면 IntersectionObserver가 disconnect를 호출해야 함", () => {
    const { unmount } = renderHook(() => useInView());

    unmount();

    // disconnect가 호출되었는지 확인
    expect(mockIntersectionObserver.mock.instances[0].disconnect)
      .toHaveBeenCalled;
  });

  it("threshold 옵션이 올바르게 적용되어야 함", () => {
    const threshold = 0.5;
    renderHook(() => useInView({ threshold }));

    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({ threshold })
    );
  });
});
