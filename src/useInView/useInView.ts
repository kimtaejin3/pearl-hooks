import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const useInView = (options: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.unobserve(currentRef as Element);
    };
  }, [options]);

  return { ref, isInView };
};

export default useInView;
