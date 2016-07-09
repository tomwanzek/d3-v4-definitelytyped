/**
 * Typescript definition tests for d3/d3-shape module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Shape from '../../src/d3-shape';

// -----------------------------------------------------------------------------------
// Preparatory Steps (General)
// -----------------------------------------------------------------------------------

let context: CanvasRenderingContext2D;
let num: number;
let pathString: string;

// -----------------------------------------------------------------------------------
// Test Arc Generator
// -----------------------------------------------------------------------------------

interface ArcDatum {
    iRadius: number;
    oRadius: number;
    sAngle: number;
    eAngle: number;
    pAngle: number;
}

let arcDefaultDatum: d3Shape.DefaultArcObject = {
    innerRadius: 40,
    outerRadius: 60,
    startAngle: 0,
    endAngle: Math.PI / 2,
    padAngle: 0.03
};

let arcDatum: ArcDatum = {
    iRadius: 40,
    oRadius: 60,
    sAngle: 0,
    eAngle: Math.PI / 2,
    pAngle: 0.03
};

let accessorArcDatumNumber: (this: any, d: ArcDatum, ...args: any[]) => number;

// DefaultArcObject interface ========================================================

let defaultArcObject: d3Shape.DefaultArcObject;

num = defaultArcObject.innerRadius;
num = defaultArcObject.outerRadius;
num = defaultArcObject.startAngle;
num = defaultArcObject.endAngle;
num = defaultArcObject.padAngle;

// arc(...) create Arc generator =====================================================

let defaultArc: d3Shape.Arc<d3Shape.DefaultArcObject> = d3Shape.arc();
let arc: d3Shape.Arc<ArcDatum> = d3Shape.arc<ArcDatum>();

// configure Arc(...) generator ======================================================

// context(...) ----------------------------------------------------------------------

defaultArc = defaultArc.context(context); // draw to canvas
context = defaultArc.context();

arc = arc.context(null); // use as path string generator for SVG

// innerRadius(...) -------------------------------------------------------------------

defaultArc = defaultArc.innerRadius(40);

arc = arc.innerRadius(function (d) {
    return d.iRadius; // datum type is ArcDatum
});
accessorArcDatumNumber = arc.innerRadius();

// outerRadius(...) --------------------------------------------------------------------

defaultArc = defaultArc.outerRadius(60);

arc = arc.outerRadius(function (d) {
    return d.oRadius; // datum type is ArcDatum
});
accessorArcDatumNumber = arc.outerRadius();

// cornerRadius(...) ------------------------------------------------------------------

defaultArc = defaultArc.cornerRadius(4);

arc = arc.cornerRadius(function (d) {
    return d.oRadius / 10; // datum type is ArcDatum
});
accessorArcDatumNumber = arc.cornerRadius();

// startAngle(...) --------------------------------------------------------------------

defaultArc = defaultArc.startAngle(0);

arc = arc.startAngle(function (d) {
    return d.sAngle; // datum type is ArcDatum
});
accessorArcDatumNumber = arc.startAngle();

// endAngle(...) ----------------------------------------------------------------------

defaultArc = defaultArc.endAngle(Math.PI / 2);

arc = arc.endAngle(function (d) {
    return d.eAngle; // datum type is ArcDatum
});
accessorArcDatumNumber = arc.endAngle();

// padAngle(...) ----------------------------------------------------------------------

defaultArc = defaultArc.padAngle(0);

arc = arc.padAngle(function (d) {
    return d.pAngle; // datum type is ArcDatum
});
accessorArcDatumNumber = arc.padAngle();

// use Arc(...) generator ============================================================

// centroid(...) ---------------------------------------------------------------------

let centroid: [number, number] = arc.centroid(arcDatum);
// centroid = arc.centroid(arcDefaultDatum); // fails, wrong datum type

// generate arc ----------------------------------------------------------------------

defaultArc(arcDefaultDatum);

pathString = arc(arcDatum);

// -----------------------------------------------------------------------------------
// Test Pie Generator
// -----------------------------------------------------------------------------------

interface PieDatum {
    val: number;
    name: string;
}


let accessorPieDatumNumber: (this: any, data: Array<PieDatum>, ...args: any[]) => number;

// PieArcDatum interface =============================================================


let pieArcObject: d3Shape.PieArcDatum<PieDatum>;

let pieDatum: PieDatum = pieArcObject.data;
num = pieArcObject.value;
num = pieArcObject.index;
num = pieArcObject.startAngle;
num = pieArcObject.endAngle;
num = pieArcObject.padAngle;

// pie(...) create Pie generator =====================================================

let defaultPie: d3Shape.Pie<number | { valueOf(): number }> = d3Shape.pie();

let pie: d3Shape.Pie<PieDatum> = d3Shape.pie<PieDatum>();

// configure Pie(...) generator ======================================================

// value(...) -------------------------------------------------------------------------

let defaultPieValueAccessor: (d: number | { valueOf(): number }, i?: number, data?: Array<number | { valueOf(): number }>) => number;

defaultPie = defaultPie.value(10);

defaultPieValueAccessor = defaultPie.value();

let pieValueAccessor: (d: PieDatum, i?: number, data?: Array<PieDatum>) => number;

pie = pie.value(function(d, i, data) {
    console.log(data.length > 0 ? data[0].val : 'no data'); // data type is Array<PieDatum>
    return d.val; // d type is PieDatum
});

pieValueAccessor = pie.value();


// sort(...) ---------------------------------------------------------------------------

let pieSorter: ((a: PieDatum, b: PieDatum) => number) | null;

pie = pie.sort(function (a, b) {
    return  b.val - a.val; // type of a and b is PieDatum
});

pieSorter = pie.sort();

pie = pie.sort(null);

// sortValues(...) ---------------------------------------------------------------------

let pieValuesSorter: ((a: number, b: number) => number) | null;

pie = pie.sortValues(function (a, b) {
    return  b - a; // type of a and b is number
});

pieValuesSorter = pie.sortValues();

pie = pie.sortValues(null);

// startAngle(...) --------------------------------------------------------------------

defaultPie = defaultPie.startAngle(0);

pie = pie.startAngle(function (d) {
    console.log(d.length > 0 ? d[0].val : 'no data'); // data type is Array<PieDatum>
    return 0;
});
accessorPieDatumNumber = pie.startAngle();

// endAngle(...) ----------------------------------------------------------------------

defaultPie = defaultPie.endAngle(2 * Math.PI);

pie = pie.endAngle(function (d) {
    console.log(d.length > 0 ? d[0].val : 'no data'); // data type is Array<PieDatum>
    return 2 * Math.PI;
});
accessorPieDatumNumber = pie.endAngle();

// padAngle(...) ----------------------------------------------------------------------

defaultPie = defaultPie.padAngle(0.03);

pie = pie.padAngle(function (d) {
    console.log(d.length > 0 ? d[0].val : 'no data'); // data type is Array<PieDatum>
    return 0.03;

});
accessorPieDatumNumber = pie.padAngle();

// use Pie(...) generator ============================================================

let defaultPieChart: Array<d3Shape.PieArcDatum<number | { valueOf(): number }>>;

defaultPieChart  = defaultPie([20, 10, 30, 40]);

let pieData: Array<PieDatum> = [
    {name: 'John',  val: 20},
    {name: 'Jill',  val: 10},
    {name: 'Rodrigo',  val: 30}
];
let pieChart: Array<d3Shape.PieArcDatum<PieDatum>>;

pieChart = pie(pieData);


// -----------------------------------------------------------------------------------
// Test Line Generators
// -----------------------------------------------------------------------------------

interface LineDatum {
    x: number;
    y: number;
    missing: boolean;
}

let lineXYAccessorFn: (d: LineDatum, index?: number, data?: Array<LineDatum>) => number;
let lineDefAccessorFn: (d: LineDatum, index?: number, data?: Array<LineDatum>) => boolean;

interface RadialLineDatum {
    angle: number;
    radius: number;
    missing: boolean;
}

let radialLineAngRAccessorFn: (d: RadialLineDatum, index?: number, data?: Array<RadialLineDatum>) => number;
let radialLineDefAccessorFn: (d: RadialLineDatum, index?: number, data?: Array<RadialLineDatum>) => boolean;

// line(...) create Line generator =====================================================

let defaultLine: d3Shape.Line<[number, number]> = d3Shape.line();
let line: d3Shape.Line<LineDatum> = d3Shape.line<LineDatum>();

// configure Line(...) generator ======================================================

// context(...) ----------------------------------------------------------------------

defaultLine = defaultLine.context(context); // draw to canvas
context = defaultLine.context();

line = line.context(null); // use as path string generator for SVG

// x(...) ----------------------------------------------------------------------------

defaultLine = defaultLine.x(30);

line = line.x(function(d, t, data) {
    console.log('Number of Points: ', data.length);
    console.log('X-Coordinate of first point: ', data[0].x); // data type is Array<LineDatum>
    return d.x; // d type is LineDatum
});

lineXYAccessorFn = line.x();

// y(...) ----------------------------------------------------------------------------

defaultLine = defaultLine.y(10);

line = line.y(function(d, t, data) {
    console.log('Number of Points: ', data.length);
    console.log('Y-Coordinate of first point: ', data[0].y); // data type is Array<LineDatum>
    return d.y; // d type is LineDatum
});

lineXYAccessorFn = line.y();

// defined(...) ----------------------------------------------------------------------

defaultLine = defaultLine.defined(true);

line = line.defined(function(d, t, data) {
    console.log('Number of Points: ', data.length);
    console.log('Y-Coordinate of first point: ', data[0].y); // data type is Array<LineDatum>
    return !d.missing; // d type is LineDatum
});

lineDefAccessorFn = line.defined();

// curve(...) ------------------------------------------------------------------------

defaultLine = defaultLine.curve(d3Shape.curveLinear);

line = line.curve(d3Shape.curveBundle.beta(0.5));

let currentCurveFactory: d3Shape.CurveFactory | d3Shape.CurveFactoryLineOnly = line.curve();

// use Line generator ===============================================================

defaultLine([[10, 10], [20, 10], [20, 20]]);

let lineData: Array<LineDatum> = [
    {x: 10, y: 10, missing: false},
    {x: 20, y: 10, missing: false},
    {x: 20, y: 20, missing: false}
];

let linePathString: string = line(lineData);

// radialLine(...) create Line generator =====================================================

let defaultRadialLine: d3Shape.RadialLine<[number, number]> = d3Shape.radialLine();
let radialLine: d3Shape.RadialLine<RadialLineDatum> = d3Shape.radialLine<RadialLineDatum>();

// configure RadialLine(...) generator ======================================================

// context(...) ----------------------------------------------------------------------

defaultRadialLine = defaultRadialLine.context(context); // draw to canvas
context = defaultRadialLine.context();

radialLine = radialLine.context(null); // use as path string generator for SVG

// angle(...) ----------------------------------------------------------------------------

defaultRadialLine = defaultRadialLine.angle(Math.PI);

radialLine = radialLine.angle(function(d, t, data) {
    console.log('Number of Points: ', data.length);
    console.log('Angle of first point: ', data[0].angle); // data type is Array<RadialLineDatum>
    return d.angle; // d type is RadialLineDatum
});

radialLineAngRAccessorFn = radialLine.angle();

// radius(...) ----------------------------------------------------------------------------

defaultRadialLine = defaultRadialLine.radius(30);

radialLine = radialLine.radius(function(d, t, data) {
    console.log('Number of Points: ', data.length);
    console.log('Angle of first point: ', data[0].angle); // data type is Array<RadialLineDatum>
    return d.radius; // d type is RadialLineDatum
});

radialLineAngRAccessorFn = radialLine.radius();

// defined(...) ----------------------------------------------------------------------

defaultRadialLine = defaultRadialLine.defined(true);

radialLine = radialLine.defined(function(d, t, data) {
    console.log('Number of Points: ', data.length);
    console.log('Angle of first point: ', data[0].angle); // data type is Array<RadialLineDatum>
    return !d.missing; // d type is RadialLineDatum
});

radialLineDefAccessorFn = radialLine.defined();

// curve(...) ------------------------------------------------------------------------

defaultRadialLine = defaultRadialLine.curve(d3Shape.curveLinear);

radialLine = radialLine.curve(d3Shape.curveBundle.beta(0.5));

currentCurveFactory = radialLine.curve();

// use RadialLine generator ===============================================================

defaultRadialLine([[10, 10], [20, 10], [20, 20]]);

let radialLineData: Array<RadialLineDatum> = [
    {angle: 0, radius: 10, missing: false},
    {angle: Math.PI / 2, radius: 20, missing: false},
    {angle: 2 * Math.PI, radius: 10, missing: false}
];

let radialLinePathString: string = radialLine(radialLineData);


// -----------------------------------------------------------------------------------
// Test Area Generators
// -----------------------------------------------------------------------------------

// TODO: complete

// -----------------------------------------------------------------------------------
// Test Curve Factories
// -----------------------------------------------------------------------------------

// Test General interfaces -----------------------------------------------------------

let lineOnlyGenerator: d3Shape.CurveGeneratorLineOnly;

let lineOnlyFactory: d3Shape.CurveFactoryLineOnly;

lineOnlyGenerator = lineOnlyFactory(null);
lineOnlyGenerator = lineOnlyFactory(context);

lineOnlyGenerator.lineStart();
lineOnlyGenerator.lineEnd();
lineOnlyGenerator.point(10, 20);

let curveGenerator: d3Shape.CurveGenerator;

let curveFactory: d3Shape.CurveFactory;

curveGenerator = curveFactory(null);
curveGenerator = curveFactory(context);

curveGenerator.lineStart();
curveGenerator.lineEnd();
curveGenerator.point(10, 20);
curveGenerator.areaStart();
curveGenerator.areaEnd();

// Test factories --------------------------------------------------------------------

curveFactory = d3Shape.curveBasis;
curveFactory = d3Shape.curveBasisOpen;
curveFactory = d3Shape.curveBasisClosed;

let curveBundleFactory: d3Shape.CurveBundleFactory;

curveBundleFactory = d3Shape.curveBundle;
curveBundleFactory = d3Shape.curveBundle.beta(0.5);

lineOnlyGenerator = d3Shape.curveBundle.beta(0.5)(context);
// curveGenerator = d3Shape.curveBundle.beta(0.5)(context); // fails, no area related methods

let curveCardinalFactory: d3Shape.CurveCardinalFactory;

curveCardinalFactory = d3Shape.curveCardinal;
curveCardinalFactory = d3Shape.curveCardinal.tension(0.5);

curveGenerator = d3Shape.curveCardinal.tension(0.5)(context);

curveCardinalFactory = d3Shape.curveCardinalOpen;
curveCardinalFactory = d3Shape.curveCardinalOpen.tension(0.5);

curveGenerator = d3Shape.curveCardinalOpen.tension(0.5)(context);

curveCardinalFactory = d3Shape.curveCardinalClosed;
curveCardinalFactory = d3Shape.curveCardinalClosed.tension(0.5);

curveGenerator = d3Shape.curveCardinalClosed.tension(0.5)(context);

let curveCatmullRomFactory: d3Shape.CurveCatmullRomFactory;

curveCatmullRomFactory = d3Shape.curveCatmullRom;
curveCatmullRomFactory = d3Shape.curveCatmullRom.alpha(0.5);

curveGenerator = d3Shape.curveCatmullRom.alpha(0.5)(context);

curveCatmullRomFactory = d3Shape.curveCatmullRomOpen;
curveCatmullRomFactory = d3Shape.curveCatmullRomOpen.alpha(0.5);

curveGenerator = d3Shape.curveCatmullRomOpen.alpha(0.5)(context);

curveCatmullRomFactory = d3Shape.curveCatmullRomClosed;
curveCatmullRomFactory = d3Shape.curveCatmullRomClosed.alpha(0.5);

curveGenerator = d3Shape.curveCatmullRomClosed.alpha(0.5)(context);

curveFactory = d3Shape.curveLinear;

curveFactory = d3Shape.curveLinearClosed;

curveFactory = d3Shape.curveMonotoneX;

curveFactory = d3Shape.curveMonotoneY;

curveFactory = d3Shape.curveNatural;

curveFactory = d3Shape.curveStep;

curveFactory = d3Shape.stepAfter;

curveFactory = d3Shape.curveStepBefore;

// -----------------------------------------------------------------------------------
// Test Symbols
// -----------------------------------------------------------------------------------

// test interfaces -------------------------------------------------------------------



// -----------------------------------------------------------------------------------
// Test Stacks
// -----------------------------------------------------------------------------------

// TODO: complete