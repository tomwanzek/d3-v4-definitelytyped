/**
 * Typescript definition tests for d3/d3-scale module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Scale from '../../src/d3-scale';
import { interpolateCubehelix } from '../../src/d3-interpolate';
import { timeHour } from '../../src/d3-time';

// -------------------------------------------------------------------------------
// Preparatory Steps
// -------------------------------------------------------------------------------

class NumCoercible {
    public a: number;

    constructor(a: number) {
        this.a = a;
    }
    public valueOf() {
        return this.a;
    }
}
let num: number;
let str: string;
let date: Date;

let clampFlag: boolean;

let outputNumber: number;
let outputString: string;

let domainNumbers: Array<number>;
let domainNumeric: Array<NumCoercible>;
let domainStrings: Array<string>;
let domainDates: Array<Date>;

let ticksNumbers: Array<number>;
let ticksDates: Array<Date>;

let tickFormatNumberFn: ((d: number | { valueOf(): number }) => string);
let tickFormatDateFn: ((d: Date) => string);

let rangeNumbers: Array<number>;
let roundRangeNumbers: Array<number>;
let rangeStrings: Array<string>;


// -------------------------------------------------------------------------------
// Linear Scale Factory
// -------------------------------------------------------------------------------

// scaleLinear() -----------------------------------------------------------------

let linearScaleNumber: d3Scale.ScaleLinear<number, number>;
let linearScaleString: d3Scale.ScaleLinear<string, string>;
let linearScaleNumString: d3Scale.ScaleLinear<number, string>;

linearScaleNumber = d3Scale.scaleLinear();
linearScaleString = d3Scale.scaleLinear<string>();
linearScaleNumString = d3Scale.scaleLinear<number, string>();

// ScaleLinear Interface ========================================================

// domain(...) -----------------------------------------------------------------

linearScaleNumber = linearScaleNumber.domain(domainNumeric);
linearScaleNumber = linearScaleNumber.domain(domainNumbers);
domainNumbers = linearScaleNumber.domain();

linearScaleString = linearScaleString.domain(domainNumeric);
linearScaleString = linearScaleString.domain([10, 100]);
domainNumbers = linearScaleString.domain();

linearScaleNumString = linearScaleNumString.domain(domainNumeric);
linearScaleNumString = linearScaleNumString.domain(domainNumbers);
domainNumbers = linearScaleNumString.domain();


// range(...) -----------------------------------------------------------------

linearScaleNumber = linearScaleNumber.range(rangeNumbers);
rangeNumbers = linearScaleNumber.range();

linearScaleString = linearScaleString.range(['steelblue', 'brown']);
rangeStrings = linearScaleString.range();

linearScaleNumString = linearScaleNumString.range(rangeNumbers);
rangeNumbers = linearScaleNumString.range();

// invert(...) -----------------------------------------------------------------

num = linearScaleNumber.invert(500); // has number range, so inversion is possible
num = linearScaleNumber.invert(new NumCoercible(500)); // has number range, so inversion is possible

num = linearScaleNumString.invert(500); // has number range, so inversion is possible
num = linearScaleNumString.invert(new NumCoercible(500)); // has number range, so inversion is possible

// rangeRound(...) -----------------------------------------------------------------

linearScaleNumber = linearScaleNumber.rangeRound(roundRangeNumbers);

// clamp(...) -----------------------------------------------------------------

linearScaleNumber = linearScaleNumber.clamp(true);
clampFlag = linearScaleNumber.clamp();

// interpolate(...) -----------------------------------------------------------------

linearScaleString = linearScaleString.interpolate(interpolateCubehelix.gamma(3));

linearScaleNumString = linearScaleNumString.interpolate(function(a, b){
    // take two numbers
    return function(t: number) {
        return (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
    };
});

// nice(...) -----------------------------------------------------------------------


// chainable
linearScaleNumber = linearScaleNumber.nice();
linearScaleNumber = linearScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = linearScaleNumber.ticks();
ticksNumbers = linearScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = linearScaleNumber.tickFormat();
tickFormatNumberFn = linearScaleNumber.tickFormat(5);
tickFormatNumberFn = linearScaleNumber.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = linearScaleNumber(10);

outputString = linearScaleString(10);

outputString = linearScaleNumString(10);

// copy(...) -----------------------------------------------------------------

let copiedLinearScale: d3Scale.ScaleLinear<number, string> = linearScaleNumString.copy();

// -------------------------------------------------------------------------------
// Power Scale Factories
// -------------------------------------------------------------------------------

// scalePow() and scaleSqrt() ----------------------------------------------------

let powerScaleNumber: d3Scale.ScalePower<number, number>;
let powerScaleString: d3Scale.ScalePower<string, string>;
let powerScaleNumString: d3Scale.ScalePower<number, string>;

powerScaleNumber = d3Scale.scalePow();
powerScaleString = d3Scale.scalePow<string>();
powerScaleNumString = d3Scale.scalePow<number, string>();


let squarerootScaleNumber: d3Scale.ScalePower<number, number>;
let squarerootScaleString: d3Scale.ScalePower<string, string>;
let squarerootScaleNumString: d3Scale.ScalePower<number, string>;

squarerootScaleNumber = d3Scale.scaleSqrt();
squarerootScaleString = d3Scale.scaleSqrt<string>();
squarerootScaleNumString = d3Scale.scaleSqrt<number, string>();

// ScalePower Interface ========================================================

// exponent --------------------------------------------------------------------

let exponent: number = squarerootScaleNumber.exponent();

powerScaleNumber = powerScaleNumber.exponent(5);

// domain(...) -----------------------------------------------------------------

powerScaleNumber = powerScaleNumber.domain(domainNumeric);
powerScaleNumber = powerScaleNumber.domain(domainNumbers);
domainNumbers = powerScaleNumber.domain();

powerScaleString = powerScaleString.domain(domainNumeric);
powerScaleString = powerScaleString.domain([10, 100]);
domainNumbers = powerScaleString.domain();

powerScaleNumString = powerScaleNumString.domain(domainNumeric);
powerScaleNumString = powerScaleNumString.domain(domainNumbers);
domainNumbers = powerScaleNumString.domain();


// range(...) -----------------------------------------------------------------

powerScaleNumber = powerScaleNumber.range(rangeNumbers);
rangeNumbers = powerScaleNumber.range();

powerScaleString = powerScaleString.range(['steelblue', 'brown']);
rangeStrings = powerScaleString.range();

powerScaleNumString = powerScaleNumString.range(rangeNumbers);
rangeNumbers = powerScaleNumString.range();

// invert(...) -----------------------------------------------------------------

num = powerScaleNumber.invert(500); // has number range, so inversion is possible
num = powerScaleNumber.invert(new NumCoercible(500)); // has number range, so inversion is possible

num = powerScaleNumString.invert(500); // has number range, so inversion is possible
num = powerScaleNumString.invert(new NumCoercible(500)); // has number range, so inversion is possible

// rangeRound(...) -----------------------------------------------------------------

powerScaleNumber = powerScaleNumber.rangeRound(roundRangeNumbers);

// clamp(...) -----------------------------------------------------------------

powerScaleNumber = powerScaleNumber.clamp(true);
clampFlag = powerScaleNumber.clamp();

// interpolate(...) -----------------------------------------------------------------

powerScaleString = powerScaleString.interpolate(interpolateCubehelix.gamma(3));

powerScaleNumString = powerScaleNumString.interpolate(function(a, b){
    // take two numbers
    return function(t: number) {
        return (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
    };
});

// nice(...) -----------------------------------------------------------------------

// chainable
powerScaleNumber = powerScaleNumber.nice();
powerScaleNumber = powerScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = powerScaleNumber.ticks();
ticksNumbers = powerScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = powerScaleNumber.tickFormat();
tickFormatNumberFn = powerScaleNumber.tickFormat(5);
tickFormatNumberFn = powerScaleNumber.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = powerScaleNumber(10);

outputString = powerScaleString(10);

outputString = powerScaleNumString(10);

// copy(...) -----------------------------------------------------------------

let copiedPowerScale: d3Scale.ScalePower<number, string> = powerScaleNumString.copy();

// -------------------------------------------------------------------------------
// Logarithmic Scale Factory
// -------------------------------------------------------------------------------


// scaleLog() ---------------------------------------------------------------------

let logScaleNumber: d3Scale.ScaleLogarithmic<number, number>;
let logScaleString: d3Scale.ScaleLogarithmic<string, string>;
let logScaleNumString: d3Scale.ScaleLogarithmic<number, string>;

logScaleNumber = d3Scale.scaleLog();
logScaleString = d3Scale.scaleLog<string>();
logScaleNumString = d3Scale.scaleLog<number, string>();


// ScaleLogarithmic Interface ========================================================

// base --------------------------------------------------------------------

let base: number = logScaleNumber.base();

logScaleNumber = logScaleNumber.base(42);

// domain(...) -----------------------------------------------------------------

logScaleNumber = logScaleNumber.domain(domainNumeric);
logScaleNumber = logScaleNumber.domain(domainNumbers);
domainNumbers = logScaleNumber.domain();

logScaleString = logScaleString.domain(domainNumeric);
logScaleString = logScaleString.domain([10, 100]);
domainNumbers = logScaleString.domain();

logScaleNumString = logScaleNumString.domain(domainNumeric);
logScaleNumString = logScaleNumString.domain(domainNumbers);
domainNumbers = logScaleNumString.domain();


// range(...) -----------------------------------------------------------------

logScaleNumber = logScaleNumber.range(rangeNumbers);
rangeNumbers = logScaleNumber.range();

logScaleString = logScaleString.range(['steelblue', 'brown']);
rangeStrings = logScaleString.range();

logScaleNumString = logScaleNumString.range(rangeNumbers);
rangeNumbers = logScaleNumString.range();

// invert(...) -----------------------------------------------------------------

num = logScaleNumber.invert(500); // has number range, so inversion is possible
num = logScaleNumber.invert(new NumCoercible(500)); // has number range, so inversion is possible

num = logScaleNumString.invert(500); // has number range, so inversion is possible
num = logScaleNumString.invert(new NumCoercible(500)); // has number range, so inversion is possible

// rangeRound(...) -----------------------------------------------------------------

logScaleNumber = logScaleNumber.rangeRound(roundRangeNumbers);

// clamp(...) -----------------------------------------------------------------

logScaleNumber = logScaleNumber.clamp(true);
clampFlag = logScaleNumber.clamp();

// interpolate(...) -----------------------------------------------------------------

logScaleString = logScaleString.interpolate(interpolateCubehelix.gamma(3));

logScaleNumString = logScaleNumString.interpolate(function(a, b){
    // take two numbers
    return function(t: number) {
        return (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
    };
});

// nice(...) -----------------------------------------------------------------------

// chainable
logScaleNumber = logScaleNumber.nice();
logScaleNumber = logScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = logScaleNumber.ticks();
ticksNumbers = logScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = logScaleNumber.tickFormat();
tickFormatNumberFn = logScaleNumber.tickFormat(5);
tickFormatNumberFn = logScaleNumber.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = logScaleNumber(10);

outputString = logScaleString(10);

outputString = logScaleNumString(10);

// copy(...) -----------------------------------------------------------------

let copiedLogScale: d3Scale.ScaleLogarithmic<number, string> = logScaleNumString.copy();

// -------------------------------------------------------------------------------
// Identity Scale Factory
// -------------------------------------------------------------------------------

// scaleIdentity -----------------------------------------------------------------

let identityScale: d3Scale.ScaleIdentity;

identityScale = d3Scale.scaleIdentity();


// ScaleIdentity Interface ========================================================


// domain(...) -----------------------------------------------------------------

identityScale = identityScale.domain(domainNumeric);
identityScale = identityScale.domain(domainNumbers);
domainNumbers = identityScale.domain();

// range(...) -----------------------------------------------------------------

identityScale = identityScale.range(rangeNumbers);
rangeNumbers = identityScale.range();

// invert(...) -----------------------------------------------------------------

num = identityScale.invert(500); // has number range, so inversion is possible
num = identityScale.invert(new NumCoercible(500)); // has number range, so inversion is possible

// nice(...) -----------------------------------------------------------------------

// chainable
identityScale = identityScale.nice();
identityScale = identityScale.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = identityScale.ticks();
ticksNumbers = identityScale.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = identityScale.tickFormat();
tickFormatNumberFn = identityScale.tickFormat(5);
tickFormatNumberFn = identityScale.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = identityScale(10);


// copy(...) -----------------------------------------------------------------

let copiedIdentityScale: d3Scale.ScaleIdentity = identityScale.copy();


// -------------------------------------------------------------------------------
// Time Scale Factories
// -------------------------------------------------------------------------------

// scaleTime() and scaleUtc() ----------------------------------------------------

let localTimeScaleNumber: d3Scale.ScaleTime<number, number>;
let localTimeScaleString: d3Scale.ScaleTime<string, string>;
let localTimeScaleNumString: d3Scale.ScaleTime<number, string>;

localTimeScaleNumber = d3Scale.scaleTime();
localTimeScaleString = d3Scale.scaleTime<string>();
localTimeScaleNumString = d3Scale.scaleTime<number, string>();


let utcScaleNumber: d3Scale.ScaleTime<number, number>;
let utcScaleString: d3Scale.ScaleTime<string, string>;
let utcScaleNumString: d3Scale.ScaleTime<number, string>;

utcScaleNumber = d3Scale.scaleUtc();
utcScaleString = d3Scale.scaleUtc<string>();
utcScaleNumString = d3Scale.scaleUtc<number, string>();

// domain(...) -----------------------------------------------------------------

localTimeScaleNumber = localTimeScaleNumber.domain(domainDates);
domainDates = localTimeScaleNumber.domain();

localTimeScaleString = localTimeScaleString.domain([new Date(2016, 6, 1), new Date(2016, 6, 6)]);
domainDates = localTimeScaleString.domain();

localTimeScaleNumString = localTimeScaleNumString.domain(domainDates);
domainDates = localTimeScaleNumString.domain();


// range(...) -----------------------------------------------------------------

localTimeScaleNumber = localTimeScaleNumber.range(rangeNumbers);
rangeNumbers = localTimeScaleNumber.range();

localTimeScaleString = localTimeScaleString.range(['steelblue', 'brown']);
rangeStrings = localTimeScaleString.range();

localTimeScaleNumString = localTimeScaleNumString.range(rangeNumbers);
rangeNumbers = localTimeScaleNumString.range();

// invert(...) -----------------------------------------------------------------

date = localTimeScaleNumber.invert(500); // has number range, so inversion is possible
date = localTimeScaleNumber.invert(new NumCoercible(500)); // has number range, so inversion is possible

date = localTimeScaleNumString.invert(500); // has number range, so inversion is possible
date = localTimeScaleNumString.invert(new NumCoercible(500)); // has number range, so inversion is possible

// rangeRound(...) -----------------------------------------------------------------

localTimeScaleNumber = localTimeScaleNumber.rangeRound(roundRangeNumbers);

// clamp(...) -----------------------------------------------------------------

localTimeScaleNumber = localTimeScaleNumber.clamp(true);
clampFlag = localTimeScaleNumber.clamp();

// interpolate(...) -----------------------------------------------------------------

localTimeScaleString = localTimeScaleString.interpolate(interpolateCubehelix.gamma(3));

localTimeScaleNumString = localTimeScaleNumString.interpolate(function(a, b){
    // take two numbers
    return function(t: number) {
        return (a * (1 - t) + b * t) + 'px'; // a and b are numbers based on Range Type, return value of interpolator is string based on Output type
    };
});

// nice(...) -----------------------------------------------------------------------

// chainable
localTimeScaleNumber = localTimeScaleNumber.nice();
localTimeScaleNumber = localTimeScaleNumber.nice(5);
localTimeScaleNumber = localTimeScaleNumber.nice(timeHour);
localTimeScaleNumber = localTimeScaleNumber.nice(timeHour, 5);

// localTimeScaleNumber = localTimeScaleNumber.nice(timeHour.every(5)); // fails, requires CountableTimeInterval

// ticks(...) -----------------------------------------------------------------

ticksDates = localTimeScaleNumber.ticks();
ticksDates = localTimeScaleNumber.ticks(50);
ticksDates = localTimeScaleNumString.ticks(timeHour.every(5));

// tickFormat(...) -----------------------------------------------------------------

tickFormatDateFn = localTimeScaleNumber.tickFormat();
tickFormatDateFn = localTimeScaleNumber.tickFormat(50, '%I %p');
tickFormatDateFn = localTimeScaleNumber.tickFormat(timeHour.every(5), '%I %p');


// (...) value mapping from domain to output -----------------------------------

outputNumber = localTimeScaleNumber(new Date(2016, 6, 4));

outputString = localTimeScaleString(new Date(2016, 6, 4));

outputString = localTimeScaleNumString(new Date(2016, 6, 4));

// copy(...) -----------------------------------------------------------------

let copiedTimeScale: d3Scale.ScaleTime<number, string> = localTimeScaleNumString.copy();

// -------------------------------------------------------------------------------
// Sequential Scale Factory
// -------------------------------------------------------------------------------

// scaleSequential() -----------------------------------------------------------------

let sequentialScaleColorString: d3Scale.ScaleSequential<string>;

sequentialScaleColorString = d3Scale.scaleSequential<string>(d3Scale.interpolateRainbow);
sequentialScaleColorString = d3Scale.scaleSequential(d3Scale.interpolateCool); // inferred Output type string

// ScaleSequential Interface ========================================================

// domain(...) -----------------------------------------------------------------

sequentialScaleColorString = sequentialScaleColorString.domain([0, 1]);
sequentialScaleColorString = sequentialScaleColorString.domain([new NumCoercible(0), new NumCoercible(100)]);
let domainSequential: [number, number] = sequentialScaleColorString.domain();

// clamp(...) -----------------------------------------------------------------

sequentialScaleColorString = sequentialScaleColorString.clamp(true);
clampFlag = sequentialScaleColorString.clamp();

// interpolate(...) -----------------------------------------------------------------

sequentialScaleColorString = sequentialScaleColorString.interpolator(d3Scale.interpolateInferno);

let sequentialInterpolator: (t: number) => string;
sequentialInterpolator = sequentialScaleColorString.interpolator();

// (...) value mapping from domain to output -----------------------------------

outputString = sequentialScaleColorString(10);

// copy(...) -----------------------------------------------------------------

let copiedSequentialScale: d3Scale.ScaleSequential<string> = sequentialScaleColorString.copy();



// -------------------------------------------------------------------------------
// Color Interpolators for Sequential Scale Factory
// -------------------------------------------------------------------------------

let colorInterpolator: ((t: number) => string);

colorInterpolator = d3Scale.interpolateViridis;

colorInterpolator = d3Scale.interpolateMagma;

colorInterpolator = d3Scale.interpolateInferno;

colorInterpolator = d3Scale.interpolatePlasma;

colorInterpolator = d3Scale.interpolateRainbow;

colorInterpolator = d3Scale.interpolateWarm;

colorInterpolator = d3Scale.interpolateCool;

colorInterpolator = d3Scale.interpolateCubehelixDefault;


// -------------------------------------------------------------------------------
// Quantize Scale Factory
// -------------------------------------------------------------------------------

// scaleQuantize() -----------------------------------------------------------------

let quantizeScaleNumber: d3Scale.ScaleQuantize<number>;
let quantizeScaleString: d3Scale.ScaleQuantize<string>;

quantizeScaleNumber = d3Scale.scaleQuantize();
quantizeScaleString = d3Scale.scaleQuantize<string>();


// ScaleQuantize Interface ========================================================

// domain(...) -----------------------------------------------------------------

quantizeScaleNumber = quantizeScaleNumber.domain([0, 1]);
quantizeScaleNumber = quantizeScaleNumber.domain([new NumCoercible(0), new NumCoercible(100)]);
let domainQuantize: [number, number] = quantizeScaleNumber.domain();

// range(...) -----------------------------------------------------------------

quantizeScaleNumber = quantizeScaleNumber.range(rangeNumbers);
rangeNumbers = quantizeScaleNumber.range();

quantizeScaleString = quantizeScaleString.range(['steelblue', 'brown']);
rangeStrings = quantizeScaleString.range();


// invertExtent(...) -----------------------------------------------------------------

let numExtent: [number, number] = quantizeScaleNumber.invertExtent(500);

numExtent = quantizeScaleString.invertExtent('steelblue');

// nice(...) -----------------------------------------------------------------------

// chainable
quantizeScaleNumber = quantizeScaleNumber.nice();
quantizeScaleNumber = quantizeScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = quantizeScaleNumber.ticks();
ticksNumbers = quantizeScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

tickFormatNumberFn = quantizeScaleNumber.tickFormat();
tickFormatNumberFn = quantizeScaleNumber.tickFormat(5);
tickFormatNumberFn = quantizeScaleNumber.tickFormat(5, '+%');

// (...) value mapping from domain to output -----------------------------------

outputNumber = quantizeScaleNumber(0.51);

// copy(...) -----------------------------------------------------------------

let copiedQuantizeScale: d3Scale.ScaleQuantize<number> = quantizeScaleNumber.copy();


// -------------------------------------------------------------------------------
// Quantile Scale Factory
// -------------------------------------------------------------------------------


// scaleQuantile() -----------------------------------------------------------------

let quantileScaleNumber: d3Scale.ScaleQuantile<number>;
let quantileScaleString: d3Scale.ScaleQuantile<string>;

quantileScaleNumber = d3Scale.scaleQuantile();
quantileScaleString = d3Scale.scaleQuantile<string>();


// ScaleQuantile Interface ========================================================

// domain(...) -----------------------------------------------------------------

quantileScaleNumber = quantileScaleNumber.domain(domainNumbers);

domainNumbers = quantileScaleNumber.domain();

quantileScaleString = quantileScaleString.domain(domainNumeric);

// range(...) -----------------------------------------------------------------

quantileScaleNumber = quantileScaleNumber.range([1, 2, 3, 4]);
rangeNumbers = quantileScaleNumber.range();

quantileScaleString = quantileScaleString.range(['q25', 'q50', 'q75']);
rangeStrings = quantileScaleString.range();


// invertExtent(...) -----------------------------------------------------------------

numExtent = quantileScaleNumber.invertExtent(2);

numExtent = quantileScaleString.invertExtent('q50');

// quantile() -----------------------------------------------------------------------

let quantiles: Array<number> = quantileScaleNumber.quantiles();

// (...) value mapping from domain to output -----------------------------------

outputNumber = quantileScaleNumber(0.51);

// copy(...) -----------------------------------------------------------------

let copiedQuantileScale: d3Scale.ScaleQuantile<number> = quantileScaleNumber.copy();


// -------------------------------------------------------------------------------
// Threshold Scale Factory
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// Ordinal Scale Factory
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// Band Scale Factory
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// Point Scale Factory
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// Categorical Color Schemas for Ordinal Scales
// -------------------------------------------------------------------------------

let colorStrings: Array<string>;

colorStrings = d3Scale.schemeCategory10;

colorStrings = d3Scale.schemeCategory20;

colorStrings = d3Scale.schemeCategory20b;

colorStrings = d3Scale.schemeCategory20c;