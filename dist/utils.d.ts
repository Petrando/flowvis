export declare const cloneObj: (arr: any) => any;
export declare const indexColor: (i: number, assortedColorFirst?: boolean) => string;
export declare const indexSelectedColor: (i: number) => string;
export declare const basicFormat: (num: number) => string;
export declare function getMouseYInData(e: MouseEvent, svg: SVGSVGElement, yScale: d3.ScaleLinear<number, number>): {
    pixelY: number;
    dataY: number;
};
