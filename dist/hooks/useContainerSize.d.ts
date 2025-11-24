import { RefObject } from 'react';
type Size = {
    width: number;
    height: number;
};
export declare function useContainerSize<T extends HTMLElement>(): [RefObject<T | null>, Size];
export {};
