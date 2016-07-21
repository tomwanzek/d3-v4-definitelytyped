// feature is a GeoJSON feature; should be linked to GeoJSON type definition
export function geoArea(feature: any): number;
export function geoBounds(feature: any): [[number, number], [number, number]];
export function geoCentroid(feature: any): [number, number];
export function geoDistance(a: [number, number], b: [number, number]): number;
export function geoLength(feature: any): number;