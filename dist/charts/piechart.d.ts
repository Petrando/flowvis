import { default as React } from 'react';
import { pointData } from '../types';
type PiechartProps = {
    data: pointData[];
    innerRadius?: number;
    sortWithLegends?: boolean;
};
export declare function PieChart({ data, innerRadius, sortWithLegends }: PiechartProps): React.JSX.Element;
export {};
