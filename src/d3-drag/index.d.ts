// Type definitions for d3JS d3-drag module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

import * as d3_selection from 'd3-selection';


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
 * Container element type usable for mouse/touch functions
 */
type ContainerElement = HTMLElement | SVGSVGElement | SVGGElement; // HTMLElement includes HTMLCanvasElement

/**
 * The subject datum should at a minimum expose x and y properties, so that the relative position
 * of the subject and the pointer can be preserved during the drag gesture. 
 */
export interface SubjectDatum {
    x?: number;
    y?: number;
}

export interface DragBehavior<GElement extends BaseType, Datum> extends Function {
    (selection: d3_selection.Selection<GElement, Datum, any, any>, ...args: any[]): void;
    container(): (this: GElement, datum: Datum, i: number, group: Array<GElement> | NodeListOf<GElement>) => ContainerElement;
    container(accessor: (this: GElement, datum?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => ContainerElement): DragBehavior<GElement, Datum>;
    container(container: ContainerElement): DragBehavior<GElement, Datum>;
    filter(): (this: GElement, datum: Datum, index: number, group: Array<GElement>) => boolean;
    filter(filterFn: (this: GElement, datum: Datum, index: number, group: Array<GElement>) => boolean): DragBehavior<GElement, Datum>;
    subject(): (this: GElement, datum: Datum, index: number, group: Array<GElement>) => any;
    subject(accessor: (this: GElement, datum: Datum, index: number, group: Array<GElement>) => (Datum | SubjectDatum)): DragBehavior<GElement, Datum>;
    on(typenames: string): (this: GElement, datum: Datum, index: number, group: Array<GElement>) => any;
    on(typenames: string, callback: (this: GElement, datum: Datum, index: number, group: Array<GElement>) => any): DragBehavior<GElement, Datum>;
    on(typenames: string, callback: null): DragBehavior<GElement, Datum>;
}

export function drag<GElement extends BaseType, Datum>(): DragBehavior<GElement, Datum>;


// TODO: Decide on approach to extending d3.event typing, when d3-drag module is loaded.

export interface D3DragEvent<GElement extends BaseType, Datum> {
    target: DragBehavior<GElement, Datum>;
    type: string;
    subject: Datum | SubjectDatum;
    x: number;
    y: number;
    dx: number;
    dy: number;
    identifier: 'mouse' | number;
    active: number;
    sourceEvent: MouseEvent | TouchEvent;
    // TODO: Check signatures of on here! Return values of setters D3DragEvent
    on(typenames: string): (this: GElement, datum: Datum, index: number, group: Array<GElement>) => any;
    on(typenames: string, callback: (this: GElement, datum: Datum, index: number, group: Array<GElement>) => any): D3DragEvent<GElement, Datum>;
    on(typenames: string, callback: null): D3DragEvent<GElement, Datum>;
}

export function dragDisable(window: Window): void;

export function dragEnable(window: Window, noClick?: boolean): void;
