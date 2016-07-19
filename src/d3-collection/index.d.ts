// Type definitions for D3JS d3-collection module
// Project: https://github.com/d3/d3-collection/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Reference type things that can be coerced to string implicitely
 */
type Stringifiable = {
    toString(): string;
};

// ---------------------------------------------------------------------
// Objects
// ---------------------------------------------------------------------

export function keys(object: { [key: string]: any }): Array<string>;
export function keys(object: Object): Array<string>;

export function values<T>(object: { [key: string]: T }): Array<T>;
export function values(object: Object): Array<any>;

export function entries<T>(object: { [key: string]: T }): Array<{ key: string, value: T }>;
export function entries(object: Object): Array<{ key: string, value: any }>;

// ---------------------------------------------------------------------
// map / Map
// ---------------------------------------------------------------------


export interface Map<T> {
    has(key: string): boolean;
    get(key: string): T | undefined;
    set(key: string, value: T): this;
    remove(key: string): boolean;
    clear(): void;
    keys(): Array<string>;
    values(): Array<T>;
    entries(): Array<{ key: string, value: T }>;
    each(func: (value: T, key: string, map: Map<T>) => void): void;
    empty(): boolean;
    size(): number;
}

export function map<T>(): Map<T>;
export function map<T>(d3Map: Map<T>): Map<T>;
export function map<T>(object: { [key: string]: T }): Map<T>;
export function map<T>(object: { [key: number]: T }): Map<T>;
export function map<T>(array: Array<T>, key?: (value: T, i?: number, array?: Array<T>) => string): Map<T>;
export function map(object: Object): Map<any>;

// ---------------------------------------------------------------------
// set / Set
// ---------------------------------------------------------------------


export interface Set {
    has(value: string | Stringifiable): boolean;
    add(value: string | Stringifiable): this;
    remove(value: string | Stringifiable): boolean;
    clear(): void;
    values(): Array<string>;
    /**
     * The first and second parameter of the function are both passed
     * the 'value' of the set entry for consistency with map.each(...)
     * signature
     */
    each(func: (value: string, valueRepeat: string, set: Set) => void): void;
    empty(): boolean;
    size(): number;
}


export function set(): Set;
export function set(d3Set: Set): Set;
export function set(array: Array<string | Stringifiable>): Set;
export function set<T>(array: Array<T>, key: (value: T, index?: number, array?: Array<T>) => string): Set;

// ---------------------------------------------------------------------
// nest / Nest
// ---------------------------------------------------------------------

interface Nest<T> {
    key(func: (datum: T) => string): Nest<T>;
    sortKeys(comparator: (a: string, b: string) => number): Nest<T>;
    sortValues(comparator: (a: T, b: T) => number): Nest<T>;
    rollup<U>(func: (values: T[]) => U): Nest<T>;
    map(array: T[]): Map<any>;
    object(array: T[]): { [key: string]: any};
    entries(array: T[]): { key: string; values: any }[];
}

export function nest<T>(): Nest<T>;
