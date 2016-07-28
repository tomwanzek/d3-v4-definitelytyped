// Type definitions for D3JS d3-geo module 1.1.1
// Project: https://github.com/d3/d3-geo/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Hugues Stefanski <https://github.com/Ledragon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//TOOD object and feature are linked to GeoJSON types. These should be linked.
export interface GeoPath {
    area(object: any): number;
    bounds(object: any): [[number, number], [number, number]];
    centroid(object: any): [number, number];
    projection(): Projection;
    projection(projection: Projection): this;
    (object: any): string;
}

export interface Projection {
    (point: [number, number]): [number, number];

    clipAngle(): number;
    clipAngle(angle?: number): this;

    scale(): number;
    scale(scale?: number): this;

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

export interface Rotation {
    (point: [number, number]): [number, number];
    invert(point: [number, number]): [number, number];
}

// ----------------------------------------------------------------------
// Spherical Math
// ----------------------------------------------------------------------
/**Returns the spherical area of the specified GeoJSON feature in steradians. */
export function geoArea(feature: any): number;
/**Returns the spherical bounding box for the specified GeoJSON feature. The bounding box is represented by a two-dimensional array: [[left, bottom], [right, top]], where left is the minimum longitude, bottom is the minimum latitude, right is maximum longitude, and top is the maximum latitude. All coordinates are given in degrees. */
export function geoBounds(feature: any): [[number, number], [number, number]];
/**Returns the spherical centroid of the specified GeoJSON feature. See also path.centroid, which computes the projected planar centroid.*/
export function geoCentroid(feature: any): number;
/**Returns the great-arc distance in radians between the two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoDistance(a: [number, number], b: [number, number]): number;
/**Returns the great-arc length of the specified GeoJSON feature in radians.*/
export function geoLength(feature: any): number;
/**Returns an interpolator function given two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoInterpolate(a: [number, number], b: [number, number]): (t: number) => number;
/**Returns a rotation function for the given angles, which must be a two- or three-element array of numbers [lambda, phi, gamma] specifying the rotation angles in degrees about each spherical axis. */
export function geoRotation(angles: [number, number] | [number, number, number]): Rotation;

// ----------------------------------------------------------------------
// Spherical Shapes
// ----------------------------------------------------------------------
export interface CircleGenerator {
    //TODO
    /**Returns a new GeoJSON geometry object of type “Polygon” approximating a circle on the surface of a sphere, with the current center, radius and precision. */
    (...args: any[]): any;
    center(): ((...args: any[]) => [number, number]) | [number, number];
    center(center: ((...args: any[]) => [number, number]) | [number, number]): this;
    radius(): ((...args: any[]) => number) | number;
    radius(radius: ((...args: any[]) => number) | number): this;
    precision(): ((...args: any[]) => number) | number;
    precision(precision: ((...args: any[]) => number) | number): this;
}
export function geoCircle(): CircleGenerator;

// ----------------------------------------------------------------------
// Projections
// ----------------------------------------------------------------------
export function geoPath(): GeoPath;
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
