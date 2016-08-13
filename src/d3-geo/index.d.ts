// Type definitions for D3JS d3-geo module 1.2.0
// Project: https://github.com/d3/d3-geo/
// Definitions by: Hugues Stefanski <https://github.com/Ledragon>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson" />

// ----------------------------------------------------------------------
// Shared Interfaces and Types
// ----------------------------------------------------------------------

/**
 * A basic geometry for a sphere, which is supported by d3-geo
 * beyond the GeoJSON geometries.
 */
export interface GeoSphere {
    type: 'Sphere';
}

/**
 * Type Alias for GeoJSON Geometry Object and GeoSphere additional
 * geometry supported by d3-geo
 */
export type GeoGeometryObjects = GeoJSON.GeometryObject | GeoSphere;

/**
 * A GeoJSON-style GeometryCollection which supports GeoJSON geometry objects
 * and additionally GeoSphere
 */
export interface ExtendedGeometryCollection<GeometryType extends GeoGeometryObjects> {
    type: string;
    bbox?: number[];
    crs?: GeoJSON.CoordinateReferenceSystem;
    geometries: GeometryType[];
}

/**
 * A GeoJSON-style Feature which support features built on GeoJSON GeometryObjects
 * or GeoSphere
 */
export interface ExtendedFeature<GeometryType extends GeoGeometryObjects, Properties> extends GeoJSON.GeoJsonObject {
    geometry: GeometryType;
    properties: Properties;
    id?: string;
}

/**
 * A GeoJSON-style FeatureCollection which supports GeoJSON features
 * and features built on GeoSphere
 */
export interface ExtendedFeatureCollection<FeatureType extends ExtendedFeature<GeoGeometryObjects, any>> extends GeoJSON.GeoJsonObject {
    features: FeatureType[];
}

/**
 * Type Alias for permissible objects which can be used with d3-geo
 * methods
 */
export type GeoPremissibleObjects = GeoGeometryObjects | ExtendedGeometryCollection<GeoGeometryObjects> | ExtendedFeature<GeoGeometryObjects, any> | ExtendedFeatureCollection<ExtendedFeature<GeoGeometryObjects, any>>;

// ----------------------------------------------------------------------
// Spherical Math
// ----------------------------------------------------------------------

/**Returns the spherical area of the specified GeoJSON feature in steradians. */
export function geoArea(feature: ExtendedFeature<GeoGeometryObjects, any>): number;
export function geoArea(feature: ExtendedFeatureCollection<ExtendedFeature<GeoGeometryObjects, any>>): number;
export function geoArea(feature: GeoGeometryObjects): number;
export function geoArea(feature: ExtendedGeometryCollection<GeoGeometryObjects>): number;

/**Returns the spherical bounding box for the specified GeoJSON feature. The bounding box is represented by a two-dimensional array: [[left, bottom], [right, top]], where left is the minimum longitude, bottom is the minimum latitude, right is maximum longitude, and top is the maximum latitude. All coordinates are given in degrees. */
export function geoBounds(feature: ExtendedFeature<GeoGeometryObjects, any>): [[number, number], [number, number]];
export function geoBounds(feature: ExtendedFeatureCollection<ExtendedFeature<GeoGeometryObjects, any>>): [[number, number], [number, number]];
export function geoBounds(feature: GeoGeometryObjects): [[number, number], [number, number]];
export function geoBounds(feature: ExtendedGeometryCollection<GeoGeometryObjects>): [[number, number], [number, number]];

/**Returns the spherical centroid of the specified GeoJSON feature. See also path.centroid, which computes the projected planar centroid.*/
export function geoCentroid(feature: ExtendedFeature<GeoGeometryObjects, any>): [number, number];
export function geoCentroid(feature: ExtendedFeatureCollection<ExtendedFeature<GeoGeometryObjects, any>>): [number, number];
export function geoCentroid(feature: GeoGeometryObjects): [number, number];
export function geoCentroid(feature: ExtendedGeometryCollection<GeoGeometryObjects>): [number, number];

/**Returns the great-arc distance in radians between the two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoDistance(a: [number, number], b: [number, number]): number;

/**Returns the great-arc length of the specified GeoJSON feature in radians.*/
export function geoLength(feature: ExtendedFeature<GeoGeometryObjects, any>): number;
export function geoLength(feature: ExtendedFeatureCollection<ExtendedFeature<GeoGeometryObjects, any>>): number;
export function geoLength(feature: GeoGeometryObjects): number;
export function geoLength(feature: ExtendedGeometryCollection<GeoGeometryObjects>): number;

/**Returns an interpolator function given two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoInterpolate(a: [number, number], b: [number, number]): (t: number) => [number, number];


export interface GeoRotation {
    (point: [number, number]): [number, number];
    invert(point: [number, number]): [number, number];
}

/**Returns a rotation function for the given angles, which must be a two- or three-element array of numbers [lambda, phi, gamma] specifying the rotation angles in degrees about each spherical axis. */
export function geoRotation(angles: [number, number] | [number, number, number]): GeoRotation;


// ----------------------------------------------------------------------
// Spherical Shapes
// ----------------------------------------------------------------------

// geoCircle ============================================================

export interface GeoCircleGenerator<This, Datum> {
    /**Returns a new GeoJSON geometry object of type “Polygon” approximating a circle on the surface of a sphere, with the current center, radius and precision. */
    (this: This, d?: Datum, ...args: any[]): GeoJSON.Polygon;
    center(): ((this: This, d: Datum, ...args: any[]) => [number, number]);
    center(center: [number, number]): this;
    center(center: ((this: This, d: Datum, ...args: any[]) => [number, number])): this;

    radius(): ((this: This, d: Datum, ...args: any[]) => number);
    radius(radius: number): this;
    radius(radius: ((this: This, d: Datum, ...args: any[]) => number)): this;

    precision(): ((this: This, d: Datum, ...args: any[]) => number);
    precision(precision: number): this;
    precision(precision: (this: This, d: Datum, ...args: any[]) => number): this;
}

export function geoCircle(): GeoCircleGenerator<any, any>;
export function geoCircle<Datum>(): GeoCircleGenerator<any, Datum>;
export function geoCircle<This, Datum>(): GeoCircleGenerator<This, Datum>;

// geoGraticule ============================================================

export interface GeoGraticuleGenerator {
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

export function geoGraticule(): GeoGraticuleGenerator;

// ----------------------------------------------------------------------
// Projections
// ----------------------------------------------------------------------

export interface GeoStream {
    lineEnd(): void;
    lineStart(): void;
    point(x: number, y: number, z?: number): void;
    polygonEnd(): void;
    polygonStart(): void;
    sphere(): void;
}

export interface GeoRawProjection {
    (longitude: number, latitude: number): [number, number];
    invert(x: number, y: number): [number, number];
}

export interface GeoProjection {
    /**Returns a new array x, y representing the projected point of the given point. The point must be specified as a two-element array [longitude, latitude] in degrees. */
    (point: [number, number]): [number, number] | null;

    center(): [number, number];
    center(point: [number, number]): this;

    clipAngle(): number | null;
    clipAngle(angle: null): this;
    clipAngle(angle: number): this;

    clipExtent(): [[number, number], [number, number]] | null;
    clipExtent(extent: null): this;
    clipExtent(extent: [[number, number], [number, number]]): this;

    /**Sets the projection’s scale and translate to fit the specified GeoJSON object in the center of the given extent. */
    fitExtent(extent: [[number, number], [number, number]], object: GeoJSON.GeoJsonObject): this;

    /**A convenience method for projection.fitExtent where the top-left corner of the extent is [0,0]. */
    fitSize(size: [number, number], object: GeoJSON.GeoJsonObject): this;

    /**Returns a new array [longitude, latitude] in degrees representing the unprojected point of the given projected point. */
    invert?(point: [number, number]): [number, number] | null;

    precision(): number;
    precision(precision: number): this;

    rotate(): [number, number, number];
    rotate(angles: [number, number] | [number, number, number]): this;

    scale(): number;
    scale(scale: number): this;

    stream(stream: any): GeoStream;

    translate(): [number, number];
    translate(point: [number, number]): this;
}

export interface GeoConicProjection extends GeoProjection {
    // TODO find return type from code, documentation unavailable
    parallels(value: [number, number]): this;
    parallels(): [number, number];
}


// geoPath ==============================================================

export interface GeoContext {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    beginPath(): void;
    closePath(): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
}

export interface GeoPath<This, DatumObject extends GeoPremissibleObjects> {
    area(object: DatumObject): number;
    bounds(object: DatumObject): [[number, number], [number, number]];
    centroid(object: DatumObject): [number, number];
    context<C extends GeoContext>(): C | null;
    context(context: GeoContext | null): this;
    // TODO: generalize only projection.stream method suffices for projection(...) as per API doc
    projection<P extends GeoProjection>(): P;
    projection(projection: GeoProjection): this;
    pointRadius(): (this: This, object: DatumObject, ...args: any[]) => number;
    pointRadius(value: number): this;
    pointRadius(value: (this: This, object: DatumObject, ...args: any[]) => number): this;
    (this: This, object: DatumObject, ...args: any[]): string;
}

export function geoPath(): GeoPath<any, GeoPremissibleObjects>;
export function geoPath<DatumObject extends GeoPremissibleObjects>(): GeoPath<any, DatumObject>;
export function geoPath<This, DatumObject extends GeoPremissibleObjects>(): GeoPath<This, DatumObject>;

// Raw Projections ========================================================

export function geoAzimuthalEqualAreaRaw(): GeoRawProjection;
export function geoAzimuthalEquidistantRaw(): GeoRawProjection;
export function geoConicConformalRaw(phi0: number, phi1: number): GeoRawProjection;
export function geoConicEqualAreaRaw(phi0: number, phi1: number): GeoRawProjection;
export function geoConicEquidistantRaw(phi0: number, phi1: number): GeoRawProjection;
export function geoEquirectangularRaw(): GeoRawProjection;
export function geoGnomonicRaw(): GeoRawProjection;
export function geoMercatorRaw(): GeoRawProjection;
export function geoOrthographicRaw(): GeoRawProjection;
export function geoStereographicRaw(): GeoRawProjection;
export function geoTransverseMercatorRaw(): GeoRawProjection;

// geoProjection ==========================================================

export function geoProjection(project: GeoRawProjection): GeoProjection;

// geoProjectionMutator ====================================================

export function geoProjectionMutator(factory: (...args: any[]) => GeoRawProjection): () => GeoProjection;

// Pre-Defined Projections =================================================

export function geoAlbers(): GeoProjection;
export function geoAlbersUsa(): GeoProjection;
export function geoAzimuthalEqualArea(): GeoProjection;
export function geoAzimuthalEquidistant(): GeoProjection;
export function geoConicConformal(): GeoConicProjection;
export function geoConicEqualArea(): GeoConicProjection;
export function geoConicEquidistant(): GeoConicProjection;
export function geoEquirectangular(): GeoProjection;
export function geoGnomonic(): GeoProjection;
export function geoMercator(): GeoProjection;
export function geoOrthographic(): GeoProjection;
export function geoStereographic(): GeoProjection;
export function geoTransverseMercator(): GeoProjection;

// geoClipExtent =============================================================

export interface GeoExtent {
    extent(): [[number, number], [number, number]];
    extent(extent: [[number, number], [number, number]]): this;
    stream(): GeoStream;
    stream(value: GeoStream): this;
}


export function geoClipExtent(): GeoExtent;

// ----------------------------------------------------------------------
// Projection Streams
// ----------------------------------------------------------------------

// TODO return type is an extension of T augmented by Stream method. How to specify this?
export function geoTransform<T>(prototype: T): ({ stream: (s: GeoStream) => any });

export function geoStream(object: GeoJSON.GeoJsonObject, stream: GeoStream): void;
