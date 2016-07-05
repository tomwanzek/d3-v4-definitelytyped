/**
 * Typescript definition tests for d3/d3-zoom module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Zoom from '../../src/d3-zoom';
import { select, Selection, event } from '../../src/d3-selection';
// import { Transition } from '../../src/d3-transition';


let canvas = select<HTMLCanvasElement, any>('canvas'),
    context = canvas.node().getContext('2d'),
    width = canvas.property('width'),
    height = canvas.property('height'),
    radius = 2.5;

let points: Array<[number, number]> = [
    [10, 10], [20, 20], [50, 50]
];

canvas.call(d3Zoom.zoom()
    .scaleExtent([1 / 2, 4])
    .on('zoom', zoomed));

drawPoints();

function zoomed() {
    // Cast d3 event to D3ZoomEvent to be used in zoom event handler
    let e = <d3Zoom.D3ZoomEvent<HTMLCanvasElement, any>>event;
    context.save();
    context.clearRect(0, 0, width, height);
    context.translate(e.transform.x, e.transform.y);
    context.scale(e.transform.k, e.transform.k);
    drawPoints();
    context.restore();
}

function drawPoints() {
    context.beginPath();
    points.forEach(drawPoint);
    context.fill();
}

function drawPoint(point: [number, number]) {
    context.moveTo(point[0] + radius, point[1]);
    context.arc(point[0], point[1], radius, 0, 2 * Math.PI);
}


// --------------------------------------------------------------------------
// Zoom Event
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// Test Zoom Transforms
// --------------------------------------------------------------------------




// zoomIdentity -------------------------------------------------------------

const z: d3Zoom.ZoomTransform = d3Zoom.zoomIdentity;



// **************************************************************************************

let svg = select<SVGSVGElement, undefined>('svg'),
    svgWidth = +svg.attr('width'),
    svgHeight = +svg.attr('height');


let g = svg.append<SVGGElement>('g');

g.selectAll()
    .data<[number, number]>(points)
  .enter().append<SVGCircleElement>('circle')
    .attr('cx', function(d) { return d[0]; })
    .attr('cy', function(d) { return d[1]; })
    .attr('r', 2.5);

svg.append<SVGRectElement>('rect')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .style('fill', 'none')
    .style('pointer-events', 'all')
    .call(d3Zoom.zoom()
        .scaleExtent([1 / 2, 4])
        .on('zoom', zoomedSVG));

function zoomedSVG() {
    // Cast d3 event to D3ZoomEvent to be used in zoom event handler
    let e = <d3Zoom.D3ZoomEvent<HTMLCanvasElement, any>>event;
  g.attr('transform', event.transform);
}
