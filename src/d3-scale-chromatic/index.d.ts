// Type definitions for D3JS d3-scale-chromatic module 1.0.2
// Project: https://github.com/d3/d3-scale-chromatic/
// Definitions by: Hugues Stefanski <https://github.com/Ledragon>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// -----------------------------------------------------------------------
// Categorical
// -----------------------------------------------------------------------
export const schemeAccent: Array<string>;
export const schemeDark2: Array<string>;
export const schemePaired: Array<string>;
export const schemePastel1: Array<string>;
export const schemePastel2: Array<string>;
export const schemeSet1: Array<string>;
export const schemeSet2: Array<string>;
export const schemeSet3: Array<string>;

// -----------------------------------------------------------------------
// Diverging
// -----------------------------------------------------------------------

/**Given a number value in the range [0,1], returns the corresponding color from the “BrBG” diverging color scheme represented as an RGB string. */
export function interpolateBrBG(value: number): string;

export function interpolateReds(value: number): string;
export function interpolateGreens(value: number): string;
export function interpolateBlues(value: number): string;
