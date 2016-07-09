// Type definitions for d3JS d3-shape module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information


// -----------------------------------------------------------------------------------
// Arc Generator
// -----------------------------------------------------------------------------------

export interface DefaultArcObject {
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    padAngle: number;
}

export interface Arc<Datum> {
    (d: Datum, ...args: any[]): string | undefined;
    centroid(d: Datum, ...args: any[]): [number, number];
    innerRadius(): (this: any, d: Datum, ...args: any[]) => number;
    innerRadius(radius: number): Arc<Datum>;
    innerRadius(radius: (this: any, d: Datum, ...args: any[]) => number): Arc<Datum>;
    outerRadius(): (this: any, d: Datum, ...args: any[]) => number;
    outerRadius(radius: number): Arc<Datum>;
    outerRadius(radius: (this: any, d: Datum, ...args: any[]) => number): Arc<Datum>;
    cornerRadius(): (this: any, d: Datum, ...args: any[]) => number;
    cornerRadius(radius: number): Arc<Datum>;
    cornerRadius(radius: (this: any, d: Datum, ...args: any[]) => number): Arc<Datum>;
    startAngle(): (this: any, d: Datum, ...args: any[]) => number;
    startAngle(angle: number): Arc<Datum>;
    startAngle(angle: (this: any, d: Datum, ...args: any[]) => number): Arc<Datum>;
    endAngle(): (this: any, d: Datum, ...args: any[]) => number;
    endAngle(angle: number): Arc<Datum>;
    endAngle(angle: (this: any, d: Datum, ...args: any[]) => number): Arc<Datum>;
    padAngle(): (this: any, d: Datum, ...args: any[]) => number;
    padAngle(angle: number): Arc<Datum>;
    padAngle(angle: (this: any, d: Datum, ...args: any[]) => number): Arc<Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): Arc<Datum>;
    context(context: null): Arc<Datum>;
}

export function arc(): Arc<DefaultArcObject>;
export function arc<Datum>(): Arc<Datum>;

// -----------------------------------------------------------------------------------
// Pie Generator
// -----------------------------------------------------------------------------------


export interface PieArcDatum<T> {
    data: T;
    value: number;
    index: number;
    startAngle: number;
    endAngle: number;
    padAngle: number;
}


export interface Pie<Datum> {
    (data: Array<Datum>, ...args: any[]): Array<PieArcDatum<Datum>>;
    value(): (d: Datum, i?: number, data?: Array<Datum>) => number;
    value(value: number): Pie<Datum>;
    value(value: (d: Datum, i?: number, data?: Array<Datum>) => number): Pie<Datum>;
    sort(): ((a: Datum, b: Datum) => number) | null;
    sort(comparator: (a: Datum, b: Datum) => number): Pie<Datum>;
    sort(comparator: null): Pie<Datum>;
    sortValues(): ((a: number, b: number) => number) | null;
    sortValues(comparator: (a: number, b: number) => number): Pie<Datum>;
    sortValues(comparator: null): Pie<Datum>;
    startAngle(): (this: any, data: Array<Datum>, ...args: any[]) => number;
    startAngle(angle: number): Pie<Datum>;
    startAngle(angle: (this: any, data: Array<Datum>, ...args: any[]) => number): Pie<Datum>;
    endAngle(): (this: any, data: Array<Datum>, ...args: any[]) => number;
    endAngle(angle: number): Pie<Datum>;
    endAngle(angle: (this: any, data: Array<Datum>, ...args: any[]) => number): Pie<Datum>;
    padAngle(): (this: any, data: Array<Datum>, ...args: any[]) => number;
    padAngle(angle: number): Pie<Datum>;
    padAngle(angle: (this: any, data: Array<Datum>, ...args: any[]) => number): Pie<Datum>;
}

export function pie(): Pie<number | { valueOf(): number }>;
export function pie<Datum>(): Pie<Datum>;

// -----------------------------------------------------------------------------------
// Line Generators
// -----------------------------------------------------------------------------------


export interface Line<T> {
    (data: Array<T>): string | undefined;
    x(): (d: T, index?: number, data?: Array<T>) => number;
    x(x: number): Line<T>;
    x(x: (d: T, index?: number, data?: Array<T>) => number): Line<T>;
    y(): (d: T, index?: number, data?: Array<T>) => number;
    y(y: number): Line<T>;
    y(y: (d: T, index?: number, data?: Array<T>) => number): Line<T>;
    defined(): (d: T, index?: number, data?: Array<T>) => boolean;
    defined(defined: boolean): Line<T>;
    defined(defined: (d: T, index?: number, data?: Array<T>) => boolean): Line<T>;
    curve(): CurveFactory | CurveFactoryLineOnly;
    curve(curve: CurveFactory | CurveFactoryLineOnly): Line<T>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): Line<T>;
    context(context: null): Line<T>;
}
export function line(): Line<[number, number]>;
export function line<T>(): Line<T>;

export interface RadialLine<T> {
    (data: Array<T>): string | undefined;
    angle(): (d: T, index?: number, data?: Array<T>) => number;
    angle(angle: number): RadialLine<T>;
    angle(angle: (d: T, index?: number, data?: Array<T>) => number): RadialLine<T>;
    radius(): (d: T, index?: number, data?: Array<T>) => number;
    radius(radius: number): RadialLine<T>;
    radius(radius: (d: T, index?: number, data?: Array<T>) => number): RadialLine<T>;
    defined(): (d: T, index?: number, data?: Array<T>) => boolean;
    defined(defined: boolean): RadialLine<T>;
    defined(defined: (d: T, index?: number, data?: Array<T>) => boolean): RadialLine<T>;
    curve(): CurveFactory | CurveFactoryLineOnly;
    curve(curve: CurveFactory | CurveFactoryLineOnly): RadialLine<T>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): RadialLine<T>;
    context(context: null): RadialLine<T>;
}

export function radialLine(): RadialLine<[number, number]>;
export function radialLine<T>(): RadialLine<T>;

// -----------------------------------------------------------------------------------
// Area Generators
// -----------------------------------------------------------------------------------


export interface Area<T> {
    (data: Array<T>): string | undefined;
    x(): (d: T, index?: number, data?: Array<T>) => number;
    x(x: number): Area<T>;
    x(x: (d: T, index?: number, data?: Array<T>) => number): Area<T>;
    x0(): (d: T, index?: number, data?: Array<T>) => number;
    x0(x0: number): Area<T>;
    x0(x0: (d: T, index?: number, data?: Array<T>) => number): Area<T>;
    x1(): ((d: T, index?: number, data?: Array<T>) => number) | null;
    x1(x: number): Area<T>;
    x1(x: (d: T, index?: number, data?: Array<T>) => number): Area<T>;
    y(): (d: T, index?: number, data?: Array<T>) => number;
    y(y: number): Area<T>;
    y(y: (d: T, index?: number, data?: Array<T>) => number): Area<T>;
    y0(): (d: T, index?: number, data?: Array<T>) => number;
    y0(y: number): Area<T>;
    y0(y: (d: T, index?: number, data?: Array<T>) => number): Area<T>;
    y1(): (d: T, index?: number, data?: Array<T>) => number;
    y1(y: number): Area<T>;
    y1(y: (d: T, index?: number, data?: Array<T>) => number): Area<T>;
    defined(): (d: T, index?: number, data?: Array<T>) => boolean;
    defined(defined: boolean): Area<T>;
    defined(defined: (d: T, index?: number, data?: Array<T>) => boolean): Area<T>;
    curve(): CurveFactory;
    curve(curve: CurveFactory): Area<T>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): Area<T>;
    context(context: null): Area<T>;
    lineX0(): Line<T>;
    lineY0(): Line<T>;
    lineX1(): Line<T>;
    lineY1(): Line<T>;
}

export function area(): Area<[number, number]>;
export function area<T>(): Area<T>;


export interface RadialArea<T> {
    (data: Array<T>): string | undefined;
    angle(): (d: T, index?: number, data?: Array<T>) => number;
    angle(angle: number): RadialArea<T>;
    angle(angle: (d: T, index?: number, data?: Array<T>) => number): RadialArea<T>;
    startAngle(): (d: T, index?: number, data?: Array<T>) => number;
    startAngle(angle: number): RadialArea<T>;
    startAngle(angle: (d: T, index?: number, data?: Array<T>) => number): RadialArea<T>;
    endAngle(): ((d: T, index?: number, data?: Array<T>) => number) | null;
    endAngle(angle: number): RadialArea<T>;
    endAngle(angle: (d: T, index?: number, data?: Array<T>) => number): RadialArea<T>;
    radius(): (d: T, index?: number, data?: Array<T>) => number;
    radius(radius: number): RadialArea<T>;
    radius(radius: (d: T, index?: number, data?: Array<T>) => number): RadialArea<T>;
    innerRadius(): (d: T, index?: number, data?: Array<T>) => number;
    innerRadius(radius: number): RadialArea<T>;
    innerRadius(radius: (d: T, index?: number, data?: Array<T>) => number): RadialArea<T>;
    outerRadius(): (d: T, index?: number, data?: Array<T>) => number;
    outerRadius(radius: number): RadialArea<T>;
    outerRadius(radius: (d: T, index?: number, data?: Array<T>) => number): RadialArea<T>;
    defined(): (d: T, index?: number, data?: Array<T>) => boolean;
    defined(defined: boolean): RadialArea<T>;
    defined(defined: (d: T, index?: number, data?: Array<T>) => boolean): RadialArea<T>;
    curve(): CurveFactory;
    curve(curve: CurveFactory): RadialArea<T>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): RadialArea<T>;
    context(context: null): RadialArea<T>;
    lineStartAngle(): RadialLine<T>;
    lineInnerRadius(): RadialLine<T>;
    lineEndAngle(): RadialLine<T>;
    lineOuterRadius(): RadialLine<T>;
}

export function radialArea(): RadialArea<[number, number]>;
export function radialArea<T>(): RadialArea<T>;

// -----------------------------------------------------------------------------------
// Curve Factories
// -----------------------------------------------------------------------------------

export interface CurveGeneratorLineOnly {
    lineStart(): void;
    lineEnd(): void;
    point(x: number, y: number): void;
}

export interface CurveFactoryLineOnly {
    (context: CanvasRenderingContext2D | null): CurveGeneratorLineOnly;
}

export interface CurveGenerator extends CurveGeneratorLineOnly {
    areaStart(): void;
    areaEnd(): void;
}

export interface CurveFactory {
    (context: CanvasRenderingContext2D | null): CurveGenerator;
}

export var curveBasis: CurveFactory;

export var curveBasisOpen: CurveFactory;

export var curveBasisClosed: CurveFactory;

export interface CurveBundleFactory extends CurveFactoryLineOnly {
    beta(beta: number): CurveBundleFactory;
}

export var curveBundle: CurveBundleFactory;

export interface CurveCardinalFactory extends CurveFactory {
    tension(tension: number): CurveCardinalFactory;
}

export var curveCardinal: CurveCardinalFactory;
export var curveCardinalOpen: CurveCardinalFactory;
export var curveCardinalClosed: CurveCardinalFactory;

export interface CurveCatmullRomFactory extends CurveFactory {
    alpha(alpha: number): CurveCatmullRomFactory;
}

export var curveCatmullRom: CurveCatmullRomFactory;
export var curveCatmullRomOpen: CurveCatmullRomFactory;
export var curveCatmullRomClosed: CurveCatmullRomFactory;

export var curveLinear: CurveFactory;

export var curveLinearClosed: CurveFactory;

export var curveMonotoneX: CurveFactory;

export var curveMonotoneY: CurveFactory;

export var curveNatural: CurveFactory;

export var curveStep: CurveFactory;

export var stepAfter: CurveFactory;

export var curveStepBefore: CurveFactory;


// -----------------------------------------------------------------------------------
// SYMBOLS
// -----------------------------------------------------------------------------------

export interface SymbolType {
    draw(context: CanvasPathMethods, size: number): void;
}


export interface Symbol<Datum> {
    (d?: Datum, ...args: any[]): undefined | string;
    size(): (this: any, d?: Datum, ...args: any[]) => number;
    size(size: number): Symbol<Datum>;
    size(size: (this: any, d?: Datum, ...args: any[]) => number): Symbol<Datum>;
    type(): (this: any, d?: Datum, ...args: any[]) => SymbolType;
    type(type: SymbolType): Symbol<Datum>;
    type(type: (this: any, d?: Datum, ...args: any[]) => number): Symbol<Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): Symbol<Datum>;
    context(context: null): Symbol<Datum>;

}

export function symbol(): Symbol<any>;
export function symbol<Datum>(): Symbol<Datum>;

export var symbols: Array<SymbolType>;


export var symbolCircle: SymbolType;

export var symbolCross: SymbolType;
export var symbolDiamond: SymbolType;
export var symbolSquare: SymbolType;
export var symbolStar: SymbolType;
export var symbolTriangle: SymbolType;
export var symbolWye: SymbolType;


// -----------------------------------------------------------------------------------
// STACKS
// -----------------------------------------------------------------------------------


// HACK: SeriesPoint is a [number, number] two-element Array with added
// data and index properties related to the data element which formed the basis for the
// SeriesPoint
export interface SeriesPoint<Datum> extends Array<number> {
    index: number;
    data: Datum;
}

export interface Series<Datum, Key> extends Array<SeriesPoint<Datum>> {
    key: Key;
}

export interface Stack<Datum, Key> {
    (data: Array<Datum>, ...args: any[]): Array<Series<Datum, Key>>;

    keys(): (this: any, data: Array<Datum>, ...args: any[]) => Array<Key>;
    keys(keys: Array<Key>): Stack<Datum, Key>;
    keys(keys: (this: any, data: Array<Datum>, ...args: any[]) => Array<Key>): Stack<Datum, Key>;

    value(): (d: Datum, key: Key, j?: number, data?: Array<Datum>) => number;
    value(value: number): Stack<Datum, Key>;
    value(value: (d: Datum, key: Key, j?: number, data?: Array<Datum>) => number): Stack<Datum, Key>;

    order(): (series: Series<Datum, Key>) => Array<number>;
    order(order: Array<number>): Stack<Datum, Key>;
    order(order: (series: Series<Datum, Key>) => Array<number>): Stack<Datum, Key>;

    offset(): (series: Series<Datum, Key>, order: Array<number>) => void;
    offset(offset: null): Stack<Datum, Key>;
    offset(offset: (series: Series<Datum, Key>, order: Array<number>) => void): Stack<Datum, Key>;

}

export function stack(): Stack<{ [key: string]: number }, string>;
export function stack<Datum>(): Stack<Datum, string>;
export function stack<Datum, Key>(): Stack<Datum, Key>;


export function stackOrderAscending(series: Series<any, any>): Array<number>;
export function stackOrderDescending(series: Series<any, any>): Array<number>
export function stackOrderInsideOut(series: Series<any, any>): Array<number>
export function stackOrderNone(series: Series<any, any>): Array<number>
export function stackOrderReverse(series: Series<any, any>): Array<number>

export function stackOffsetExpand(series: Series<any, any>, order: Array<number>): void;
export function stackOffsetNone(series: Series<any, any>, order: Array<number>): void;
export function stackOffsetSilhouette(series: Series<any, any>, order: Array<number>): void;
export function stackOffsetWiggle(series: Series<any, any>, order: Array<number>): void;
