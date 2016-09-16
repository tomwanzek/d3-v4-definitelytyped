/**
 * Typescript definition tests for d3/d3-scale-chromatic module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3ScaleChromatic from '../../src/d3-scale-chromatic';

// -----------------------------------------------------------------------
// Categorical
// -----------------------------------------------------------------------
let accent: string = d3ScaleChromatic.schemeAccent[0]; //#7fc97f
let dark: string = d3ScaleChromatic.schemeDark2[0]; //#1b9e77
let paired: string = d3ScaleChromatic.schemePaired[0]; //#a6cee3
let pastel1: string = d3ScaleChromatic.schemePastel1[0]; //#fbb4ae
let pastel2: string = d3ScaleChromatic.schemePastel2[0]; //#b3e2cd
let set1: string = d3ScaleChromatic.schemeSet1[0]; //#e41a1c
let set2: string = d3ScaleChromatic.schemeSet2[0]; //#66c2a5
let set3: string = d3ScaleChromatic.schemeSet3[0]; //#8dd3c7

// -----------------------------------------------------------------------
// Diverging
// -----------------------------------------------------------------------
let BrBG: string = d3ScaleChromatic.interpolateBrBG(0); //rgb(84, 48, 5)
let PRGn: string = d3ScaleChromatic.interpolatePRGn(0); //rgb(64, 0, 75)
let PiYG: string = d3ScaleChromatic.interpolatePiYG(0); //rgb(142, 1, 82)
let PuOr: string = d3ScaleChromatic.interpolatePuOr(0); //rgb(127, 59, 8)
let RdBu: string = d3ScaleChromatic.interpolateRdBu(0); //rgb(103, 0, 31)
let RdGy: string = d3ScaleChromatic.interpolateRdGy(0); //rgb(103, 0, 31)
let RdYlBu: string = d3ScaleChromatic.interpolateRdYlBu(0); //rgb(103, 0, 31)
let RdYlGn: string = d3ScaleChromatic.interpolateRdYlGn(0); //rgb(103, 0, 31)
let Spectral: string = d3ScaleChromatic.interpolateSpectral(0); //rgb(158, 1, 66)

