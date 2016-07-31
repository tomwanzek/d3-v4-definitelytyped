// Type definitions for D3JS d3-geo module 1.2.0
// Project: https://github.com/d3/d3-geo/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Hugues Stefanski <https://github.com/Ledragon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Rotation {
    (point: [number, number]): [number, number];
    invert(point: [number, number]): [number, number];
}

// TODO generic (argument type)?
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

export interface GeoPath<FeatureType extends GeoJSON.GeometryObject> {
    area(object: GeoJSON.Feature<FeatureType>): number;
    bounds(object: GeoJSON.Feature<FeatureType>): [[number, number], [number, number]];
    centroid(object: GeoJSON.Feature<FeatureType>): [number, number];
    context(): Context | null;
    context(context: Context | null): this;
    projection(): Projection;
    projection(projection: Projection): this;
    pointRadius(): number;
    pointRadius(value: number): this;
    (object: GeoJSON.Feature<FeatureType>): string;
    (object: GeoJSON.Feature<FeatureType>, ...args: any[]): string;
}

export interface RawProjection {
    (longitude: number, latitude: number): [number, number];
    invert(x: number, y: number): [number, number];
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

    stream(stream: any): Stream;

    translate(): [number, number];
    translate(point: [number, number]): this;
}

export interface ConicProjection extends Projection {
    // TODO find return type from code, documentation unavailable
    parallels(value: [number, number]): this;
    parallels(): [number, number];
}

export interface Extent {
    extent(): [[number, number], [number, number]];
    extent(extent: [[number, number], [number, number]]): this;
    stream(): Stream;
    stream(value: Stream): this;
}

export interface Stream {
    lineEnd(): void;
    lineStart(): void;
    point(x: number, y: number, z?: number): void;
    polygonEnd(): void;
    polygonStart(): void;
    sphere(): void;
}

export interface Context {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    beginPath(): void;
    closePath(): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
}


// ----------------------------------------------------------------------
// Spherical Math
// ----------------------------------------------------------------------
/**Returns the spherical area of the specified GeoJSON feature in steradians. */
export function geoArea<FeatureType extends GeoJSON.GeometryObject>(feature: GeoJSON.Feature<FeatureType>): number;
/**Returns the spherical bounding box for the specified GeoJSON feature. The bounding box is represented by a two-dimensional array: [[left, bottom], [right, top]], where left is the minimum longitude, bottom is the minimum latitude, right is maximum longitude, and top is the maximum latitude. All coordinates are given in degrees. */
export function geoBounds<FeatureType extends GeoJSON.GeometryObject>(feature: GeoJSON.Feature<FeatureType>): [[number, number], [number, number]];
/**Returns the spherical centroid of the specified GeoJSON feature. See also path.centroid, which computes the projected planar centroid.*/
export function geoCentroid<FeatureType extends GeoJSON.GeometryObject>(feature: GeoJSON.Feature<FeatureType>): [number, number];
/**Returns the great-arc distance in radians between the two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoDistance(a: [number, number], b: [number, number]): number;
/**Returns the great-arc length of the specified GeoJSON feature in radians.*/
export function geoLength<FeatureType extends GeoJSON.GeometryObject>(feature: GeoJSON.Feature<FeatureType>): number;
/**Returns an interpolator function given two points a and b. Each point must be specified as a two-element array [longitude, latitude] in degrees. */
export function geoInterpolate(a: [number, number], b: [number, number]): (t: number) => [number, number];
/**Returns a rotation function for the given angles, which must be a two- or three-element array of numbers [lambda, phi, gamma] specifying the rotation angles in degrees about each spherical axis. */
export function geoRotation(angles: [number, number] | [number, number, number]): Rotation;


// ----------------------------------------------------------------------
// Spherical Shapes
// ----------------------------------------------------------------------
export function geoCircle(): CircleGenerator;
export function graticule(): GraticuleGenerator;

// ----------------------------------------------------------------------
// Projections
// ----------------------------------------------------------------------
export function geoPath<FeatureType extends GeoJSON.GeometryObject>(): GeoPath<FeatureType>;

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

export function geoProjection(project: RawProjection): Projection;
export function geoProjectionMutator(factory: (...args: any[]) => RawProjection): () => Projection;

export function geoAlbers(): Projection;
export function geoAlbersUsa(): Projection;
export function geoAzimuthalEqualArea(): Projection;
export function geoAzimuthalEquidistant(): Projection;
export function geoConicConformal(): ConicProjection;
export function geoConicEqualArea(): ConicProjection;
export function geoConicEquidistant(): ConicProjection;
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
// TODO return type is an extension of T augmented by Stream method. How to specify this?
export function geoTransform<T>(prototype: T): ({ stream: (s: Stream) => any });
export function geoStream(object: GeoJSON.GeoJsonObject, stream: Stream): void;
