import { default as React } from 'react';
import { StackedBarChartProps } from './types';
type StackedBarChartPropsExtended = StackedBarChartProps & {
    focusOnPlot?: boolean;
};
export declare const inactiveColor = "#d1d5db";
export declare function StackedBarChart({ data, focusOnPlot }: StackedBarChartPropsExtended): React.JSX.Element;
export {};
