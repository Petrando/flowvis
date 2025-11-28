import { default as React } from 'react';
import { pointData } from '../types';
type PiechartProps = {
    data: pointData[];
    innerRadius?: number;
    sortWithLegends?: boolean;
    colorIdx?: number;
};
export declare function PieChart({ data, innerRadius, sortWithLegends, colorIdx }: PiechartProps): React.JSX.Element;
export {};
