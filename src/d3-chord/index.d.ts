// Type definitions for d3JS d3-chord module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

// ---------------------------------------------------------------------
// Chord
// ---------------------------------------------------------------------

export interface ChordSubgroup {
    startAngle: number;
    endAngle: number;
    value: number;
    index: number;
    subindex: number;
}

export interface Chord {
    source: ChordSubgroup;
    target: ChordSubgroup;
}

export interface ChordGroup {
    startAngle: number;
    endAngle: number;
    value: number;
    index: number;
}

export interface Chords extends Array<Chords> {
    groups: Array<ChordGroup>;
}

export interface ChordLayout {
    (matrix: number[][]): Chords;
    padAngle(): number;
    padAngle(angle: number): ChordLayout;
    sortGroups(): ((a: number, b: number) => number) | null;
    sortGroups(compare: null): ChordLayout;
    sortGroups(compare: (a: number, b: number) => number): ChordLayout;
    sortSubgroups(): ((a: number, b: number) => number) | null;
    sortSubgroups(compare: null): ChordLayout;
    sortSubgroups(compare: (a: number, b: number) => number): ChordLayout;
    sortChords(): ((a: number, b: number) => number) | null;
    sortChords(compare: null): ChordLayout;
    sortChords(compare: (a: number, b: number) => number): ChordLayout;
}

export function chord(): ChordLayout;

// ---------------------------------------------------------------------
// Ribbon
// ---------------------------------------------------------------------


export interface RibbonGenerator<Datum> {
    (d: Datum, ...args: any[]): string | void;
    source(): (this: any, d: Datum, ...args: any[]) => ChordSubgroup;
    source(source: (this: any, d: Datum, ...args: any[]) => ChordSubgroup): RibbonGenerator<Datum>;
    target(): (this: any, d: Datum, ...args: any[]) => ChordSubgroup;
    target(target: (this: any, d: Datum, ...args: any[]) => ChordSubgroup): RibbonGenerator<Datum>;
    radius(): (this: any, d: Datum, ...args: any[]) => number;
    radius(radius: (this: any, d: Datum, ...args: any[]) => number): RibbonGenerator<Datum>;
    startAngle(): (this: any, d: Datum, ...args: any[]) => number;
    startAngle(angle: (this: any, d: Datum, ...args: any[]) => number): RibbonGenerator<Datum>;
    endAngle(): (this: any, d: Datum, ...args: any[]) => number;
    endAngle(angle: (this: any, d: Datum, ...args: any[]) => number): RibbonGenerator<Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): RibbonGenerator<Datum>;
    context(context: null): RibbonGenerator<Datum>;
}

export function ribbon(): RibbonGenerator<Chord>;
export function ribbon<Datum>(): RibbonGenerator<Datum>;