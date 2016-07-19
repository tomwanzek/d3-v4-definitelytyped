import * as d3Request from '../../src/d3-request';

const url: string = 'http://api.reddit.com';

let request = d3Request.request(url);
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

let requestWithCallback = d3Request.request<apiData>(url, callback);

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