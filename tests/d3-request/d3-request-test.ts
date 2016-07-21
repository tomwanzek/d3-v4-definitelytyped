import * as d3Request from '../../src/d3-request';

const url: string = 'http:// api.reddit.com';

let request = d3Request.request(url);
let requestWithCallback = d3Request.request<ApiData>(url, callback);

// Abort
let r1: d3Request.Request = request.abort();

// Get
let r2: d3Request.Request = d3Request.request(url)
    .get();
let r3: d3Request.Request = d3Request.request(url)
    .get<ApiData>({ kind: 'Listing' });
let r4: d3Request.Request = d3Request.request(url)
    .get<ApiData>(callback);
let r5: d3Request.Request = d3Request.request(url)
    .get<ApiData, ApiData>({ kind: 'Listing' }, callback);

// Headers
// get
let acceptEncoding: string = request.header('Accept-Encoding');
// set
let r6: d3Request.Request = request.header('Accept-Encoding', 'gzip');
// remove
let r7: d3Request.Request = request.header('Accept-Encoding', null);

// Mime Type
// get
let mimeType: string = request.mimeType();
// set
let r8: d3Request.Request = request.mimeType('application/json');
// remove
let r9: d3Request.Request = request.mimeType(null);

// Events - on
// get
let loadListener: (d: any) => void = d3Request.request(url)
    .on('load');
// set
let r10: d3Request.Request = d3Request.request(url)
    .on('beforesend', (data) => console.log(data))
    .on('progress', (data) => console.log(data))
    .on('load', (data) => console.log(data))
    .on('error', (data) => console.error(data));

// Password
// get
let password: string = request.password();
// set
let r11: d3Request.Request = request.password('MyPassword');

// Post
let r12: d3Request.Request = d3Request.request(url)
    .post();
let r13: d3Request.Request = d3Request.request(url)
    .post<ApiData>({ kind: 'Listing' });
let r14: d3Request.Request = d3Request.request(url)
    .post<ApiData>(callback);
let r15: d3Request.Request = d3Request.request(url)
    .post<ApiData, ApiData>({ kind: 'Listing' }, callback);


function callback(error: any, data: ApiData) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(data);
        console.log(data.kind);
    }
}


interface ApiData {
    kind: String;
}