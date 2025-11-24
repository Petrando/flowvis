export interface Size {
    width: number;
    height: number;
}
/**
 * Custom hook that observes and returns the dimensions of the element's parent.
 *
 * Usage:
 *   const [ref, size] = useParentSize<HTMLDivElement>();
 *   return <div ref={ref}>Parent is {size.width} x {size.height}</div>;
 */
export declare function useParentSize<T extends HTMLElement>(): readonly [import('react').RefObject<T | null>, Size];
