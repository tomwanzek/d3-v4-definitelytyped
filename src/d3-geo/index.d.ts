// Type definitions for D3JS d3-geo module 1.1.1
// Project: https://github.com/d3/d3-geo/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Hugues Stefanski <https://github.com/Ledragon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="typings/browser.d.ts" />

export interface Projection {
    (point: [number, number]): [number, number];

    clipAngle(): number;
    clipAngle(angle: number): this;

    scale(): number;
    scale(scale: number): this;

    translate(): [number, number];
    translate(point: [number, number]): this;

    center(): [number, number];
    center(point: [number, number]): this;

    invert(point: [number, number]): [number, number];
    stream(stream: any): ProjectionStream;
}

export interface ProjectionStream {
}

export interface RawProjection {
    (longitude: number, latitude: number): [number, number];
    invert(x: number, y: number): [number, number];
}

// ----------------------------------------------------------------------
// Spherical Math
// ----------------------------------------------------------------------
/**Returns the spherical area of the specified GeoJSON feature in steradians. */
export function geoArea(feature: GeoJSON.Feature<any>): number;
/**Returns the spherical bounding box for the specified GeoJSON feature. The bounding box is represented by a two-dimensional array: [[left, bottom], [right, top]], where left is the minimum longitude, bottom is the minimum latitude, right is maximum longitude, and top is the maximum latitude. All coordinates are given in degrees. */
export function geoBounds(feature: GeoJSON.Feature<any>): [[number, number], [number, number]];
/**Returns the spherical centroid of the specified GeoJSON feature. See also path.centroid, which computes the projected planar centroid.*/
export function geoCentroid(feature: GeoJSON.Feature<any>): number;
/**Returns the great-arc distance in radians between the two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoDistance(a: [number, number], b: [number, number]): number;
/**Returns the great-arc length of the specified GeoJSON feature in radians.*/
export function geoLength(feature: GeoJSON.Feature<any>): number;
/**Returns an interpolator function given two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoInterpolate(a: [number, number], b: [number, number]): (t: number) => number;
/**Returns a rotation function for the given angles, which must be a two- or three-element array of numbers [lambda, phi, gamma] specifying the rotation angles in degrees about each spherical axis. */
export function geoRotation(angles: [number, number] | [number, number, number]): Rotation;

export interface Rotation {
    (point: [number, number]): [number, number];
    invert(point: [number, number]): [number, number];
}


// ----------------------------------------------------------------------
// Spherical Shapes
// ----------------------------------------------------------------------
export function geoCircle(): CircleGenerator;

export interface CircleGenerator {
    /**Returns a new GeoJSON geometry object of type “Polygon” approximating a circle on the surface of a sphere, with the current center, radius and precision. */
    (...args: any[]): GeoJSON.Polygon;
    center(): ((...args: any[]) => [number, number]) | [number, number];
    center(center: ((...args: any[]) => [number, number]) | [number, number]): this;
    radius(): ((...args: any[]) => number) | number;
    radius(radius: ((...args: any[]) => number) | number): this;
    precision(): ((...args: any[]) => number) | number;
    precision(precision: ((...args: any[]) => number) | number): this;
}

export function graticule(): FeatureGenerator;

export interface FeatureGenerator {
    /**Returns a GeoJSON MultiLineString geometry object representing all meridians and parallels for this graticule. */
    (): GeoJSON.MultiLineString;

    lines(): GeoJSON.LineString[];
    outline(): GeoJSON.Polygon;
    extent(): [[number, number], [number, number]];
    extent(extent: [[number, number], [number, number]]): this;
    extentMajor(): [[number, number], [number, number]];
    extentMajor(extent: [[number, number], [number, number]]): this;
    extentMinor(): [[number, number], [number, number]];
    extentMinor(extent: [[number, number], [number, number]]): this;
    step(): [number, number];
    step(step: [number, number]): this;
    stepMajor(): [number, number];
    stepMajor(step: [number, number]): this;
    stepMinor(): [number, number];
    precision(): number
    precision(angle: number): this;
}

// ----------------------------------------------------------------------
// Projections
// ----------------------------------------------------------------------

export function geoPath(): GeoPath;

export interface GeoPath {
    area(object: GeoJSON.Feature<any>): number;
    bounds(object: GeoJSON.Feature<any>): [[number, number], [number, number]];
    centroid(object: GeoJSON.Feature<any>): [number, number];
    context(): Context | null;
    context(context: Context | null): this;
    projection(): Projection;
    projection(projection: Projection): this;
    pointRadius(): number;
    pointRadius(value: number): this;
    (object: GeoJSON.Feature<any>): string;
    (object: GeoJSON.Feature<any>, ...args: any[]): string;
}

export interface Context {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    beginPath(): void;
    closePath(): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
}

export function geoProjection(project: RawProjection): Projection;

export function geoAzimuthalEqualAreaRaw(): RawProjection;
export function geoAzimuthalEquidistantRaw(): RawProjection;
export function geoConicConformalRaw(phi0: number, phi1: number): RawProjection;
export function geoConicEqualAreaRaw(phi0: number, phi1: number): RawProjection;
export function geoConicEquidistantRaw(phi0: number, phi1: number): RawProjection;
export function geoEquirectangularRaw(): RawProjection;
export function geoGnomonicRaw(): RawProjection;
export function geoMercatorRaw(): RawProjection;
export function geoOrthographicRaw(): RawProjection;
export function geoStereographicRaw(): RawProjection;
export function geoTransverseMercatorRaw(): RawProjection;

export function geoAlbers(): Projection;
export function geoAlbersUsa(): Projection;
export function geoMercator(): Projection;
