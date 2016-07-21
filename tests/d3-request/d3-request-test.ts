import * as d3Request from '../../src/d3-request';

const url: string = 'http:// api.reddit.com';

// -------------------------------------------------------------------------------
// Public API
// -------------------------------------------------------------------------------

// csv
let csvRequest: d3Request.DsvRequest = d3Request.csv(url);
let csvRequestWithCallback: d3Request.DsvRequest = d3Request.csv<ApiData>(url, (error: any, data: ApiData[]) => {
    console.log(data);
});
let csvRequestWithRowWithCallback: d3Request.DsvRequest = d3Request.csv<{ test: string }, ApiData>(url,
    (d: { test: string }) => {
        return {
            kind: d.test
        };
    },
    (error: any, data: ApiData[]) => {
        console.log(data);
    });

// html
let html: d3Request.Request = d3Request.html(url);
let htmlWithCallback: d3Request.Request = d3Request.html(url, (error: any, data: DocumentFragment) => {
    console.log(data);
});

// json
let json: d3Request.Request = d3Request.json(url);
let jsonWithCallback: d3Request.Request = d3Request.json<ApiData>(url, (error: any, data: ApiData) => {
    console.log(data);
});

// request
let request: d3Request.Request = d3Request.request(url);
let requestWithCallback: d3Request.Request = d3Request.request<ApiData>(url, callback);

// text
let text: d3Request.Request = d3Request.text(url);
let textWithCallback: d3Request.Request = d3Request.text(url, (error: any, data: string) => {
    console.log(data);
});

// tsv
let tsvRequest: d3Request.DsvRequest = d3Request.tsv(url);
let tsvRequestWithCallback: d3Request.DsvRequest = d3Request.tsv<ApiData>(url, (error: any, data: ApiData[]) => {
    console.log(data);
});
let tsvRequestWithRowWithCallback: d3Request.DsvRequest = d3Request.tsv<{ test: string }, ApiData>(url,
    (d: { test: string }) => {
        return {
            kind: d.test
        };
    },
    (error: any, data: ApiData[]) => {
        console.log(data);
    });

// xml
let xml: d3Request.Request = d3Request.xml(url);
let xmlWithCallback: d3Request.Request = d3Request.text(url, (error: any, data: string) => {
    console.log(data);
});

// -------------------------------------------------------------------------------
// Request interface
// -------------------------------------------------------------------------------

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

// Response
let r16: d3Request.Request = d3Request.request(url)
    .response<ApiData>((d: XMLHttpRequest) => {
        console.log(d.responseText);
        return {
            kind: 'Listing'
        };
    });

// ResponseType
// get
let responseType: string = d3Request.request(url)
    .responseType();
// set
let r17: d3Request.Request = d3Request.request(url)
    .responseType('application/json');

// Send
let r18: d3Request.Request = d3Request.request(url)
    .send('GET');
let r19: d3Request.Request = d3Request.request(url)
    .send<ApiData>('POST', { kind: 'Listing' });
let r20: d3Request.Request = d3Request.request(url)
    .send<ApiData>('POST', callback);
let r21: d3Request.Request = d3Request.request(url)
    .send<ApiData, ApiData>('POST', { kind: 'Listing' }, callback);


// Tiemout
// get
let timeout: number = d3Request.request(url)
    .timeout();
// set
let r22: d3Request.Request = d3Request.request(url)
    .timeout(500);

// User
// get
let user: string = request.user();
// set
let r23: d3Request.Request = request.user('User');

// -------------------------------------------------------------------------------
// DsvRequest interface
// -------------------------------------------------------------------------------
let dsvRequest: d3Request.DsvRequest = d3Request.csv(url)
    .row<{ test: string }, ApiData>((d: { test: string }) => {
        return {
            kind: d.test
        };
    });


/////////////////////////////////////////////////////////////////////////////////////////

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