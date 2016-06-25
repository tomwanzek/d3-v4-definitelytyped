// Type definitions for d3JS d3-transition module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

// HACK: For development purposes only: '../' relative paths to resolve modules in absence of @types support (including for module augmentation below)

import {BaseType, Primitive, Selection} from '../d3-selection';

/**
 * Extend interface 'Selection' by declaration merging with 'd3-selection'
 */
declare module '../d3-selection' {
    export interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        interrupt(name?: string): Transition<GElement, Datum, PElement, PDatum>;
        transition(name?: string): Transition<GElement, Datum, PElement, PDatum>;
        transition(transition: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;
    }
}


export function active<GElement extends BaseType, Datum, PElement extends BaseType, PDatum>(node: GElement, name?: string): Transition<GElement, Datum, PElement, PDatum> | null;

export function interrupt(node: BaseType, name?: string): void;

export interface Transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {

    // Sub-selection -------------------------

    select<DescElement extends BaseType>(selector: string): Transition<DescElement, Datum, PElement, PDatum>;
    select<DescElement extends BaseType>(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => DescElement): Transition<DescElement, Datum, PElement, PDatum>;

    // NB: while the empty selections (null or undefined selector) are defined on the underlying object, they should not be exposed in the type definition API
    // as they are meaningless on transitions.)
    // selectAll(): Transition<undefined, undefined, GElement, Datum>; // _groups are set to empty array, first generic type is set to undefined by convention
    // selectAll(selector: null): Transition<undefined, undefined, GElement, Datum>; // _groups are set to empty array, first generic type is set to undefined by convention
    selectAll<DescElement extends BaseType, OldDatum>(selector: string): Transition<DescElement, OldDatum, GElement, Datum>;
    selectAll<DescElement extends BaseType, OldDatum>(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => (Array<DescElement> | NodeListOf<DescElement>)): Transition<DescElement, OldDatum, GElement, Datum>;

    selection(): Selection<GElement, Datum, PElement, PDatum>;
    transition(): Transition<GElement, Datum, PElement, PDatum>;

    // Modifying -------------------------------

    attr(name: string, value: Primitive | null): Transition<GElement, Datum, PElement, PDatum>;
    attr(name: string, value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Primitive): Transition<GElement, Datum, PElement, PDatum>;
    attrTween(name: string, tweenFn: (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => Primitive)): Transition<GElement, Datum, PElement, PDatum>;

    style(name: string, value: Primitive | null, priority?: string): Transition<GElement, Datum, PElement, PDatum>;
    style(name: string, value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Primitive, priority?: string): Transition<GElement, Datum, PElement, PDatum>;
    styleTween(name: string, tweenFn: (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => Primitive)): Transition<GElement, Datum, PElement, PDatum>;

    text(value: Primitive | null): Transition<GElement, Datum, PElement, PDatum>;
    text(value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Primitive): Transition<GElement, Datum, PElement, PDatum>;
    text(tweenFn: (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => Primitive)): Transition<GElement, Datum, PElement, PDatum>;

    tween(name: string): (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => void);
    tween(name: string, tweenFn: null): Transition<GElement, Datum, PElement, PDatum>;
    tween(name: string, tweenFn: (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => void)): Transition<GElement, Datum, PElement, PDatum>;

    remove(): Transition<GElement, Datum, PElement, PDatum>;

    merge(other: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;

    filter(selector: string): Transition<GElement, Datum, PElement, PDatum>;
    filter(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => boolean): Transition<GElement, Datum, PElement, PDatum>;

    // Event Handling -------------------

    on(type: string): (this: GElement, datum: Datum, index: number, group: Array<GElement> | NodeListOf<GElement>) => any;
    on(type: string, listener: null): Transition<GElement, Datum, PElement, PDatum>;
    on(type: string, listener: (this: GElement, datum: Datum, index: number, group: Array<GElement> | NodeListOf<GElement>) => any): Transition<GElement, Datum, PElement, PDatum>;
    
    // Control Flow ----------------------

    each(valueFn: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => void): Transition<GElement, Datum, PElement, PDatum>;

    call(func: (transition: Transition<GElement, Datum, PElement, PDatum>, ...args: any[]) => any, ...args: any[]): Transition<GElement, Datum, PElement, PDatum>;

    empty(): boolean;

    node(): GElement;
    nodes(): Array<GElement>;

    size(): number;

    // Transition Configuration ----------------------

    delay(): number;
    delay(milliseconds: number): Transition<GElement, Datum, PElement, PDatum>;

    duration(): number;
    duration(milliseconds: number): Transition<GElement, Datum, PElement, PDatum>;

    ease(): (normalizedTime: number) => number;
    ease(easingFn: (normalizedTime: number) => number): Transition<GElement, Datum, PElement, PDatum>;
}


export function transition(name: string): Transition<HTMLElement, any, null, undefined>;
export function transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum>(transition: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;

