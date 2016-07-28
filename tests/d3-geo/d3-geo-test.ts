/**
 * Typescript definition tests for d3/d3-geo module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

// TODO: uncomment below and add tests
import * as d3Geo from '../../src/d3-geo';
let distance: number = d3Geo.geoDistance([54, 2], [53, 1]);