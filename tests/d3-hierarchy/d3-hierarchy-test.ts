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
let size: [number, number];
let idString: string;

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

let hierarchyPointNodeArray: Array<d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>>;
let hierarchyPointNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;

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

idString = hierarchyRootNode.id;

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

hierarchyRootNode = hierarchyRootNode.each(function (node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

hierarchyRootNode = hierarchyRootNode.eachAfter(function (node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

hierarchyRootNode = hierarchyRootNode.eachBefore(function (node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

// copy() --------------------------------------------------------------------

let copiedHierarchyNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;
copiedHierarchyNode = hierarchyRootNode.copy();

// -----------------------------------------------------------------------
// Stratify
// -----------------------------------------------------------------------

interface HierarchyDatumWithParentId extends HierarchyDatum {
    parentId: string;
}

interface TabularHierarchyDatum {
    name: string;
    parentId: string;
    val: number;
}

let tabularData: Array<TabularHierarchyDatum>;
tabularData = [
    { name: 'n0', parentId: null, val: 10 },
    { name: 'n11', parentId: 'n0', val: 5 },
    { name: 'n12', parentId: 'n0', val: 4 },
    { name: 'n121', parentId: 'n12', val: 30 }
];

let idStringAccessor: (d: TabularHierarchyDatum, i?: number, data?: Array<TabularHierarchyDatum>) => (string | null | '' | undefined);

// Create Stratify Operator  ---------------------------------------------

let stratificatorizer: d3Hierarchy.StratifyOperator<TabularHierarchyDatum>;
stratificatorizer = d3Hierarchy.stratify<TabularHierarchyDatum>();

// Configure Stratify Operator  ------------------------------------------

// id(...)

stratificatorizer = stratificatorizer.id(function(d, i, data) {
    console.log('Length of tabular array: ', data.length);
    console.log('Name of first entry in tabular array: ', data[0].name); // data of type Array<TabularHierarchyDatum>
    return d.name; // d is of type TabularHierarchyDatum
});

idStringAccessor = stratificatorizer.id();

// parentId(...)

stratificatorizer = stratificatorizer.parentId(function(d, i, data) {
    console.log('Length of tabular array: ', data.length);
    console.log('Name of first entry in tabular array: ', data[0].name); // data of type Array<TabularHierarchyDatum>
    return d.parentId; // d is of type TabularHierarchyDatum
});

idStringAccessor = stratificatorizer.parentId();

// Use Stratify Operator  ------------------------------------------------

let stratifiedRootNode: d3Hierarchy.HierarchyNode<HierarchyDatumWithParentId> = stratificatorizer(tabularData);

// -----------------------------------------------------------------------
// Cluster
// -----------------------------------------------------------------------

// Create cluster layout generator =======================================

let clusterLayout: d3Hierarchy.ClusterLayout<HierarchyDatumWithParentId>;

clusterLayout = d3Hierarchy.cluster<HierarchyDatumWithParentId>();

// Configure cluster layout generator ====================================

// size() ----------------------------------------------------------------

clusterLayout = clusterLayout.size(null);
clusterLayout = clusterLayout.size([200, 200]);

size = clusterLayout.size();

// nodeSize() ------------------------------------------------------------

clusterLayout = clusterLayout.nodeSize(null);
clusterLayout = clusterLayout.nodeSize([10, 10]);
size = clusterLayout.nodeSize();

// separation() ----------------------------------------------------------

clusterLayout = clusterLayout.separation(function separation(a, b) {
  return a.data.parentId === b.data.parentId ? 1 : 2; // a and b are nodes of type HierarchyPointNode<HierarchyDatumWithParentId>
});

let separationAccessor: (a: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>, b: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>) => number;
separationAccessor = clusterLayout.separation();

// Use cluster layout generator ==========================================

let clusterRootNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;

clusterRootNode = clusterLayout(stratifiedRootNode);

// Use HierarchyPointNode ================================================

// x and y coordinates ---------------------------------------------------

num = clusterRootNode.x;
num = clusterRootNode.y;

// data, depth, height ---------------------------------------------------

let clusterDatum: HierarchyDatumWithParentId = clusterRootNode.data;
num = clusterRootNode.depth;
num = clusterRootNode.height;

// children, parent ------------------------------------------------------


hierarchyPointNodeArray = clusterRootNode.children;

let parentPointNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;
parentPointNode = hierarchyPointNodeArray.length ? hierarchyPointNodeArray[0].parent : null;

// id --------------------------------------------------------------------

idString = clusterRootNode.id;

// ancestors(), descendants() --------------------------------------------

let pointNodeAncestors: Array<d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>> = clusterRootNode.ancestors();
let pointNodeDescendants: Array<d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>> = clusterRootNode.descendants();

// leaves() ---------------------------------------------------------------

hierarchyPointNodeArray = clusterRootNode.leaves();

// path() -------------------------------------------------------------------

hierarchyPointNode = pointNodeDescendants[pointNodeDescendants.length - 1];

let clusterPath: Array<d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>> = clusterRootNode.path(hierarchyPointNode);

// links() and HierarchyPointLink<...> ------------------------------------------

let pointLinks: Array<d3Hierarchy.HierarchyPointLink<HierarchyDatumWithParentId>>;

pointLinks = clusterRootNode.links();

let pointLink: d3Hierarchy.HierarchyPointLink<HierarchyDatumWithParentId>;
pointLink = pointLinks[0];

hierarchyPointNode = pointLink.source;
hierarchyPointNode = pointLink.target;

// sum() and value ----------------------------------------------------------

clusterRootNode = clusterRootNode.sum(function (d) { return d.val; });

num = clusterRootNode.value;

// sort ---------------------------------------------------------------------

clusterRootNode = clusterRootNode.sort(function (a, b) {
    console.log(' x-coordinates of a:', a.x, ' and b:', b.x); // a and b are of type HierarchyPointNode<HierarchyDatumWithParentId>
    console.log(' Raw values in data of a and b:', a.data.val, ' and ', b.data.val); // a and b are of type HierarchyPointNode<HierarchyDatumWithParentId>
    return b.height - a.height || b.value - a.value;
});

// each(), eachAfter(), eachBefore() ----------------------------------------

clusterRootNode = clusterRootNode.each(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
    console.log('X-coordinate of node:', node.x); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
});

clusterRootNode = clusterRootNode.eachAfter(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
    console.log('X-coordinate of node:', node.x); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
});

clusterRootNode = clusterRootNode.eachBefore(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
    console.log('X-coordinate of node:', node.x); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
});

// copy() --------------------------------------------------------------------

let copiedClusterNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;
copiedClusterNode = clusterRootNode.copy();

// -----------------------------------------------------------------------
// Tree
// -----------------------------------------------------------------------

// Create tree layout generator =======================================

let treeLayout: d3Hierarchy.TreeLayout<HierarchyDatumWithParentId>;

treeLayout = d3Hierarchy.tree<HierarchyDatumWithParentId>();

// Configure tree layout generator ====================================

// size() ----------------------------------------------------------------

treeLayout = treeLayout.size(null);
treeLayout = treeLayout.size([200, 200]);

size = treeLayout.size();

// nodeSize() ------------------------------------------------------------

treeLayout = treeLayout.nodeSize(null);
treeLayout = treeLayout.nodeSize([10, 10]);
size = treeLayout.nodeSize();

// separation() ----------------------------------------------------------

treeLayout = treeLayout.separation(function separation(a, b) {
  return a.data.parentId === b.data.parentId ? 1 : 2; // a and b are nodes of type HierarchyPointNode<HierarchyDatumWithParentId>
});

separationAccessor = treeLayout.separation();

// Use cluster layout generator ==========================================

let treeRootNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;

treeRootNode = treeLayout(stratifiedRootNode);

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