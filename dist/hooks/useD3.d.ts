import { default as React } from 'react';
import * as d3 from "d3";
export declare const useD3: <T extends HTMLElement | SVGSVGElement>(renderChartFn: (selection: d3.Selection<T, unknown, null, undefined>) => void, dependencies: React.DependencyList | null) => React.RefObject<T | null>;
