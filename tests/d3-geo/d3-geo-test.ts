/**
 * Typescript definition tests for d3/d3-geo module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Geo from '../../src/d3-geo';

const feature: GeoJSON.Feature<any> = {
    'type': 'Feature',
    'id': '01',
    'properties': {
        'name': 'Alabama'
    },
    'geometry': {
        'type': 'Polygon',
        'coordinates':
        [
            [
                [-87.359296, 35.00118],
                [-85.606675, 34.984749],
                [-85.431413, 34.124869],
                [-85.184951, 32.859696],
                [-85.069935, 32.580372],
                [-84.960397, 32.421541],
                [-85.004212, 32.322956],
                [-84.889196, 32.262709],
                [-85.058981, 32.13674],
                [-85.053504, 32.01077],
                [-85.141136, 31.840985],
                [-85.042551, 31.539753],
                [-85.113751, 31.27686],
                [-85.004212, 31.003013],
                [-85.497137, 30.997536],
                [-87.600282, 30.997536],
                [-87.633143, 30.86609],
                [-87.408589, 30.674397],
                [-87.446927, 30.510088],
                [-87.37025, 30.427934],
                [-87.518128, 30.280057],
                [-87.655051, 30.247195], [-87.90699, 30.411504], [-87.934375, 30.657966], [-88.011052, 30.685351], [-88.10416, 30.499135], [-88.137022, 30.318396], [-88.394438, 30.367688], [-88.471115, 31.895754], [-88.241084, 33.796253], [-88.098683, 34.891641], [-88.202745, 34.995703], [-87.359296, 35.00118]
            ]
        ]
    }
};

// ----------------------------------------------------------------------
// Spherical Math
// ----------------------------------------------------------------------
let area: number = d3Geo.geoArea(feature);
let bounds: [[number, number], [number, number]] = d3Geo.geoBounds(feature);
let centroid: [number, number] = d3Geo.geoCentroid(feature);
let distance: number = d3Geo.geoDistance([54, 2], [53, 1]);
let length: number = d3Geo.geoLength(feature);
let interpolateFct: (t: number) => [number, number] = d3Geo.geoInterpolate([54, 2], [53, 1]);
let rotation: d3Geo.Rotation = d3Geo.geoRotation([90, 45]);
let rotation2: d3Geo.Rotation = d3Geo.geoRotation([90, 45, 27.5]);

// ----------------------------------------------------------------------
// Rotation interface
// ----------------------------------------------------------------------
let point: [number, number] = rotation([54, 2]);
let inverted: [number, number] = rotation.invert([54, 2]);

// ----------------------------------------------------------------------
// Spherical Shapes
// ----------------------------------------------------------------------
let circleGenerator: d3Geo.CircleGenerator = d3Geo.geoCircle();
let graticuleGenerator: d3Geo.GraticuleGenerator = d3Geo.graticule();

// ----------------------------------------------------------------------
// CircleGenerator interface
// ----------------------------------------------------------------------
let polygon: GeoJSON.Polygon = circleGenerator();
// TODO is this correct?
let centerFct: ((...args: any[]) => [number, number]) | [number, number] = circleGenerator.center();
let generator1: d3Geo.CircleGenerator = circleGenerator.center(() => [54, 2]);
let generator2: d3Geo.CircleGenerator = circleGenerator.center([54, 2]);
// TODO is this correct?
let radius: ((...args: any[]) => number) | number = circleGenerator.radius();
let generator3: d3Geo.CircleGenerator = circleGenerator.radius(() => 5);
let generator4: d3Geo.CircleGenerator = circleGenerator.radius(2);
// TODO is this correct?
let precision: ((...args: any[]) => number) | number = circleGenerator.precision();
let generator5: d3Geo.CircleGenerator = circleGenerator.precision(() => 5);
let generator6: d3Geo.CircleGenerator = circleGenerator.precision(2);

// ----------------------------------------------------------------------
// GraticuleGenerator interface
// ----------------------------------------------------------------------
let multiString: GeoJSON.MultiLineString = graticuleGenerator();
let lines: GeoJSON.LineString[] = graticuleGenerator.lines();
let polygon2: GeoJSON.Polygon = graticuleGenerator.outline();
let extent: [[number, number], [number, number]] = graticuleGenerator.extent();
let generator11: d3Geo.GraticuleGenerator = graticuleGenerator.extent([[-180, -80], [180, 80]]);
let extentMajor: [[number, number], [number, number]] = graticuleGenerator.extentMajor();
let generator12: d3Geo.GraticuleGenerator = graticuleGenerator.extentMajor([[-180, -80], [180, 80]]);
let extentMinor: [[number, number], [number, number]] = graticuleGenerator.extentMinor();
let generator13: d3Geo.GraticuleGenerator = graticuleGenerator.extentMinor([[-180, -80], [180, 80]]);
let step: [number, number] = graticuleGenerator.step();
let generator14: d3Geo.GraticuleGenerator = graticuleGenerator.step([10,10]);
let stepMajor: [number, number] = graticuleGenerator.stepMajor();
let generator15: d3Geo.GraticuleGenerator = graticuleGenerator.stepMajor([10,10]);
let stepMinor: [number, number] = graticuleGenerator.stepMinor();
let generator16: d3Geo.GraticuleGenerator = graticuleGenerator.stepMinor([10, 10]);
let precision1: number = graticuleGenerator.precision();
let generator17: d3Geo.GraticuleGenerator = graticuleGenerator.precision(5);