import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// T = type of the DOM element (default to HTMLDivElement)
export const useD3 = <T extends HTMLElement | SVGSVGElement>(
  renderChartFn: (selection: d3.Selection<T, unknown, null, undefined>) => void,
  dependencies: React.DependencyList | null
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (dependencies !== undefined && ref.current) {
      renderChartFn(d3.select(ref.current));
    }
  }, dependencies === null ? undefined : dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
};
