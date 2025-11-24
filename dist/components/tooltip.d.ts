import { FunctionComponent } from 'react';
import * as d3 from 'd3';
type ITooltip = {
    pCount?: number;
};
export declare const Tooltip: FunctionComponent<ITooltip>;
export declare const SankeyTooltip: FunctionComponent;
export declare const getTooltip: (svg: d3.Selection<(SVGAElement | HTMLDivElement), any, any, any>, id?: string) => d3.Selection<d3.BaseType, any, any, any>;
type PositioningProps = {
    e: MouseEvent;
    svg: SVGSVGElement;
    yScale: d3.ScaleLinear<number, number>;
};
export declare function moveTooltip(tooltip: any, positionProps: PositioningProps): void;
export declare function hideTooltip(tooltip: any): void;
export {};
