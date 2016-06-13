// Type definitions for d3JS d3-time module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information
// TODO: Explanatory comments for exports

// ---------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------

export interface Interval {
    (date: Date): Date;
    floor(date: Date): Date;
    round(date: Date): Date;
    ceil(date: Date): Date;
    offset(date: Date, step?: number): Date;
    range(start: Date, stop: Date, step?: number): Date[];
    filter(test: (date: Date) => boolean): Interval;
}

export interface CountableInterval extends Interval{
    count(start: Date, end: Date): number;
    every(step: number): Interval | null;
}

// ---------------------------------------------------------------
// Custom (Countable)Interval Factories
// ---------------------------------------------------------------

export function timeInterval(
    floor: (date: Date) => Date,
    offset: (date: Date, step: number) => Date,
): Interval;

export function timeInterval(
    floor: (date: Date) => Date,
    offset: (date: Date, step: number) => Date,
    count: (start: Date, end: Date) => number,
    field?: (date: Date) => number
): CountableInterval;

// ---------------------------------------------------------------
// Built-In Factories and Date Array Creators
// ---------------------------------------------------------------


// time ----------------------------------------------------------

export var timeMillisecond: CountableInterval;
export function timeMilliseconds(start: Date, stop: Date, step?: number): Date[];

export var timeSecond: CountableInterval;
export function timeSeconds(start: Date, stop: Date, step?: number): Date[];

export var timeMinute: CountableInterval;
export function timeMinutes(start: Date, stop: Date, step?: number): Date[];

export var timeHour: CountableInterval;
export function timeHours(start: Date, stop: Date, step?: number): Date[];

export var timeDay: CountableInterval;
export function timeDays(start: Date, stop: Date, step?: number): Date[];

export var timeWeek: CountableInterval;
export function timeWeeks(start: Date, stop: Date, step?: number): Date[];

export var timeSunday: CountableInterval;
export function timeSundays(start: Date, stop: Date, step?: number): Date[];
export var timeMonday: CountableInterval;
export function timeMondays(start: Date, stop: Date, step?: number): Date[];
export var timeTuesday: CountableInterval;
export function timeTuesdays(start: Date, stop: Date, step?: number): Date[];
export var timeWednesday: CountableInterval;
export function timeWednesdays(start: Date, stop: Date, step?: number): Date[];
export var timeThursday: CountableInterval;
export function timeThursdays(start: Date, stop: Date, step?: number): Date[];
export var timeFriday: CountableInterval;
export function timeFridays(start: Date, stop: Date, step?: number): Date[];
export var timeSaturday: CountableInterval;
export function timeSaturdays(start: Date, stop: Date, step?: number): Date[];

export var timeMonth: CountableInterval;
export function timeMonths(start: Date, stop: Date, step?: number): Date[];

export var timeYear: CountableInterval;
export function timeYears(start: Date, stop: Date, step?: number): Date[];


// utc ----------------------------------------------------------

export var utcMillisecond: CountableInterval;
export function utcMilliseconds(start: Date, stop: Date, step?: number): Date[];

export var utcSecond: CountableInterval;
export function utcSeconds(start: Date, stop: Date, step?: number): Date[];

export var utcMinute: CountableInterval;
export function utcMinutes(start: Date, stop: Date, step?: number): Date[];

export var utcHour: CountableInterval;
export function utcHours(start: Date, stop: Date, step?: number): Date[];

export var utcDay: CountableInterval;
export function utcDays(start: Date, stop: Date, step?: number): Date[];

export var utcWeek: CountableInterval;
export function utcWeeks(start: Date, stop: Date, step?: number): Date[];

export var utcSunday: CountableInterval;
export function utcSundays(start: Date, stop: Date, step?: number): Date[];
export var utcMonday: CountableInterval;
export function utcMondays(start: Date, stop: Date, step?: number): Date[];
export var utcTuesday: CountableInterval;
export function utcTuesdays(start: Date, stop: Date, step?: number): Date[];
export var utcWednesday: CountableInterval;
export function utcWednesdays(start: Date, stop: Date, step?: number): Date[];
export var utcThursday: CountableInterval;
export function utcThursdays(start: Date, stop: Date, step?: number): Date[];
export var utcFriday: CountableInterval;
export function utcFridays(start: Date, stop: Date, step?: number): Date[];
export var utcSaturday: CountableInterval;
export function utcSaturdays(start: Date, stop: Date, step?: number): Date[];

export var utcMonth: CountableInterval;
export function utcMonths(start: Date, stop: Date, step?: number): Date[];

export var utcYear: CountableInterval;
export function utcYears(start: Date, stop: Date, step?: number): Date[];
