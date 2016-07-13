/**
 * Typescript definition tests for d3/d3-hierarchy module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Hierarchy from '../../src/d3-hierarchy';


// -----------------------------------------------------------------------
// Preparatory Steps
// -----------------------------------------------------------------------

let num: number;

// -----------------------------------------------------------------------
// Hierarchy
// -----------------------------------------------------------------------

interface HierarchyDatum {
    name: string;
    val: number;
    children?: Array<HierarchyDatum>;
}

let hierarchyRootDatum: HierarchyDatum = {
    name: 'n0',
    val: 10,
    children: [
        {
            name: 'n11',
            val: 5
        },
        {
            name: 'n12',
            val: 4,
            children: [
                {
                    name: 'n121',
                    val: 30
                }
            ]
        }
    ]
};

let hierarchyNodeArray: Array<d3Hierarchy.HierarchyNode<HierarchyDatum>>;
let hierarchyNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;

// Create Hierarchy Layout Root Node =====================================

let hierarchyRootNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;

hierarchyRootNode = d3Hierarchy.hierarchy(hierarchyRootDatum);

hierarchyRootNode = d3Hierarchy.hierarchy(hierarchyRootDatum, function (d) {
    return d.children || null;
});

// Use Hierarchy Node ====================================================

// data, depth, height ---------------------------------------------------

hierarchyRootDatum = hierarchyRootNode.data;
num = hierarchyRootNode.depth;
num = hierarchyRootNode.height;

// children, parent ------------------------------------------------------


hierarchyNodeArray = hierarchyRootNode.children;

let parentNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;
parentNode = hierarchyNodeArray.length ? hierarchyNodeArray[0].parent : null;

// id --------------------------------------------------------------------

// TODO: complete

// ancestors(), descendants() --------------------------------------------

let ancestors: Array<d3Hierarchy.HierarchyNode<HierarchyDatum>> = hierarchyRootNode.ancestors();
let descendants: Array<d3Hierarchy.HierarchyNode<HierarchyDatum>> = hierarchyRootNode.descendants();

// leaves() ---------------------------------------------------------------

hierarchyNodeArray = hierarchyRootNode.leaves();

// path() -------------------------------------------------------------------

hierarchyNode = descendants[descendants.length - 1];

let path: Array<d3Hierarchy.HierarchyNode<HierarchyDatum>> = hierarchyRootNode.path(hierarchyNode);

// links() and HierarchyLink<...> ------------------------------------------

let links: Array<d3Hierarchy.HierarchyLink<HierarchyDatum>>;

links = hierarchyRootNode.links();

let link: d3Hierarchy.HierarchyLink<HierarchyDatum>;
link = links[0];

hierarchyNode = link.source;
hierarchyNode = link.target;

// sum() and value ----------------------------------------------------------

hierarchyRootNode = hierarchyRootNode.sum(function (d) { return d.val; });

num = hierarchyRootNode.value;

// sort ---------------------------------------------------------------------

hierarchyRootNode = hierarchyRootNode.sort(function (a, b) {
    console.log(' Raw values in data of a and b:', a.data.val, ' and ', b.data.val); // a and b are of type HierarchyNode<HierarchyDatum>
    return b.height - a.height || b.value - a.value;
});

// each(), eachAfter(), eachBefore() ----------------------------------------

hierarchyRootNode = hierarchyRootNode.each(function(node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

hierarchyRootNode = hierarchyRootNode.eachAfter(function(node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

hierarchyRootNode = hierarchyRootNode.eachBefore(function(node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

// copy() --------------------------------------------------------------------

let copiedHierarchyNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;
copiedHierarchyNode = hierarchyRootNode.copy();

// -----------------------------------------------------------------------
// Stratify
// -----------------------------------------------------------------------

// TODO: Complete

// -----------------------------------------------------------------------
// Cluster
// -----------------------------------------------------------------------

// TODO: Complete

// -----------------------------------------------------------------------
// Tree
// -----------------------------------------------------------------------

// TODO: Complete

// -----------------------------------------------------------------------
// Treemap
// -----------------------------------------------------------------------

// TODO: Complete

// Tiling functions ======================================================

// TODO: Complete

// -----------------------------------------------------------------------
// Partition
// -----------------------------------------------------------------------

// TODO: Complete

// -----------------------------------------------------------------------
// Pack
// -----------------------------------------------------------------------

// TODO: Complete

// -----------------------------------------------------------------------
// Pack Siblings and Enclosure
// -----------------------------------------------------------------------

interface CircleData extends d3Hierarchy.PackCircle {
    v: string;
}

let circles: Array<CircleData> = [
    { r: 10, v: 'a' },
    { r: 1, v: 'b' },
    { r: 20, v: 'c' }
];

// packSiblings

circles = d3Hierarchy.packSiblings(circles);

// packEnclose

let enclosure: { r: number, x: number, y: number };

enclosure = d3Hierarchy.packEnclose(circles);