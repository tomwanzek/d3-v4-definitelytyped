// Type definitions for D3JS d3-geo module 1.1.1
// Project: https://github.com/d3/d3-geo/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Hugues Stefanski <https://github.com/Ledragon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="typings/browser.d.ts" />

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

export interface GraticuleGenerator {
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
    stepMinor(step: [number, number]): this;
    precision(): number;
    precision(angle: number): this;
}

export interface Projection {
    /**Returns a new array x, y representing the projected point of the given point. The point must be specified as a two-element array [longitude, latitude] in degrees. */
    (point: [number, number]): [number, number] | null;

    center(): [number, number];
    center(point: [number, number]): this;

    clipAngle(): number | null;
    clipAngle(angle: null): this;
    clipAngle(angle: number): this;

    clipExtent(): [[number, number], [number, number]] | null;
    clipAngle(extent: null): this;
    clipExtent(extent: [[number, number], [number, number]]): this;

    fitExtent(extent: [[number, number], [number, number]], object: GeoJSON.GeoJsonObject): this;
    fitSize(size: [number, number], object: GeoJSON.GeoJsonObject): this;

    /**Returns a new array [longitude, latitude] in degrees representing the unprojected point of the given projected point. */
    invert?(point: [number, number]): [number, number] | null;

    precision(): number;
    precision(precision: number): this;

    rotate(): [number, number, number];
    rotate(angles: [number, number] | [number, number, number]): this;

    scale(): number;
    scale(scale: number): this;

    stream(stream: any): Stream;

    translate(): [number, number];
    translate(point: [number, number]): this;
}

export interface ConicProjection extends Projection {
    // TODO find return type from code, documentation unavailable
    parallels(value: [number, number]): any;
    parallels(): [number, number];
}


export interface Stream {
    lineEnd(): void;
    lineStart(): void;
    point(x: number, y: number, z?: number): void;
    polygonEnd(): void;
    polygonStart(): void;
    sphere(): void;
}

export interface Extent {
    extent(): [[number, number], [number, number]];
    extent(extent: [[number, number], [number, number]]): this;
    stream(): Stream;
    stream(value: Stream): this;
}


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
export function geoCentroid(feature: GeoJSON.Feature<any>): [number, number];
/**Returns the great-arc distance in radians between the two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoDistance(a: [number, number], b: [number, number]): number;
/**Returns the great-arc length of the specified GeoJSON feature in radians.*/
export function geoLength(feature: GeoJSON.Feature<any>): number;
/**Returns an interpolator function given two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoInterpolate(a: [number, number], b: [number, number]): (t: number) => [number, number];
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
export function graticule(): GraticuleGenerator;

// ----------------------------------------------------------------------
// Projections
// ----------------------------------------------------------------------
export function geoPath(): GeoPath;

export function geoProjection(project: RawProjection): Projection;
// TODO type factory properly
export function geoProjectionMutator(factory: any): () => () => () => Projection;

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
export function geoAzimuthalEqualArea(): Projection;
export function geoAzimuthalEquidistant(): Projection;
export function geoConicConformal(): Projection;
export function geoConicEqualArea(): Projection;
export function geoConicEquidistant(): Projection;
export function geoEquirectangular(): Projection;
export function geoGnomonic(): Projection;
export function geoMercator(): Projection;
export function geoOrthographic(): Projection;
export function geoStereographic(): Projection;
export function geoTransverseMercator(): Projection;

export function geoClipExtent(): Extent;

// ----------------------------------------------------------------------
// Projection Streams
// ----------------------------------------------------------------------
export function geoTransform(prototype: any): { stream: (s: Stream) => any };
export function geoStream(object: GeoJSON.GeoJsonObject, stream: Stream): void;