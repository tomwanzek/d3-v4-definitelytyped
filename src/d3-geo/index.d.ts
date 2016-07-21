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