import { useState, useEffect, useRef, RefObject } from "react";

type Size = {
  width: number;
  height: number;
};

export function useContainerSize<T extends HTMLElement>(): [RefObject<T | null>, Size] {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry?.contentRect) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(element, { box: "border-box" });

    // Set initial size
    setSize({
      width: element.offsetWidth,
      height: element.offsetHeight,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, size];
}
