import { default as React } from 'react';
import { pointData } from '../types';
type BarchartProps = {
    data: pointData[];
    colorIdx?: number;
};
export declare function BarChart({ data, colorIdx }: BarchartProps): React.JSX.Element;
export {};
