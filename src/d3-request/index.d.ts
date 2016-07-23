export interface Request {
    abort(): this;

    get(): this;
    get<RequestType>(data: RequestType): this;
    get<ResponseType>(callback: (error: any, d: ResponseType) => void): this;
    get<RequestType, ResponseType>(data: RequestType, callback: (error: any, d: ResponseType) => void): this;

    header(name: string): string;
    header(name: string, value: string | null): this;

    mimeType(): string | null;
    mimeType(value: string | null): this;

    on(type: 'beforesend' | 'progress' | 'load' | 'error' | string): (data: any) => void;
    on(type: 'beforesend' | 'progress' | 'load' | 'error' | string, listener: (data: any) => void): this;

    password(): string | null;
    password(value: string): this;

    post(): this;
    post<RequestType>(data: RequestType): this;
    post<ResponseType>(callback: (error: any, d: ResponseType) => void): this;
    post<RequestType, ResponseType>(data: RequestType, callback: (error: any, d: ResponseType) => void): this;

    response<ResponseType>(callback: (data: XMLHttpRequest) => ResponseType): this;

    responseType(): string | null;
    responseType(value: string): this;

    send(method: string): this;
    send<RequestType>(method: string, data: RequestType): this;
    send<ResponseType>(method: string, callback: (error: any | null, d: ResponseType | null) => void): this;
    send<RequestType, ResponseType>(method: string, data: RequestType, callback: (error: any | null, d: ResponseType | null) => void): this;

    timeout(): number;
    timeout(value: number): this;

    user(): string | null;
    user(value: string): this;
}

export interface DsvRequest extends Request {
    row<RequestType, ResponseType>(value: (d: RequestType) => ResponseType): DsvRequest;
}

export function csv(url: string): DsvRequest;
export function csv<ResponseType>(url: string, callback: (error: any, d: ResponseType[]) => void): DsvRequest;
export function csv<RequestType, ResponseType>(url: string, row: (d: RequestType) => ResponseType, callback: (error: any, d: ResponseType[]) => void): DsvRequest;

export function html(url: string): Request;
export function html(url: string, callback: (error: any, d: DocumentFragment) => void): Request;

export function json(url: string): Request;
export function json<RequestType>(url: string, callback: (error: any, d: RequestType) => void): Request;

export function request(url: string): Request;
export function request<RequestType>(url: string, callback: (error: any, d: RequestType) => void): Request;

export function text(url: string): Request;
export function text(url: string, callback: (error: any, d: string) => void): Request;

export function tsv(url: string): DsvRequest;
export function tsv<ResponseType>(url: string, callback: (error: any, d: ResponseType[]) => void): DsvRequest;
export function tsv<RequestType, ResponseType>(url: string, row: (d: RequestType) => ResponseType, callback: (error: any, d: ResponseType[]) => void): DsvRequest;

export function xml(url: string): Request;
export function xml(url: string, callback: (error: any, d: any) => void): Request;