// Type definitions for d3JS d3-selection module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

// TODO-List
//
// TODO: Review signatures for append, insert (need to consider whether or not they change
//      they change the typed nature of the selection, i.e. what do they return? Do they mutate
//      prior step  typing?)
// TODO: event and customEvent specifications
// TODO: Explanatory comments for exports
// TODO: Review Use of EnterElement interface for enter() selection return value. (Note that, the current BaseType is more extensive than
//       the placeholder EnterElement prior to appending materialized arguments to them) By Implication, while D3 returns a selection object,
//       certain methods, e.g. .on(...), .attr(...), .style(...) etc are meaningless/will create errors when invoked
// TODO: Consider separating out EnterSelection as separate interface with restricted methods, although this is not strictly the way d3-selection
// itself is written (This would be in line with the D3 3.x type definition)

// IMPORTANT: This typescript definitions file is intended for use with typescript version 1.9.0 or up. It uses
// a new compiler feature that allows the typing of 'this' context in functions, which is not supported in earlier
// versions of the compiler.
// The primary use case is for D3 selection related functions which are passed a DOM element
// as their 'this' context, e.g. attr(...), style(...) and prop(...).


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

/**
 * JavaScript primitive types, or "things that toString() predictably".
 */
export type Primitive = number | string | boolean;

/**
 * BaseType serves as an alias for the 'minimal' data type which can be selected
 * without 'd3-selection' trying to use properties internally which would otherwise not
 * be supported.
 */

export type BaseType = Element;



// TODO: Review Use for enter()
export type EnterElement = {
    ownerDocument: Document;
    namespaceURI: string;
    appendChild(newChild: Node): Node;
    insertBefore(newChild: Node, refChild: Node): Node;
    querySelector(selectors: string): Element;
    querySelectorAll(selectors: string): NodeListOf<Element>
}

/**
 * Container element type usable for mouse/touch functions
 */
export type ContainerElement = HTMLElement | SVGSVGElement | SVGGElement;


/**
 * Type for optional parameters map, when dispatching custom events
 * on a selection
 */
export type CustomEventParameters = {
    /**
     * If true, the event is dispatched to ancestors in reverse tree order
     */
    bubbles: boolean;
    /**
     * If true, event.preventDefault is allowed
     */
    cancelable: boolean;
    /**
     * Any custom data associated with the event
     */
    detail: any;
}



/**
 * Interface of callback function used for modifying attributes,styles and properties
 * of elements in a selection (The return type  must correspond to the choice of attr, styles or prop)
 */
export interface ValueFn<T extends BaseType, U, V> extends Function {
    (this: T, datum?: U, index?: number, group?: Array<T> | NodeListOf<T>): V;
}

/**
 * Interface of event listener function for registration on selected nodes
 * or customEvent
 */
export interface ListenerFn<T extends BaseType, U> extends Function {
    (this: T, datum?: U, index?: number, group?: Array<T> | NodeListOf<T>): any;
}

/**
 * Interface of selector function
 */
export interface SelectorFn<GroupElement extends BaseType, U, ChildElement extends BaseType> extends Function {
    (this: GroupElement, datum?: U, index?: number, group?: Array<GroupElement> | NodeListOf<GroupElement>): ChildElement;
}

/**
 * Interface of selectorAll function
 */
// TODO: validate return type (could be NodeListOf<T>)
export interface SelectorAllFn<GroupElement extends BaseType, U, ChildElement extends BaseType> extends Function {
    (this: GroupElement, datum?: U, index?: number, group?: Array<GroupElement> | NodeListOf<GroupElement>): Array<ChildElement> | NodeListOf<ChildElement>;
}

// --------------------------------------------------------------------------
// All Selection related interfaces and function
// --------------------------------------------------------------------------

export function select<GElement extends BaseType, Datum>(selector: string): Selection<GElement, Datum, HTMLElement, any>;
export function select<GElement extends BaseType, Datum>(node: GElement): Selection<GElement, Datum, HTMLElement, any>;

export function selectAll<GElement extends BaseType, Datum>(selector: string): Selection<GElement, Datum, HTMLElement, any>;
export function selectAll<GElement extends BaseType, Datum>(nodes: GElement[] | NodeListOf<GElement>): Selection<GElement, Datum, HTMLElement, any>;
export function selectAll<GElement extends BaseType, Datum>(...nodes: GElement[]): Selection<GElement, Datum, HTMLElement, any>;


interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {

    // Sub-selection -------------------------

    // The Selection.select(...) sub-selection method propagates the data to the newly selected elements
    // consequently the type of Datum does not change, however the type of element selected can change
    select<ChildElement extends BaseType>(selector: string): Selection<ChildElement, Datum, PElement, PDatum>;
    select<ChildElement extends BaseType>(selector: SelectorFn<GElement, Datum, ChildElement>): Selection<ChildElement, Datum, PElement, PDatum>;

    // The Selection.selectAll(...) sub-selection method does not propagate data to the newly selected elements,
    // This requires a separate call to Selection.data(...), as a result, this sub-selection method does not 
    // carry over the Datum type of Selection
    selectAll<ChildElement extends BaseType, NewDatum>(selector: string): Selection<ChildElement, NewDatum, GElement, Datum>;
    selectAll<ChildElement extends BaseType, NewDatum>(selector: SelectorAllFn<GElement, Datum, ChildElement>): Selection<ChildElement, NewDatum, GElement, Datum>;

    // Modifying -------------------------------

    attr(name: string): string;
    attr(name: string, value: Primitive): Selection<GElement, Datum, PElement, PDatum>;
    attr(name: string, value: ValueFn<GElement, Datum, Primitive>): Selection<GElement, Datum, PElement, PDatum>;

    classed(name: string): boolean;
    classed(name: string, value: boolean): Selection<GElement, Datum, PElement, PDatum>;
    classed(name: string, value: ValueFn<GElement, Datum, boolean>): Selection<GElement, Datum, PElement, PDatum>;

    style(name: string): string;
    style(name: string, value: Primitive, priority?: string): Selection<GElement, Datum, PElement, PDatum>;
    style(name: string, value: ValueFn<GElement, Datum, Primitive>, priority?: string): Selection<GElement, Datum, PElement, PDatum>;

    property(name: string): any;
    property(name: string, value: any): Selection<GElement, Datum, PElement, PDatum>;
    property(name: string, value: ValueFn<GElement, Datum, any>): Selection<GElement, Datum, PElement, PDatum>;

    text(): string;
    text(value: Primitive): Selection<GElement, Datum, PElement, PDatum>;
    text(value: ValueFn<GElement, Datum, Primitive>): Selection<GElement, Datum, PElement, PDatum>;

    html(): string;
    html(value: string): Selection<GElement, Datum, PElement, PDatum>;
    html(value: ValueFn<GElement, Datum, string>): Selection<GElement, Datum, PElement, PDatum>;

    append<NewGElement extends BaseType>(type: string): Selection<NewGElement, Datum, PElement, PDatum>;
    append<NewGElement extends BaseType>(type: ValueFn<GElement, Datum, NewGElement>): Selection<NewGElement, Datum, PElement, PDatum>;


    insert<NewGElement extends BaseType>(type: string, before: string): Selection<NewGElement, Datum, PElement, PDatum>;
    insert<NewGElement extends BaseType>(type: ValueFn<GElement, Datum, NewGElement>, before: string): Selection<NewGElement, Datum, PElement, PDatum>;
    // TODO: check return type specification of 'before' function should permit any type that extends BaseType
    insert<NewGElement extends BaseType>(type: string, before: ValueFn<GElement, Datum, BaseType>): Selection<NewGElement, Datum, PElement, PDatum>;
    insert<NewGElement extends BaseType>(type: ValueFn<GElement, Datum, NewGElement>, before: ValueFn<GElement, Datum, BaseType>): Selection<NewGElement, Datum, PElement, PDatum>;

    /**
     * Removes the selected elements from the document.
     * Returns this selection (the removed elements) which are now detached from the DOM.
     */
    remove(): Selection<GElement, Datum, PElement, PDatum>;

    merge(other: Selection<GElement, Datum, PElement, PDatum>): Selection<GElement, Datum, PElement, PDatum>;
    // TODO: should this be permissible?
    // merge<TJointElement extends BaseType, JointDatum>(other: Selection<TJointElement, JointDatum>): Selection<TJointElement, JointDatum>;
   

    filter(selector: string): Selection<GElement, Datum, PElement, PDatum>;
    filter(selector: ValueFn<GElement, Datum, boolean>): Selection<GElement, Datum, PElement, PDatum>;



    sort(comparator?: (a: Datum, b: Datum) => number): Selection<GElement, Datum, PElement, PDatum>;

    order(): Selection<GElement, Datum, PElement, PDatum>;

    raise(): Selection<GElement, Datum, PElement, PDatum>;

    lower(): Selection<GElement, Datum, PElement, PDatum>;


    // Data Join ---------------------------------

    datum(): Datum;
    datum<NewDatum>(value: NewDatum): Selection<GElement, NewDatum, PElement, PDatum>;
    // TODO: Review below
    datum<NewDatum>(value: ValueFn<GElement, Datum, NewDatum>): Selection<GElement, NewDatum, PElement, PDatum>;

    data(): Datum[];
    // TODO: Validate below i.p. function-driven data argument, consider 'this' type and check mapping from old to new (what is passed into the function)
    // TODO: Review logic with respect to Parent datum and Parent DOM element
    // TODO: Review key signature in data.js it is invoked in two different spots with different arguments: ln 45 and ln 58, i.p. check 'groups' argument of ln 58
    data<NewDatum>(data: Array<NewDatum>, key?: ValueFn<GElement | PElement, Datum | NewDatum, string>): Selection<GElement, NewDatum, PElement, PDatum>;
    data<NewDatum>(data: ValueFn<PElement, PDatum, Array<NewDatum>>, key?: ValueFn<GElement | PElement, Datum | NewDatum, string>): Selection<GElement, NewDatum, PElement, PDatum>;

    // TODO: Enter Selection returns GElements of type EnterNode
    enter(): Selection<GElement, Datum, PElement, PDatum>;

    // TODO: Review this: The type Datum on the exit items is actually of the type prior to calling data(...), as by definition, no new data of type NewDatum exists for these
    // elements. Due to the chaining, .data(...).exit(...), however, the definition would imply that the exit group elements have assumed the NewDatum type.
    // This seems to imply the following workaroud: Recast the exit Selection to OldDatum, if needed, or ommit and allow exit group elements to be of type any.
    exit<OldDatum>(): Selection<GElement, OldDatum, PElement, PDatum>;

    // Event Handling -------------------

    // TODO: Check return type of on(type) (i.e. 'this' typing as 'any',  given that functionis not bound when returned?)
    on(type: string): ListenerFn<any, Datum>;
    on(type: string, listener: ListenerFn<GElement, Datum> | null, capture?: boolean): Selection<GElement, Datum, PElement, PDatum>;


    dispatch(type: string, parameters?: CustomEventParameters): Selection<GElement, Datum, PElement, PDatum>;
    dispatch(type: string, parameters?: ValueFn<GElement, Datum, CustomEventParameters>): Selection<GElement, Datum, PElement, PDatum>;

    // Control Flow ----------------------

    each(valueFn: ValueFn<GElement, Datum, void>): Selection<GElement, Datum, PElement, PDatum>;

    call(func: (selection: Selection<GElement, Datum, PElement, PDatum>, ...args: any[]) => void, ...args: any[]): Selection<GElement, Datum, PElement, PDatum>;

    empty(): boolean;

    node(): GElement;
    nodes(): Array<GElement>

    size(): number;


}

// TODO: Review this, as this is the root selection.
interface selectionFn extends Function {
    (): Selection<HTMLElement, any, null, undefined>;
    prototype: Selection<HTMLElement, any, null, undefined>;
}
export var selection: selectionFn;


// ---------------------------------------------------------------------------
// on.js event and customEvent related
// ---------------------------------------------------------------------------

// TODO: Review this section this is incorporated from D3js 3.x.x and had
// some related issues like .pageX, .pageY

interface BaseEvent extends Event{
    type: string;
    sourceEvent?: Event | MouseEvent | TouchEvent;
}

export var event: BaseEvent | Event | MouseEvent | TouchEvent;

// TODO: Check signature w.r.t event and this-context and ...args
// returns return value of invoked listener
export function customEvent<Datum>(event: BaseEvent | Event, listener: (d: Datum, index: number) => any, that: any, ...args: any[]): any;

// ---------------------------------------------------------------------------
// mouse.js related
// ---------------------------------------------------------------------------

/**
 * Get (x, y)-coordinates of the current event relative to the specified container element.
 * The coordinates are returned as a two-element array of numbers [x, y].
 * @param container
 */
export function mouse(container: ContainerElement): [number, number];

// ---------------------------------------------------------------------------
// touch.js and touches.js related
// ---------------------------------------------------------------------------

export function touch(container: ContainerElement, identifier: number): [number, number];
export function touch(container: ContainerElement, touches: TouchList, identifier: number): [number, number];

export function touches(container: HTMLElement | SVGSVGElement | SVGGElement, touches?: TouchList): Array<[number, number]>;

// ---------------------------------------------------------------------------
// local.js related
// ---------------------------------------------------------------------------

// TODO: Not yet included in npm install d3@next as of May/29/2016, but included
// on github d3-selection with API description
// TODO: validate type of node (BaseType?)
export interface Local {
    get(node: BaseType): any;
    remove(node: BaseType): boolean;
    set(node: BaseType, value: any): BaseType;
    /**
     * Obtain a string with the internally assigned property name for the local
     * which is used to store the value on a node 
     */
    toString(): string;
}

/**
 * Obtain a new local variable
 */
export function local(): Local;

// ---------------------------------------------------------------------------
// namespace.js related
// ---------------------------------------------------------------------------

/**
 * Type for object literal containing local name with related fully qualified namespace
 */
export type NamespaceLocalObject = {
    /**
     * Fully qualified namespace
     */
    space: string,
    /**
     * Name of the local to be namespaced.
     */
    local: string
}

/**
 * Obtain an object with properties of fully qualified namespace string and
 * name of local by parsing a shorthand string "prefix:local". If the prefix
 * does not exist in the "namespaces" object provided by d3-selection, then
 * the local name is returned as a simple string.
 * 
 * @param prefixedLocal A string composed of the namespace prefix and local 
 * name separated by colon, e.g. "svg:text".
 */
export function namespace(prefixedLocal: string): NamespaceLocalObject | string;


// ---------------------------------------------------------------------------
// namespaces.js related
// ---------------------------------------------------------------------------

/**
 * Type for maps of namespace prefixes to corresponding fully qualified namespace strings
 */
export type NamespaceMap = { [prefix: string]: string };

/**
 * Map of namespace prefixes to corresponding fully qualified namespace strings
 */
export var namespaces: NamespaceMap;


// ---------------------------------------------------------------------------
// window.js related
// ---------------------------------------------------------------------------

export function window(DOMNode: Window | Document | BaseType): Window;


// ---------------------------------------------------------------------------
// creator.js and matcher.js Complex helper closure generating functions
// for explicit bound-context dependent use
// ---------------------------------------------------------------------------


/**
 * Returns a closure structure which can be invoked in the 'this' context
 * of a group element. Depending on the use of namespacing, the NewGElement can be HTMLElement,
 * SVGElement an extension thereof or an element from a different namespace.
 * 
 * @param elementName Name of the element to be added
 */
export function creator<NewGElement extends BaseType>(elementName: string): (this: BaseType) => NewGElement;

/**
 * Returns a closure structure which can be invoked in the 'this' context
 * of a group element. Returns true, if the element in the 'this' context matches the selector
 * 
 * @param selector A valid selector string
 */
export function matcher<GElement extends BaseType>(selector: string): (this: BaseType) => boolean;

// ----------------------------------------------------------------------------
// selector.js and selectorAll.js related functions
// ----------------------------------------------------------------------------

export function selector<ChildElement extends BaseType>(selector: string): (this: BaseType) => ChildElement

export function selectorAll<ChildElement extends BaseType>(selector: string): (this: BaseType) => NodeListOf<ChildElement>;