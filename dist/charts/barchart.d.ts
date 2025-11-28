import { default as React } from 'react';
import { pointData } from '../types';
type BarchartProps = {
    data: pointData[];
    color?: {
        idx: number;
        type?: 'fixed' | 'colorful';
    };
};
export declare function BarChart({ data, color: { idx, // default idx
type, } }: BarchartProps): React.JSX.Element;
export {};
