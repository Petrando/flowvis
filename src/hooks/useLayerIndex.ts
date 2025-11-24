import { useEffect, useRef } from "react";

export const useLayerIndex = (next: string[]) => {
  const layersRef = useRef<string[]>([]);

  useEffect(() => {
    const prev = layersRef.current;    

    // Scenario C: empty → reset
    if (next.length === 0) {
      layersRef.current = [];
      return;
    }

    const overlap = next.some(k => prev.includes(k));
    const added = next.filter(k => !prev.includes(k));

    // Scenario B: no overlap → full reset
    if (!overlap) {
      layersRef.current = [...next];
      return;
    }

    // Scenario A: partial overlap → append new ones
    if (added.length > 0) {
      layersRef.current = [...prev, ...added];
      return;
    }

    // otherwise no changes
  }, [next]);

  return layersRef; // <--- key point
};
