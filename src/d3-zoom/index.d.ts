// Type definitions for d3JS d3-zoom module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

import * as d3_selection from '../d3-selection';
import * as d3_transition from '../d3-transition';


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

/**
 * BaseType serves as an alias for the 'minimal' data type which can be selected
 * without 'd3-selection' trying to use properties internally which would otherwise not
 * be supported.
 */
type BaseType = Element;

/**
 * Minimal interface for a continuous scale.
 * This interface is used as a minimum contract for scale objects
 * that  can be passed into zoomTransform methods rescaleX and rescaleY
 */
export interface ZoomScale {
    domain(): Array<number>;
    domain(domain: Array<number>): ZoomScale;
    range(): Array<number>;
    range(range: Array<number>): ZoomScale;
    copy(): ZoomScale;
    invert(value: number): number;
}

// --------------------------------------------------------------------------
// Zoom Behavior
// --------------------------------------------------------------------------


export interface ZoomBehavior<GElement extends BaseType, Datum> extends Function {
    (selection: d3_selection.Selection<GElement, Datum, any, any>, ...args: any[]): void;
    transform(selection: d3_selection.Selection<GElement, Datum, any, any>, transform: ZoomTransform): void;
    transform(selection: d3_selection.Selection<GElement, Datum, any, any>, transform: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => ZoomTransform): void;
    transform(transition: d3_transition.Transition<GElement, Datum, any, any>, transform: ZoomTransform): void;
    transform(transition: d3_transition.Transition<GElement, Datum, any, any>, transform: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => ZoomTransform): void;

    translateBy(selection: d3_selection.Selection<GElement, Datum, any, any>, x: number, y: number): void;
    translateBy(selection: d3_selection.Selection<GElement, Datum, any, any>, x: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number, y: number): void;
    translateBy(selection: d3_selection.Selection<GElement, Datum, any, any>, x: number, y: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;
    translateBy(selection: d3_selection.Selection<GElement, Datum, any, any>, x: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number, y: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;
    translateBy(transition: d3_transition.Transition<GElement, Datum, any, any>, x: number, y: number): void;
    translateBy(transition: d3_transition.Transition<GElement, Datum, any, any>, x: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number, y: number): void;
    translateBy(transition: d3_transition.Transition<GElement, Datum, any, any>, x: number, y: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;
    translateBy(transition: d3_transition.Transition<GElement, Datum, any, any>, x: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number, y: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;

    scaleBy(selection: d3_selection.Selection<GElement, Datum, any, any>, k: number): void;
    scaleBy(transition: d3_transition.Transition<GElement, Datum, any, any>, k: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;

    scaleTo(selection: d3_selection.Selection<GElement, Datum, any, any>, k: number): void;
    scaleTo(transition: d3_transition.Transition<GElement, Datum, any, any>, k: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;

    filter(): (this: GElement, datum: Datum, index: number, group: Array<GElement>) => boolean;
    filter(filterFn: (this: GElement, d?: Datum, index?: number, group?: Array<GElement>) => boolean): ZoomBehavior<GElement, Datum>;

    extent(): (this: GElement, d: Datum, index: number, group: Array<GElement>) => [[number, number], [number, number]];
    extent(extent: [[number, number], [number, number]]): ZoomBehavior<GElement, Datum>;
    extent(extent: (this: GElement, d?: Datum, index?: number, group?: Array<GElement>) => [[number, number], [number, number]]): ZoomBehavior<GElement, Datum>;

    scaleExtent(): [number, number];
    scaleExtent(extent: [number, number]): ZoomBehavior<GElement, Datum>;

    translateExtent(): [[number, number], [number, number]];
    translateExtent(extent: [[number, number], [number, number]]): ZoomBehavior<GElement, Datum>;

    duration(): number;
    duration(duration: number): ZoomBehavior<GElement, Datum>;

    on(typenames: string): (this: GElement, datum: Datum, index: number, group: Array<GElement>) => void;
    on(typenames: string, callback: null): ZoomBehavior<GElement, Datum>;
    on(typenames: string, callback: (this: GElement, datum: Datum, index: number, group: Array<GElement>) => void): ZoomBehavior<GElement, Datum>;    
}


export function zoom<GElement extends BaseType, Datum>(): ZoomBehavior<GElement, Datum>;

// --------------------------------------------------------------------------
// Zoom Event
// --------------------------------------------------------------------------


export interface D3ZoomEvent<GElement extends BaseType, Datum> {
    target: ZoomBehavior<GElement, Datum>;
    type: 'start' | 'zoom' | 'end' | string; // Leave failsafe string type for cases like 'zoom.foo'
    transform: ZoomTransform;
    sourceEvent: MouseEvent | TouchEvent;
}

// --------------------------------------------------------------------------
// Zoom Transforms
// --------------------------------------------------------------------------


export interface ZoomTransform {
    readonly x: number;
    readonly y: number;
    readonly k: number;
    apply(point: [number, number]): [number, number];
    applyX(x: number): number;
    applyY(y: number): number;
    invert(point: [number, number]): [number, number];
    invertX(x: number): number;
    invertY(y: number): number
    rescaleX<S extends ZoomScale>(xScale: S): S;
    rescaleY<S extends ZoomScale>(yScale: S): S;
    scale(k: number): ZoomTransform;
    toString(): string;
    translate(x: number, y: number): ZoomTransform;
}

export function zoomTransform(node: BaseType): ZoomTransform;


export const zoomIdentity: ZoomTransform;