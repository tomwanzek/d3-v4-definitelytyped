// Type definitions for d3JS d3-axis module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

// TODO: Clarify dependencies, axis relies on d3-selection (and optionally d3-transition)
import { Selection } from '../d3-selection';
import { Transition } from '../d3-transition';


// --------------------------------------------------------------------------
// Shared Types and Interfaces
// --------------------------------------------------------------------------


/**
 * An interface to which a scale passed into axis must conform (at a minimum)
 * for axis to use the scale without error
 */
export interface AxisScale<Domain> {
    (x: Domain): number;
    domain(): Array<Domain>;
    range(): Array<number>;
    copy(): AxisScale<Domain>;
    bandwidth?(): number;
    ticks?(count?: number): Array<number> | Array<Date>;
    tickFormat?(count?: number, specifier?: string): ((d: number) => string) | ((d: Date) => string);
}


export type AxisContainerElement = SVGSVGElement | SVGGElement;

export interface Axis<Domain> {
    (context: Selection<AxisContainerElement, any, any, any>): void;
    (context: Transition<AxisContainerElement, any, any, any>): void;

    scale(): AxisScale<Domain>;
    scale(scale: AxisScale<Domain>): Axis<Domain>;
    ticks(...args: any[]): Axis<Domain>;
    tickArguments(): any[];
    tickArguments(args: any[]): Axis<Domain>;
    tickValues(): Domain[] | null;
    tickValues(values: Domain[]): Axis<Domain>;
    tickValues(values: null): Axis<Domain>;
    tickFormat(format: (domainValue: Domain) => string): Axis<Domain>;
    tickSize(): number;
    tickSize(size: number): Axis<Domain>;
    tickSizeInner(): number;
    tickSizeInner(size: number): Axis<Domain>;
    tickSizeOuter(): number;
    tickSizeOuter(size: number): Axis<Domain>;
    tickPadding(): number;
    tickPadding(padding: number): Axis<Domain>;

}

export function axisTop<Domain>(scale: AxisScale<Domain>): Axis<Domain>;
export function axisRight<Domain>(scale: AxisScale<Domain>): Axis<Domain>;
export function axisBottom<Domain>(scale: AxisScale<Domain>): Axis<Domain>;
export function axisLeft<Domain>(scale: AxisScale<Domain>): Axis<Domain>;