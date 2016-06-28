/**
 * Typescript definition tests for d3/d3-hierarchy module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Hierarchy from '../../src/d3-hierarchy';

// TODO: Add definitions tests


// -----------------------------------------------------------------------
// Pack Siblings and Enclosure
// -----------------------------------------------------------------------

interface CircleData extends d3Hierarchy.PackCircle{
    v: string;
}

let circles : Array<CircleData> = [
    {r: 10, v: 'a'},
    {r: 1, v: 'b'},
    {r: 20, v: 'c'}
];

// packSiblings

circles = d3Hierarchy.packSiblings(circles);

// packEnclose

let enclosure: {r: number, x: number, y: number};

enclosure = d3Hierarchy.packEnclose(circles);