/**
 * Typescript definition tests for d3/d3-transition module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import {
    selection,
    select,
    selectAll,
    Selection
}  from '../../src/d3-selection';

import * as d3Transition from '../../src/d3-transition';
import {
    interpolateRgb
} from '../../src/d3-interpolate';

// ---------------------------------------------------------------------------------------
// Some preparatory work for definition testing below
// ---------------------------------------------------------------------------------------

interface SVGDatum {
    width: number;
    height: number;
}

interface CircleDatum {
    nodeId: string;
    name: string;
    label: string;
    cx: number;
    cy: number;
    r: number;
    color: string;
}

let dimensions: SVGDatum = {
    width: 500,
    height: 300
};

let startCircleData: Array<CircleDatum>,
    endCircleData: Array<CircleDatum>;

// --------------------------------------------------------------------------
// Tests of plain selections
// --------------------------------------------------------------------------

// Setup selection for transition testing and test that 'standard' selection properties are
// working unaffected by module augmentation of Selection by d3-transition

let circles: Selection<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;

circles = select<SVGSVGElement, any>('svg')
    .datum(dimensions)
    .attr('width', function (d) { return d.width; })
    .attr('height', function (d) { return d.height; })
    .selectAll()
    .data(startCircleData)
    .enter()
    .append<SVGCircleElement>('circle')
    .attr('cx', function (d) { return d.cx; })
    .attr('cy', function (d) { return d.cy; })
    .attr('r', function (d) { return d.r; })
    .style('stroke', function (d) { return d.color; })
    .style('fill', function (d) { return d.color; });

circles = circles
    .data(endCircleData, function (d) { return d.nodeId; });

let enterCircles = circles
    .enter()
    .append<SVGCircleElement>('circle')
    .classed('big', function(d) {return d.r > 10;})
    .attr('cx', function (d) { return d.cx; })
    .attr('cy', function (d) { return d.cy; })
    .attr('r', function (d) { return d.r; })
    .style('stroke', function (d) { return d.color; })
    .style('fill', function (d) { return d.color; });


let exitCircles = circles.exit<CircleDatum>(); // Note: need to re-type datum type, as the exit selection elements have the 'old data'

// --------------------------------------------------------------------------
// Create Transition from Selection
// --------------------------------------------------------------------------

let updateTransition: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>,
    enterTransition: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>,
    exitTransition: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;

updateTransition = circles.transition('update');
enterTransition = enterCircles.transition('enter');
exitTransition = exitCircles.transition('exit');

// Test creation from existing transition

let newEnterTransition: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;
newEnterTransition = enterCircles.transition(enterTransition);

let wrongElementTypeTransition : d3Transition.Transition<HTMLDivElement, CircleDatum, HTMLBodyElement, any>;
let wrongDatumTypeTransition : d3Transition.Transition<SVGCircleElement, {wrong: string}, SVGSVGElement, any>;

newEnterTransition = enterCircles.transition(enterTransition);
// newEnterTransition = enterCircles.transition(wrongElementTypeTransition);// fails, wrong group element type
// newEnterTransition = enterCircles.transition(wrongDatumTypeTransition);// fails, wrong datum type

// --------------------------------------------------------------------------
// Test Transition Configuration (Timing)
// --------------------------------------------------------------------------

// duration() ---------------------------------------------------------------

enterTransition = enterTransition.duration(2000); // settable and chainable
let duration: number = enterTransition.duration();

// delay() ---------------------------------------------------------------

enterTransition = enterTransition.delay(500); // settable and chainable
let delay: number = enterTransition.delay();


// ease() ---------------------------------------------------------------

let easingFn:(normalizedTime: number) => number;

enterTransition = enterTransition.ease(function(t) {
    return t;
}); // settable and chainable
easingFn = enterTransition.ease();

// --------------------------------------------------------------------------
// Test sub-selection from transition
// --------------------------------------------------------------------------

// select() ------------------------------------------------------------------
// TODO: select()

// select<DescElement extends BaseType>(selector: string): Transition<DescElement, Datum, PElement, PDatum>;
// select<DescElement extends BaseType>(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => DescElement): Transition<DescElement, Datum, PElement, PDatum>;

// selectAll() ---------------------------------------------------------------
// TODO: selectAll()

// selectAll<DescElement extends BaseType, OldDatum>(selector: string): Transition<DescElement, OldDatum, GElement, Datum>;
// selectAll<DescElement extends BaseType, OldDatum>(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => (Array<DescElement> | NodeListOf<DescElement>)): Transition<DescElement, OldDatum, GElement, Datum>;

// filter () -----------------------------------------------------------------

enterTransition = enterTransition.filter('.big');

exitTransition = exitTransition.filter(function(d,i) {
    // console.log(this.x) // fails, x property not defined on SVGCircleElement
    return this.r.baseVal.value < i * d.r; // this-type SVGCircleElement, datum tpye CircleDatum
})

// --------------------------------------------------------------------------
// Obtain Selection underlying a transition
// --------------------------------------------------------------------------

circles = updateTransition.selection();

// --------------------------------------------------------------------------
// Test Modifying
// --------------------------------------------------------------------------

// Target Value Setting =====================================================

enterTransition = enterTransition // re-assignment test chaining return-type
    .attr('cx', 10) // number
    .attr('stroke', 'blue'); // string

enterTransition = enterTransition // re-assignment test chaining return-type
    .attr('cx', function (d, i, group) {
        console.log('Pre-change center x-coordinate: ', this.cx.baseVal.value); // this context SVGCircleElement
        if (group.length > 0) {
            console.log('Owner SVG Element of first group element:', group[0].ownerSVGElement); // group : Array<SVGCircleElement>
        }
        return d.cx; // numeric return value
    })
    .attr('stroke', function (d) {
        return d.color; // string return value
    });

enterTransition = enterTransition
    .style('fill', 'blue') // string
    .style('hidden', false) // boolean
    //.style('stroke', 'green', 'test') // fails, invalid priority value
    .style('stroke', 'green', 'important');

enterTransition = enterTransition
    .style('fill', function (d, i, group) {
        console.log('Client Rectangle Top: ', this.getBoundingClientRect().top); // this context SVGCircleElement
        if (group.length > 0) {
            console.log('Radius of first group element:', group[0].r.baseVal.value); // group : Array<SVGCircleElement>
        }
        return d.color; // string return value
    })
    .style('hidden', function () {
        return true;
    }, null) // boolean return + test: priority = null
     //   .style('stroke', function () { return 'green'; }, 'test') // fails, test: invalid priority value
    .style('stroke', function () { return 'green'; }, 'important'); // string return + test: priority = 'important';

select<HTMLBodyElement, {test: string}>('body')
    .datum({test: 'New text.'})
    .transition().duration(500)
    .text('Let us start with this transition text.')
    .transition().duration(100)
    .text(function(d){ return d.test; }); // selection datum type

// Tweening Function Use =====================================================

// TODO: complete

    // attrTween(name: string, tweenFn: (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => Primitive)): Transition<GElement, Datum, PElement, PDatum>;
    // styleTween(name: string, tweenFn: (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => Primitive)): Transition<GElement, Datum, PElement, PDatum>;

    // tween(name: string): (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => void);
    // tween(name: string, tweenFn: null): Transition<GElement, Datum, PElement, PDatum>;
    // tween(name: string, tweenFn: (this: GElement, datum?: Datum, i?: number, group?: GElement[] | NodeListOf<GElement>) => ((t: number) => void)): Transition<GElement, Datum, PElement, PDatum>;

// --------------------------------------------------------------------------
// Merge Transitions
// --------------------------------------------------------------------------

enterTransition = enterTransition.merge(updateTransition);
// enterTransition = enterTransition.merge(wrongElementTypeTransition); // fails, wrong group element type
// enterTransition = enterTransition.merge(wrongDatumTypeTransition); // fails, wrong datum type

// --------------------------------------------------------------------------
// Additional DOM Manipulation
// --------------------------------------------------------------------------

exitTransition.remove();

// --------------------------------------------------------------------------
// Test Event Handling
// --------------------------------------------------------------------------

// TODO: on()
    // on(type: string): (this: GElement, datum: Datum, index: number, group: Array<GElement> | NodeListOf<GElement>) => any;
    // on(type: string, listener: null): Transition<GElement, Datum, PElement, PDatum>;
    // on(type: string, listener: (this: GElement, datum: Datum, index: number, group: Array<GElement> | NodeListOf<GElement>) => any): Transition<GElement, Datum, PElement, PDatum>;

// --------------------------------------------------------------------------
// Test Control Flow
// --------------------------------------------------------------------------


// TODO: each(valueFn: (this: GElement, datum ?: Datum, index ?: number, group ?: Array<GElement> | NodeListOf<GElement>) => void): Transition<GElement, Datum, PElement, PDatum>;
    
    // each(valueFn: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => void): Transition<GElement, Datum, PElement, PDatum>;

// TODO: call(func: (transition: Transition<GElement, Datum, PElement, PDatum>, ...args: any[]) => any, ...args: any[]): Transition<GElement, Datum, PElement, PDatum>;

    // call(func: (transition: Transition<GElement, Datum, PElement, PDatum>, ...args: any[]) => any, ...args: any[]): Transition<GElement, Datum, PElement, PDatum>;

let empty: boolean = enterTransition.empty();

let firstCircleNode: SVGCircleElement = enterTransition.node();
let circleNodes: Array<SVGCircleElement>  = enterTransition.nodes();

let size: number = enterTransition.size();

// --------------------------------------------------------------------------
// Sequencing transitions on the same selection
// --------------------------------------------------------------------------

exitTransition = exitTransition
        .duration(200)
        .style('fill', 'red')
    .transition() // sequenced transition on exiting circles.
        .duration(1000)
        .attr('r', 0)
        .remove();
// --------------------------------------------------------------------------
// Tests of Top-Level Transition Functions
// --------------------------------------------------------------------------

// transition(...) ----------------------------------------------------------

let topTransition: d3Transition.Transition<HTMLElement, any, null, undefined>;
topTransition = d3Transition.transition('top');

// test creation from existing transition

newEnterTransition = d3Transition.transition(enterTransition);
// newEnterTransition = d3Transition.transition(wrongElementTypeTransition);// fails, wrong group element type
// newEnterTransition = d3Transition.transition(wrongDatumTypeTransition);// fails, wrong datum type


// active(...) ----------------------------------------------------------

let updateTransitionActive: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;

updateTransitionActive = d3Transition.active<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>(circles.nodes()[0], 'update');

// interrupt(...) ----------------------------------------------------------

d3Transition.interrupt(topTransition.selection().node());
d3Transition.interrupt(topTransition.selection().node(), 'top');