/**
 * Typescript definition tests for d3/d3-quadtree module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Quadtree from '../../src/d3-quadtree';

// TODO: Add definitions tests

let x: d3Quadtree.QuadtreeInternalNode<[{ x: number }, number]>;

function isLeaf(a: any): a is d3Quadtree.QuadtreeLeaf<any> {
    return a.data !== undefined;
}

