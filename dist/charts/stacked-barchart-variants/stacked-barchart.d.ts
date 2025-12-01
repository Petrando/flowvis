import { default as React } from 'react';
import { StackedBarChartProps } from './types';
type StackedBarChartPropsExtended = StackedBarChartProps & {
    focusOnPlot?: boolean;
};
export declare function StackedBarChart({ data, focusOnPlot, color: { idx } }: StackedBarChartPropsExtended): React.JSX.Element;
export {};
