// Type definitions for d3JS d3-transition module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information


import * as d3_color from 'd3-color';
import * as d3_dispatch from 'd3-dispatch';
import * as d3_ease from 'd3-ease';
import * as d3_interpolate from 'd3-interpolate';
import * as d3_selection from 'd3-selection';
import * as d3_timer from 'd3-timer';

/**
 * Extend interface 'Selection' by declaration merging with 'd3-selection'
 */
declare module 'd3-selection' {
    export interface Selection<GElement extends d3_selection.BaseType, Datum, PElement extends d3_selection.BaseType, PDatum> {
        interrupt(name?: string): Transition<GElement, Datum, PElement, PDatum>;
        transition(name?: string): Transition<GElement, Datum, PElement, PDatum>;
        transition(transition: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;
    }
}


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

export interface TweenFn<T extends d3_selection.BaseType, U, V> extends Function {
    (this: T, datum?: U, i?: number, group?: T[] | NodeListOf<T> ): d3_interpolate.InterpolationFn<V>;
}


export function active<GElement extends d3_selection.BaseType, Datum, PElement extends d3_selection.BaseType, PDatum>(node: GElement, name?: string): Transition<GElement, Datum, PElement, PDatum> | null;

export function interrupt(node: d3_selection.BaseType, name?: string): void;

export interface Transition<GElement extends d3_selection.BaseType, Datum, PElement extends d3_selection.BaseType, PDatum> {

    // Sub-selection -------------------------

    select<ChildElement extends d3_selection.BaseType>(selector: string): Transition<ChildElement, Datum, PElement, PDatum>;
    select<ChildElement extends d3_selection.BaseType>(selector: d3_selection.SelectorFn<GElement, Datum, ChildElement>): Transition<ChildElement, Datum, PElement, PDatum>;

    selectAll<ChildElement extends d3_selection.BaseType, NewDatum>(selector: string): Transition<ChildElement, NewDatum, GElement, Datum>;
    selectAll<ChildElement extends d3_selection.BaseType, NewDatum>(selector: d3_selection.SelectorAllFn<GElement, Datum, ChildElement>): Transition<ChildElement, NewDatum, GElement, Datum>;

    selection(): d3_selection.Selection<GElement, Datum, PElement, PDatum>;
    transition(): Transition<GElement, Datum, PElement, PDatum>;
    
    // Modifying -------------------------------

    attr(name: string, value: d3_selection.Primitive | null): Transition<GElement, Datum, PElement, PDatum>;
    attr(name: string, value: d3_selection.ValueFn<GElement, Datum, d3_selection.Primitive>): Transition<GElement, Datum, PElement, PDatum>;
    // TODO: Review tweenFn
    attrTween(name: string, tweenFn: TweenFn<GElement, Datum, d3_selection.Primitive>): Transition<GElement, Datum, PElement, PDatum>;
    
    style(name: string, value: d3_selection.Primitive | null, priority?: string): Transition<GElement, Datum, PElement, PDatum>;
    style(name: string, value: d3_selection.ValueFn<GElement, Datum, d3_selection.Primitive>, priority?: string): Transition<GElement, Datum, PElement, PDatum>;
    // TODO: Review tweenFn
    styleTween(name: string, tweenFn: TweenFn<GElement, Datum, d3_selection.Primitive>): Transition<GElement, Datum, PElement, PDatum>;
    
    text(value: d3_selection.Primitive | null): Transition<GElement, Datum, PElement, PDatum>;
    text(value: d3_selection.ValueFn<GElement, Datum, d3_selection.Primitive>): Transition<GElement, Datum, PElement, PDatum>;
    // TODO: Review tweenFn
    text(tweenFn: TweenFn<GElement, Datum, d3_selection.Primitive>): Transition<GElement, Datum, PElement, PDatum>;

    // TODO: Check return type of TweenFn
    tween(name: string): TweenFn<GElement, Datum, d3_selection.Primitive | void>;
    tween(name: string, tweenFn: TweenFn<GElement, Datum, d3_selection.Primitive> | void): Transition<GElement, Datum, PElement, PDatum>;

    remove(): Transition<GElement, Datum, PElement, PDatum>;

    // TODO: review merge with respect to typing of this and Datum, based on whether merged selections are type-compatible
    merge(other: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;
    // TODO: should this be permissible?
    //merge<TJoinGElement extends BaseType, JointDatum>(other: Transition<TJoinGElement, JointDatum>): Transition<TJoinGElement, JointDatum>;

    filter(selector: string): Transition<GElement, Datum, PElement, PDatum>;
    filter(selector: d3_selection.ValueFn<GElement, Datum, boolean>): Transition<GElement, Datum, PElement, PDatum>;

    // Event Handling -------------------

    // TODO: Check return type of on(type) (i.e. 'this' typing as 'any',  given that functionis not bound when returned?)
    on(type: string): d3_selection.ListenerFn<any, Datum>;
    on(type: string, listener: d3_selection.ListenerFn<GElement, Datum>): Transition<GElement, Datum, PElement, PDatum>;

    // Control Flow ----------------------

    each(valueFn: d3_selection.ValueFn<GElement, Datum, void>): Transition<GElement, Datum, PElement, PDatum>;

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

    ease(): d3_ease.EasingFn;
    ease(easingFn: d3_ease.EasingFn): Transition<GElement, Datum, PElement, PDatum>;
}


export function transition(name: string): Transition<HTMLElement, any, null, undefined>;
export function transition<GElement extends d3_selection.BaseType, Datum, PElement extends d3_selection.BaseType, PDatum>(transition: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;

export namespace transition {
    // HACK: declaration merging with function signatures with different generic templates. 
    // TODO: Review prototype typing, given the two different invocation signatures
    var prototype: Transition<d3_selection.BaseType, any, d3_selection.BaseType | null, any>;
}