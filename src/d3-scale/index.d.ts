// Type definitions for d3JS d3-scale module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information


import * as d3_interpolate from '../d3-interpolate';
import * as d3_time from '../d3-time';

// -------------------------------------------------------------------------------
// Shared Types and Interfaces
// -------------------------------------------------------------------------------

/**
 * Administrivia: anything with a valueOf(): number method is comparable, so we allow it in numeric operations
 */
interface Numeric {
    valueOf(): number;
}

/**
 * Reference type things that can be coerced to string implicitely
 */
type Stringifiable = {
    toString(): string;
};

interface InterpolatorFactory<T, U> {
    (a: T, b: T): ((t: number) => U);
}


// -------------------------------------------------------------------------------
// Linear Scale Factory
// -------------------------------------------------------------------------------


interface ScaleLinear<Range, Output> {
    (value: Numeric): Output;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: Range): number;
    domain(): Array<number>;
    domain(domain: Array<Numeric>): ScaleLinear<Range, Output>;
    range(): Array<Range>;
    range(range: Array<Range>): ScaleLinear<Range, Output>;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric.
     */
    rangeRound(range: Array<Range>): ScaleLinear<Range, Output>;
    clamp(): boolean;
    clamp(clamp: boolean): ScaleLinear<Range, Output>;
    interpolate(): InterpolatorFactory<any, any>;
    interpolate(interpolate: InterpolatorFactory<Range, Output>): ScaleLinear<Range, Output>;
    interpolate<NewOutput>(interpolate: InterpolatorFactory<Range, NewOutput>): ScaleLinear<Range, NewOutput>;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: Numeric) => string);
    nice(count?: number): ScaleLinear<Range, Output>;
    copy(): ScaleLinear<Range, Output>;
}

export function scaleLinear(): ScaleLinear<number, number>;
export function scaleLinear<Output>(): ScaleLinear<Output, Output>;
export function scaleLinear<Range, Output>(): ScaleLinear<Range, Output>;

// -------------------------------------------------------------------------------
// Power Scale Factories
// -------------------------------------------------------------------------------


export interface ScalePower<Range, Output> {
    (value: Numeric): Output;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: Range): number;
    domain(): Array<number>;
    domain(domain: Array<Numeric>): ScalePower<Range, Output>;
    range(): Array<Range>;
    range(range: Array<Range>): ScalePower<Range, Output>;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric.
     */
    rangeRound(range: Array<Range>): ScalePower<Range, Output>;
    clamp(): boolean;
    clamp(clamp: boolean): ScalePower<Range, Output>;
    interpolate(): InterpolatorFactory<any, any>;
    interpolate(interpolate: InterpolatorFactory<Range, Output>): ScalePower<Range, Output>;
    interpolate<NewOutput>(interpolate: InterpolatorFactory<Range, NewOutput>): ScalePower<Range, NewOutput>;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: Numeric) => string);
    nice(count?: number): ScalePower<Range, Output>;
    copy(): ScalePower<Range, Output>;

    exponent(): number;
    exponent(exponent: number): ScalePower<Range, Output>;
}

export function scalePow(): ScalePower<number, number>;
export function scalePow<Output>(): ScalePower<Output, Output>;
export function scalePow<Range, Output>(): ScalePower<Range, Output>;

export function scaleSqrt(): ScalePower<number, number>;
export function scaleSqrt<Output>(): ScalePower<Output, Output>;
export function scaleSqrt<Range, Output>(): ScalePower<Range, Output>;

// -------------------------------------------------------------------------------
// Logarithmic Scale Factory
// -------------------------------------------------------------------------------


export interface ScaleLogarithmic<Range, Output> {
    (value: Numeric): Output;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: Range): number;
    domain(): Array<number>;
    domain(domain: Array<Numeric>): ScaleLogarithmic<Range, Output>;
    range(): Array<Range>;
    range(range: Array<Range>): ScaleLogarithmic<Range, Output>;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric.
     */
    rangeRound(range: Array<Range>): ScaleLogarithmic<Range, Output>;
    clamp(): boolean;
    clamp(clamp: boolean): ScaleLogarithmic<Range, Output>;
    interpolate(): InterpolatorFactory<any, any>;
    interpolate(interpolate: InterpolatorFactory<Range, Output>): ScaleLogarithmic<Range, Output>;
    interpolate<NewOutput>(interpolate: InterpolatorFactory<Range, NewOutput>): ScaleLogarithmic<Range, NewOutput>;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: Numeric) => string);
    nice(count?: number): ScaleLogarithmic<Range, Output>;
    copy(): ScaleLogarithmic<Range, Output>;

    base(): number;
    base(base: number): ScaleLogarithmic<Range, Output>;
}

export function scaleLog(): ScaleLogarithmic<number, number>;
export function scaleLog<Output>(): ScaleLogarithmic<Output, Output>;
export function scaleLog<Range, Output>(): ScaleLogarithmic<Range, Output>;

// -------------------------------------------------------------------------------
// Identity Scale Factory
// -------------------------------------------------------------------------------


interface ScaleIdentity {
    (value: Numeric): number;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: Numeric): number;
    domain(): Array<Numeric>;
    domain(domain: Array<Numeric>): ScaleIdentity;
    range(): Array<Range>;
    range(range: Array<Range>): ScaleIdentity;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: Numeric) => string);
    nice(count?: number): ScaleIdentity;
    copy(): ScaleIdentity;
}

export function scaleIdentity(): ScaleIdentity;


// -------------------------------------------------------------------------------
// Time Scale Factories
// -------------------------------------------------------------------------------

interface ScaleTime<Range, Output> {
    (value: Date): Output;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: Range): Date;
    domain(): Array<Date>;
    domain(domain: Array<Date>): ScaleTime<Range, Output>;
    range(): Array<Range>;
    range(range: Array<Range>): ScaleTime<Range, Output>;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric.
     */
    rangeRound(range: Array<Range>): ScaleTime<Range, Output>;
    clamp(): boolean;
    clamp(clamp: boolean): ScaleTime<Range, Output>;
    interpolate(): InterpolatorFactory<any, any>;
    interpolate(interpolate: InterpolatorFactory<Range, Output>): ScaleTime<Range, Output>;
    interpolate<NewOutput>(interpolate: InterpolatorFactory<Range, NewOutput>): ScaleTime<Range, NewOutput>;
    ticks(count?: number): Array<Date>;
    ticks(interval?: d3_time.CountableTimeInterval, step?: number): Array<Date>;
    tickFormat(count?: number, specifier?: string): ((d: Date) => string);
    nice(count?: number): ScaleTime<Range, Output>;
    nice(interval?: d3_time.CountableTimeInterval, step?: number): ScaleTime<Range, Output>;
    copy(): ScaleTime<Range, Output>;
}

export function scaleTime(): ScaleTime<number, number>;
export function scaleTime<Output>(): ScaleTime<Output, Output>;
export function scaleTime<Range, Output>(): ScaleTime<Range, Output>;

export function scaleUtc(): ScaleTime<number, number>;
export function scaleUtc<Output>(): ScaleTime<Output, Output>;
export function scaleUtc<Range, Output>(): ScaleTime<Range, Output>;

// -------------------------------------------------------------------------------
// Sequential Scale Factory
// -------------------------------------------------------------------------------


interface ScaleSequential<Output> {
    (value: number): Output;
    domain(): Array<number>;
    domain(domain: Array<number>): ScaleSequential<Output>;
    clamp(): boolean;
    clamp(clamp: boolean): ScaleSequential<Output>;
    interpolator(): ((t: number) => Output);
    interpolator(interpolator: ((t: number) => Output)): ScaleSequential<Output>;
    interpolator<NewOutput>(interpolator: ((t: number) => NewOutput)): ScaleSequential<NewOutput>;
    copy(): ScaleSequential<Output>;
}

export function scaleSequential<Output>(interpolator: ((t: number) => Output)): ScaleSequential<Output>;

// -------------------------------------------------------------------------------
// Color Interpolators for Sequential Scale Factory
// -------------------------------------------------------------------------------


export function interpolateViridis(): ((t: number) => string);

export function interpolateMagma(): ((t: number) => string);

export function interpolateInferno(): ((t: number) => string);

export function interpolatePlasma(): ((t: number) => string);

export function interpolateRainbow(): ((t: number) => string);

export function interpolateWarm(): ((t: number) => string);

export function interpolateCool(): ((t: number) => string);

export function interpolateCubehelixDefault(): ((t: number) => string);

// -------------------------------------------------------------------------------
// Quantize Scale Factory
// -------------------------------------------------------------------------------

interface ScaleQuantize<Range> {
    (value: Numeric): Range;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invertExtent(value: Range): [number, number];
    domain(): [number, number];
    domain(domain: [Numeric, Numeric]): ScaleQuantize<Range>;
    range(): Array<Range>;
    range(range: Array<Range>): ScaleQuantize<Range>;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: Numeric) => string);
    nice(): ScaleQuantize<Range>;
    copy(): ScaleQuantize<Range>;
}

export function scaleQuantize(): ScaleQuantize<number>;
export function scaleQuantize<Range>(): ScaleQuantize<Range>;

// -------------------------------------------------------------------------------
// Quantile Scale Factory
// -------------------------------------------------------------------------------

interface ScaleQuantile<Range> {
    (value: Numeric): Range;
    invertExtent(value: Range): [number, number];
    domain(): Array<number>;
    domain(domain: Array<Numeric>): ScaleQuantile<Range>;
    range(): Array<Range>;
    range(range: Array<Range>): ScaleQuantile<Range>;
    quantiles(): Array<number>;
    copy(): ScaleQuantile<Range>;
}

export function scaleQuantile(): ScaleQuantile<number>;
export function scaleQuantile<Range>(): ScaleQuantile<Range>;

// -------------------------------------------------------------------------------
// Threshold Scale Factory
// -------------------------------------------------------------------------------

interface ScaleThreshold<Range> {
    (value: Numeric): Range;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invertExtent(value: Range): [number, number];
    domain(): [number, number];
    domain(domain: [Numeric, Numeric]): ScaleThreshold<Range>;
    range(): Array<Range>;
    range(range: Array<Range>): ScaleThreshold<Range>;
    copy(): ScaleThreshold<Range>;
}

export function scaleThreshold(): ScaleThreshold<number>;
export function scaleThreshold<Range>(): ScaleThreshold<Range>;

// -------------------------------------------------------------------------------
// Ordinal Scale Factory
// -------------------------------------------------------------------------------


interface ScaleOrdinal<Domain extends Stringifiable, Range> {
    (x: Domain): Range;
    domain(): Array<Domain>;
    domain(domain: Array<Domain>): ScaleOrdinal<Domain, Range>;
    range(): Array<Range>;
    range(range: Array<Range>): ScaleOrdinal<Domain, Range>;
    unknown(): Range | { name: 'implicit' };
    unknown(value: Range | { name: 'implicit' }): ScaleOrdinal<Domain, Range>;
}

export function scaleOrdinal<Range>(range?: Range): ScaleOrdinal<string, Range>;
export function scaleOrdinal<Domain extends Stringifiable, Range>(range?: Range): ScaleOrdinal<Domain, Range>;

export const scaleImplicit: { name: 'implicit' };


// -------------------------------------------------------------------------------
// Band Scale Factory
// -------------------------------------------------------------------------------

interface ScaleBand<Domain extends Stringifiable> {
    (x: Domain): number | undefined;
    domain(): Array<Domain>;
    domain(domain: Array<Domain>): ScaleBand<Domain>;
    range(): [number, number];
    range(range: [Numeric, Numeric]): ScaleBand<Domain>;
    rangeRound(range: [Numeric, Numeric]): ScaleBand<Domain>;
    round(): boolean;
    round(round: boolean): ScaleBand<Domain>;
    paddingInner(): number;
    paddingInner(padding: number): ScaleBand<Domain>;
    paddingOuter(): number;
    paddingOuter(padding: number): ScaleBand<Domain>;
    /**
     * Returns the inner padding.
     */
    padding(): number;
    /**
     * A convenience method for setting the inner and outer padding to the same padding value.
     */
    padding(padding: number): ScaleBand<Domain>;
    align(): number;
    align(align: number): ScaleBand<Domain>;
    bandwidth(): number;
    step(): number;
    copy(): ScaleBand<Domain>;
}

export function scaleBand(): ScaleBand<string>;
export function scaleBand<Domain extends Stringifiable>(): ScaleBand<Domain>;

// -------------------------------------------------------------------------------
// Point Scale Factory
// -------------------------------------------------------------------------------

interface ScalePoint<Domain extends Stringifiable> {
    (x: Domain): number | undefined;
    domain(): Array<Domain>;
    domain(domain: Array<Domain>): ScalePoint<Domain>;
    range(): [number, number];
    range(range: [Numeric, Numeric]): ScalePoint<Domain>;
    rangeRound(range: [Numeric, Numeric]): ScalePoint<Domain>;
    round(): boolean;
    round(round: boolean): ScalePoint<Domain>;
    /**
     * Returns the current outer padding which defaults to 0.
     * The outer padding determines the ratio of the range that is reserved for blank space
     * before the first point and after the last point.
     */
    padding(): number;
    /**
     * Sets the outer padding to the specified value which must be in the range [0, 1]. 
     * The outer padding determines the ratio of the range that is reserved for blank space
     * before the first point and after the last point.
     */
    padding(padding: number): ScalePoint<Domain>;
    align(): number;
    align(align: number): ScalePoint<Domain>;
    bandwidth(): number;
    step(): number;
    copy(): ScalePoint<Domain>;
}

export function scalePoint(): ScalePoint<string>;
export function scalePoint<Domain extends Stringifiable>(): ScalePoint<Domain>;


// -------------------------------------------------------------------------------
// Categorical Color Schemas for Ordinal Scales
// -------------------------------------------------------------------------------

export const schemeCategory10: Array<string>;

export const schemeCategory20: Array<string>;

export const schemeCategory20b: Array<string>;

export const schemeCategory20c: Array<string>;
