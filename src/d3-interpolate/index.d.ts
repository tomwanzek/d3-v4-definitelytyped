// Type definitions for d3JS d3-interpolate module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

import * as d3_color from '../d3-color';


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------


export interface ZoomInterpolationFn extends Function{
    (t: number): ZoomView;
    /**
     * Recommended duration of zoom transition in ms
     */
    duration: number;
}

export interface ColorGammaInterpolationFactory extends Function {
    (a: string | d3_color.ColorSpaceObject, b: string | d3_color.ColorSpaceObject): ((t: number) => string);
    gamma(g: number): ColorGammaInterpolationFactory;
}

/**
 * Type zoomView is used to represent a numeric array with three elements.
 * In order of appearance the elements correspond to:
 * - cx: x-coordinate of the center of the viewport
 * - cy: y-coordinate of the center of the viewport
 * - width: size of the viewport
 */
export type ZoomView = [number, number, number];

// --------------------------------------------------------------------------
// Interpolation Function Factories
// --------------------------------------------------------------------------

export function interpolate(a: any, b: null): ((t: number) => null);
export function interpolate(a: any, b: number): ((t: number) => number);
export function interpolate(a: any, b: d3_color.ColorSpaceObject): ((t: number) => string);
export function interpolate(a: any, b: string): ((t: number) => string);
export function interpolate<U>(a: any, b: Array<U>): ((t: number) => Array<U>);
export function interpolate(a: any, b: { [key: string]: any }): ((t: number) => { [key: string]: any });
export function interpolate<U extends Object>(a: any, b: U): ((t: number) => U);

export function interpolateNumber(a: number, b: number): ((t: number) => number);

export function interpolateRound(a: number, b: number): ((t: number) => number);

export function interpolateString(a: string, b: string): ((t: number) => string);

export function interpolateArray<U>(a: Array<any>, b: Array<U>): ((t: number) => Array<U>);

export function interpolateObject(a: { [key: string]: any }, b: { [key: string]: any }): ((t: number) => { [key: string]: any });
export function interpolateObject<U extends Object>(a: any, b: U): ((t: number) => U);


export function interpolateTransformCss(a: string, b: string): ((t: number) => string);
export function interpolateTransformSvg(a: string, b: string): ((t: number) => string);

/**
 * Create Interpolator for zoom views
 */
export function interpolateZoom(a: ZoomView, b: ZoomView): ZoomInterpolationFn;


export function quantize<T>(interpolator: ((t: number) => T), n :number): Array<T>;

// Color interpolation related

export var interpolateRgb: ColorGammaInterpolationFactory;

export function interpolateRgbBasis(colors: Array<string | d3_color.ColorSpaceObject>): ((t: number) => string);
export function interpolateRgbBasisClosed(colors: Array<string | d3_color.ColorSpaceObject>): ((t: number) => string);

export function interpolateHsl(a: string | d3_color.ColorSpaceObject, b: string | d3_color.ColorSpaceObject): ((t: number) => string);
export function interpolateHslLong(a: string | d3_color.ColorSpaceObject, b: string | d3_color.ColorSpaceObject): ((t: number) => string);
export function interpolateLab(a: string | d3_color.ColorSpaceObject, b: string | d3_color.ColorSpaceObject): ((t: number) => string);
export function interpolateHcl(a: string | d3_color.ColorSpaceObject, b: string | d3_color.ColorSpaceObject): ((t: number) => string);
export function interpolateHclLong(a: string | d3_color.ColorSpaceObject, b: string | d3_color.ColorSpaceObject): ((t: number) => string);
export var interpolateCubehelix: ColorGammaInterpolationFactory;
export var interpolateCubehelixLong: ColorGammaInterpolationFactory;

// Spline related

export function interpolateBasis(splineNodes: Array<number>): ((t: number) => number);
export function interpolateBasisClosed(splineNodes: Array<number>): ((t: number) => number);
