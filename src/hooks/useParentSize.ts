import { useEffect, useRef, useState } from "react";

export interface Size {
  width: number;
  height: number;
}

/**
 * Custom hook that observes and returns the dimensions of the element's parent.
 *
 * Usage:
 *   const [ref, size] = useParentSize<HTMLDivElement>();
 *   return <div ref={ref}>Parent is {size.width} x {size.height}</div>;
 */
export function useParentSize<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !element.parentElement) return;

    const parent = element.parentElement;

    const updateSize = () => {
      const rect = parent.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };

    updateSize(); // measure immediately

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(parent);

    // Clean up on unmount
    return () => resizeObserver.disconnect();
  }, []);

  return [elementRef, size] as const;
}
