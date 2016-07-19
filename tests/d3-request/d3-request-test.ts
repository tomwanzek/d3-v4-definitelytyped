import * as d3Request from '../../src/d3-request';

const url: string = 'http:// api.reddit.com';

let request = d3Request.request(url);
let requestWithCallback = d3Request.request<ApiData>(url, callback);

// Abort
request.abort();

// Get
d3Request.request(url)
    .get();
d3Request.request(url)
    .get<ApiData>({ kind: 'Listing' });
d3Request.request(url)
    .get<ApiData>(callback);
d3Request.request(url)
    .get<ApiData, ApiData>({ kind: 'Listing' }, callback);

// Headers
// get
let acceptEncoding = request.header('Accept-Encoding');
// set
request.header('Accept-Encoding', 'gzip');
// remove
request.header('Accept-Encoding', null);

// Mime Type
// get
let mimeType = request.mimeType();
// set
request.mimeType('application/json');
// remove
request.mimeType(null);

// Events - on
// get
let loadListener = d3Request.request(url)
    .on('load');
// set
d3Request.request(url)
    .on('beforesend', (data) => console.log(data))
    .on('progress', (data) => console.log(data))
    .on('load', (data) => console.log(data))
    .on('error', (data) => console.error(data));

// Password
// get
let password = request.password();
// set
request.password('MyPassword');

// Post
d3Request.request(url)
    .post();
d3Request.request(url)
    .post<ApiData>({ kind: 'Listing' });
d3Request.request(url)
    .post<ApiData>(callback);
d3Request.request(url)
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