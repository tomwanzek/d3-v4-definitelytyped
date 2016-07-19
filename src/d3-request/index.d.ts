export interface Request {
    abort(): this;

    get(): this;
    get<T>(data: T): this;
    get<U>(callback: (error: any, d: U) => void): this;
    get<T, U>(data: T, callback: (error: any, d: U) => void): this;

    header(name: string): string;
    header(name: string, value: null): this;
    header(name: string, value: string): this;

    mimeType(): string | null;
    mimeType(value: null): this;
    mimeType(value: string): this;

    on(type: 'beforesend' | 'progress' | 'load' | 'error'): (data: any) => void;

    password(): string | null;
    password(value: string): this;

    post(): this;
    post<T>(data: T): this;
    post<U>(callback: (error: any, d: U) => void): this;
    post<T, U>(data: T, callback: (error: any, d: U) => void): this;

    response<T>(callback: (data: XMLHttpRequest) => T): this;

    responseType(): string | null;
    responseType(value: string): this;

    send(method: string): this;
    send<T>(method: string, data: T): this;
    send<U>(method: string, callback: (error: any, d: U) => void): this;
    send<T, U>(method: string, data: T, callback: (error: any, d: U) => void): this;

    timeout(): number;
    timeout(value: number): this;

    user(): string | null;
    user(value: string): this;
}

export interface DsvRequest extends Request {
    row<T, U>(value: (d: T) => U): DsvRequest;
}

export function csv(url: string): DsvRequest;
export function csv<T>(url: string, callback: (error: any, d: T) => void): DsvRequest;
export function csv<T, U>(url: string, row: (d: T) => U, callback: (error: any, d: U) => void): DsvRequest;

export function html(url: string): Request;
export function html(url: string, callback: (error: any, d: DocumentFragment) => void): Request;

export function json(url: string): Request;
export function json<T>(url: string, callback: (error: any, d: T) => void): Request;

export function request(url: string): Request;
export function request<T>(url: string, callback: (error: any, d: T) => void): Request;

export function text(url: string): Request;
export function text(url: string, callback: (error: any, d: String) => void): Request;

export function tsv(url: string): DsvRequest;
export function tsv<T>(url: string, callback: (error: any, d: T) => void): DsvRequest;
export function tsv<T, U>(url: string, row: (d: T) => U, callback: (error: any, d: U) => void): DsvRequest;

export function xml(url: string): Request;
export function xml(url: string, callback: (error: any, d: any) => void): Request;