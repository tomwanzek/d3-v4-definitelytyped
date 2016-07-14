declare module '~d3-request/index' {
    export interface Request {
        csv(url: string): this;
        csv<T>(url: string, callback: (error: any, d: T) => void): this;


        header(name: string): string;
        header(name: string, value: string): this;

        json(url: string): this;
        json<T>(url: string, callback: (error: any, d: T) => void): this;

        get(): this;
        get<T>(data: T): this;
        get<T>(data: T, callback: (error: any, d: T) => void): this;

        send(method: string): this;
        send(method: string, data: any): this;
        send(method: string, data: any, callback: (error: any, d: any) => void): this;


    }

    export function json(url: string): Request;
    export function json<T>(url: string, callback: (error: any, d: T) => void): Request;
}


declare module 'd3-request/index' {
    export * from '~d3-request/index';
}
declare module 'd3-request' {
    export * from '~d3-request/index';
}