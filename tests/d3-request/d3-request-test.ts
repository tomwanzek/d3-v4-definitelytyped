import * as d3Request from '../../src/d3-request';

const url: string = 'http://api.reddit.com';

let request = d3Request.request(url);
let requestWithCallback = d3Request.request<apiData>(url, callback);

//Abort
request.abort();

//Get
d3Request.request(url)
    .get();
d3Request.request(url)
    .get<apiData>({ kind: "Listing" });
d3Request.request(url)
    .get<apiData>(callback);
d3Request.request(url)
    .get<apiData, apiData>({ kind: "Listing" }, callback);

//Headers
//get
let acceptEncoding = request.header('Accept-Encoding');
//set
request.header('Accept-Encoding', 'gzip');
//remove
request.header('Accept-Encoding', null);

//Mime Type
//get
let mimeType = request.mimeType();
//set
request.mimeType('application/json');
//remove
request.mimeType(null);

//Events - on
//get
var loadListener = d3Request.request(url)
    .on('load');
//set
d3Request.request(url)
    .on('beforesend', (data) => console.log(data))
    .on('progress', (data) => console.log(data))
    .on('load', (data) => console.log(data))
    .on('error', (data) => console.error(data));


function callback(error: any, data: apiData) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(data);
        console.log(data.kind);
    }
}


interface apiData {
    kind: String;
}