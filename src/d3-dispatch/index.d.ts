// Type definitions for d3JS d3-dispatch module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information


interface CallbackFn<T> extends Function {
    (this: T, ...args: any[]): void;
}

export interface Dispatch {
    apply<T>(type: string, that?: T, args?: any[]): void;
    call<T>(type: string, that?: T, ...args: any[]): void;
    copy(): Dispatch;
    
    on<T>(typenames: string): CallbackFn<T>;
    on<T>(typenames: string, callback: CallbackFn<T> | null): Dispatch;
}

export function dispatch(...types: string[]): Dispatch;