// Type definitions for d3JS d3-transition module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information



//import * as d3_color from 'd3-color';
//import * as d3_dispatch from 'd3-dispatch';
//import * as d3_ease from 'd3-ease';
import {BaseType, Primitive, Selection} from '../d3-selection';
//import * as d3_timer from 'd3-timer';

// HACK: ../ to resolve in absence of @types support (including for augmentation below)

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


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

export interface TweenFn<T extends BaseType, U, V> extends Function {
    (this: T, datum?: U, i?: number, group?: T[] | NodeListOf<T>): ((t: number) => V);
}


export function active<GElement extends BaseType, Datum, PElement extends BaseType, PDatum>(node: GElement, name?: string): Transition<GElement, Datum, PElement, PDatum> | null;

export function interrupt(node: BaseType, name?: string): void;

export interface Transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {

    // Sub-selection -------------------------

    select<DescElement extends BaseType>(selector: string): Transition<DescElement, Datum, PElement, PDatum>;
    select<DescElement extends BaseType>(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => DescElement): Transition<DescElement, Datum, PElement, PDatum>;

    // TODO: while the empty selections (null or undefined selector) are defined on the underlying object, they should not be exposed in the type definition API
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
    // TODO: Review tweenFn
    attrTween(name: string, tweenFn: TweenFn<GElement, Datum, Primitive>): Transition<GElement, Datum, PElement, PDatum>;

    style(name: string, value: Primitive | null, priority?: string): Transition<GElement, Datum, PElement, PDatum>;
    style(name: string, value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Primitive, priority?: string): Transition<GElement, Datum, PElement, PDatum>;
    // TODO: Review tweenFn
    styleTween(name: string, tweenFn: TweenFn<GElement, Datum, Primitive>): Transition<GElement, Datum, PElement, PDatum>;

    text(value: Primitive | null): Transition<GElement, Datum, PElement, PDatum>;
    text(value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Primitive): Transition<GElement, Datum, PElement, PDatum>;
    // TODO: Review tweenFn
    text(tweenFn: TweenFn<GElement, Datum, Primitive>): Transition<GElement, Datum, PElement, PDatum>;

    // TODO: Check return type of TweenFn
    tween(name: string): TweenFn<GElement, Datum, void> | null;
    tween(name: string, tweenFn: null): Transition<GElement, Datum, PElement, PDatum>;
    tween(name: string, tweenFn: TweenFn<GElement, Datum, void>): Transition<GElement, Datum, PElement, PDatum>;

    remove(): Transition<GElement, Datum, PElement, PDatum>;

    // TODO: review merge with respect to typing of this and Datum, based on whether merged selections are type-compatible
    merge(other: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;
    // TODO: should this be permissible?
    //merge<TJoinGElement extends BaseType, JointDatum>(other: Transition<TJoinGElement, JointDatum>): Transition<TJoinGElement, JointDatum>;

    filter(selector: string): Transition<GElement, Datum, PElement, PDatum>;
    filter(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => boolean): Transition<GElement, Datum, PElement, PDatum>;

    // Event Handling -------------------

    // TODO: Check return type of on(type) (i.e. 'this' typing as 'any',  given that functionis not bound when returned?)
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

// export namespace transition {
//     // HACK: declaration merging with function signatures with different generic templates. 
//     // TODO: Review prototype typing, given the two different invocation signatures
//     // var prototype: Transition<d3_selection.BaseType, any, d3_selection.BaseType | null, any>;
// }

