/**
 * Typescript definition tests for d3/d3-dispatch module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Dispatch from 'd3-dispatch';

// Preparation --------------------------------------------

interface Datum {
    a: number;
    b: string;
}

let dispatch: d3Dispatch.Dispatch,
    copy: d3Dispatch.Dispatch;

let cbFn: d3Dispatch.CallbackFn<HTMLElement>;


// Signature Tests ----------------------------------------

// create new dispatch object
dispatch = d3Dispatch.dispatch('foo', 'bar');


cbFn = function (this: HTMLElement, d: Datum, i: number) {
    console.log(this.baseURI ? this.baseURI : 'nada');
    console.log(d ? d.a : 'nada');
};

dispatch.on('foo', cbFn);
// dispatch.on<SVGElement>('foo', cb2); // test fails as this context type is mismatched

dispatch.on('bar', dispatch.on('bar'));

dispatch.call('foo');
dispatch.call('foo', document.body);
// dispatch.call<SVGElement>('foo', document.body); // test fails incompatible 'that' argument
dispatch.call('foo', document.body, { a: 3, b: 'test' }, 1);

dispatch.apply('bar');
dispatch.apply('bar', document.body);
// dispatch.apply<SVGElement>('bar', document.body); // test fails incompatible 'that' argument
dispatch.apply<HTMLElement>('bar', document.body, [{ a: 3, b: 'test' }, 1]);

dispatch.on('bar', null);

// Copy dispatch
copy = dispatch.copy();