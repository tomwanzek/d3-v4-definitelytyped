/**
 * Typescript definition tests for d3/d3-scale module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Scale from '../../src/d3-scale';
import { interpolateCubehelix } from '../../src/d3-interpolate';

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

let tickFormatNumberFn: ((d: number | { valueOf(): number }) => string);

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
linearScaleNumber = linearScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = linearScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

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
powerScaleNumber = powerScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = powerScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

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


// scaleLog() and scaleSqrt() ----------------------------------------------------

let logScaleNumber: d3Scale.ScaleLogarithmic<number, number>;
let logScaleString: d3Scale.ScaleLogarithmic<string, string>;
let logScaleNumString: d3Scale.ScaleLogarithmic<number, string>;

logScaleNumber = d3Scale.scaleLog();
logScaleString = d3Scale.scaleLog<string>();
logScaleNumString = d3Scale.scaleLog<number, string>();


// ScaleLogarithmic Interface ========================================================

// exponent --------------------------------------------------------------------

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
logScaleNumber = logScaleNumber.nice(5);

// ticks(...) -----------------------------------------------------------------

ticksNumbers = logScaleNumber.ticks(5);

// tickFormat(...) -----------------------------------------------------------------

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


// -------------------------------------------------------------------------------
// Time Scale Factories
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// Sequential Scale Factory
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// Color Interpolators for Sequential Scale Factory
// -------------------------------------------------------------------------------

let colorInterpolator: ((t: number) => string);

colorInterpolator = d3Scale.interpolateViridis();

colorInterpolator = d3Scale.interpolateMagma();

colorInterpolator = d3Scale.interpolateInferno();

colorInterpolator = d3Scale.interpolatePlasma();

colorInterpolator = d3Scale.interpolateRainbow();

colorInterpolator = d3Scale.interpolateWarm();

colorInterpolator = d3Scale.interpolateCool();

colorInterpolator = d3Scale.interpolateCubehelixDefault();


// -------------------------------------------------------------------------------
// Quantize Scale Factory
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// Quantile Scale Factory
// -------------------------------------------------------------------------------


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