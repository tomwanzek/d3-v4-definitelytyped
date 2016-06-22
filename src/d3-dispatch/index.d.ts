// Type definitions for d3JS d3-dispatch module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information



export interface Dispatch<T extends EventTarget> {
    apply(type: string, that?: T, args?: any[]): void;
    call(type: string, that?: T, ...args: any[]): void;
    copy(): Dispatch<T>;

    on(typenames: string): (this: T, ...args: any[]) => void;
    on(typenames: string, callback: null): Dispatch<T>;
    on(typenames: string, callback: (this: T, ...args: any[]) => void): Dispatch<T>;    
}

export function dispatch<T extends EventTarget>(...types: string[]): Dispatch<T>;