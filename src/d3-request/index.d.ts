// Type definitions for D3JS d3-request module 1.0.1
// Project: https://github.com/d3/d3-request/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Hugues Stefanski <https://github.com/Ledragon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface Request {
    abort(): this;

    get(): this;
    get<RequestData>(data: RequestData): this;
    get<ResponseData>(callback: (error: any, d: ResponseData) => void): this;
    get<RequestData, ResponseData>(data: RequestData, callback: (error: any, d: ResponseData) => void): this;

    header(name: string): string;
    header(name: string, value: string | null): this;

    mimeType(): string | null;
    mimeType(value: string | null): this;

    on(type: 'beforesend' | 'progress' | 'load' | 'error' | string): (data: any) => void;
    on(type: 'beforesend' | 'progress' | 'load' | 'error' | string, listener: (data: any) => void): this;

    password(): string | null;
    password(value: string): this;

    post(): this;
    post<RequestData>(data: RequestData): this;
    post<ResponseData>(callback: (error: any, d: ResponseData) => void): this;
    post<RequestData, ResponseData>(data: RequestData, callback: (error: any, d: ResponseData) => void): this;

    response<ResponseData>(callback: (data: XMLHttpRequest) => ResponseData): this;

    responseType(): string | null;
    responseType(value: string): this;

    send(method: string): this;
    send<RequestData>(method: string, data: RequestData): this;
    send<ResponseData>(method: string, callback: (error: any | null, d: ResponseData | null) => void): this;
    send<RequestData, ResponseData>(method: string, data: RequestData, callback: (error: any | null, d: ResponseData | null) => void): this;

    timeout(): number;
    timeout(value: number): this;

    user(): string | null;
    user(value: string): this;
}

export interface DsvRequest extends Request {
    row<RequestData, ResponseData>(value: (d: RequestData) => ResponseData): DsvRequest;
}

export function csv(url: string): DsvRequest;
export function csv<ResponseData>(url: string, callback: (error: any, d: ResponseData[]) => void): DsvRequest;
export function csv<RequestData, ResponseData>(url: string, row: (d: RequestData) => ResponseData, callback: (error: any, d: ResponseData[]) => void): DsvRequest;

export function html(url: string): Request;
export function html(url: string, callback: (error: any, d: DocumentFragment) => void): Request;

export function json(url: string): Request;
export function json<RequestData>(url: string, callback: (error: any, d: RequestData) => void): Request;

export function request(url: string): Request;
export function request<RequestData>(url: string, callback: (error: any, d: RequestData) => void): Request;

export function text(url: string): Request;
export function text(url: string, callback: (error: any, d: string) => void): Request;

export function tsv(url: string): DsvRequest;
export function tsv<ResponseData>(url: string, callback: (error: any, d: ResponseData[]) => void): DsvRequest;
export function tsv<RequestData, ResponseData>(url: string, row: (d: RequestData) => ResponseData, callback: (error: any, d: ResponseData[]) => void): DsvRequest;

export function xml(url: string): Request;
export function xml(url: string, callback: (error: any, d: any) => void): Request;