# D3 Version 4 Typescript Definition Files

## Purpose

This repo is intended as a staging area for typescript definitions related to the upcoming release of [D3js](https://github.com/d3/d3) version 4.x by [Mike Bostock](https://github.com/mbostock).

Its content is _work in progress_ and intended to be rolled into a contribution to DefinitelyTyped or comparable community effort. The repo is **not intended** as a source for definition files to be used in the regular course of working with D3 in typescript.

The definitions are currently written on a per module basis in reference to the now separeted **D3** modules.

## General Status

At the time of creating this repository **D3 version 4** is in **alpha stage** and under active development. Release notes are under preparation.

By extension, any definition files contained herein are to be considered with care.

Furthermore, where indicated, some features of the definition files may be considered experimental. Specifically, some definition files make use of the ability to type the `this` context of a function and depend on new features of the **typescript compiler** (currently typescript@next (1.9.0-dev)).

With respect to **D3**, this ability, may be of specific interest when working with [selections](https://github.com/d3/d3-selection) and [transitions](https://github.com/d3/d3-transition), where the current DOM element is provided through the this context.

A further separate consideration, is the question of flexibly using typescript definitions for *D3*, given the bundling scenarios contemplated by the D3 release.


## Module-Level Status

**Note**: All references to "Test File" below should be read as typescript files that should compile without errors to indicated the consistency of the typescript definitions.
They are not meant to be used with a test runner as functional tests.

### d3-array

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-array/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-array/d3-array-test.ts)

### d3-axis

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-axis/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-axis/d3-axis-test.ts)

### d3-brush

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-brush/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-brush/d3-brush-test.ts)

### d3-chord

- [ ] Definition File
- [ ] Test File

### d3-collection

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-collection/index.d.ts) (_draft_)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-collection/d3-collection-test.ts)

### d3-color

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-color/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-color/d3-color-test.ts)

### d3-dispatch

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-dispatch/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-dispatch/d3-dispatch-test.ts)

**Note**: Utilizes `this`-typing (criticality: _medium_)

### d3-drag

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-drag/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-drag/d3-drag-test.ts)

**Note**: Utilizes `this`-typing (criticality: high)

`this`-typing is used for context-binding to DOM element.

### d3-dsv


### d3-ease

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-ease/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

### d3-force

- [ ] Definition File
- [ ] Test File

### d3-format

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-format/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-format/d3-format-test.ts)

### d3-hierarchy

- [ ] Definition File
- [ ] Test File

### d3-interpolate

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-interpolate/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-interpolate/d3-interpolate-test.ts)

### d3-path

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-path/index.d.ts) (_draft_)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-path/d3-path-test.ts)

### d3-polygon

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-polygon/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-polygon/d3-polygon-test.ts)

### d3-quadtree

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-quadtree/index.d.ts) (_draft_)
- [ ] Test File

### d3-queue


### d3-random

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-random/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-random/d3-random-test.ts)

### d3-request


### d3-scale

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-scale/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-scale/d3-scale-test.ts)

### d3-selection

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-selection/index.d.ts) (_draft_)
- [ ] Test File

**Note**: Utilizes `this`-typing (criticality: high)

`this`-typing is used for context-binding to DOM element.

### d3-shape

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-shape/index.d.ts) (_draft_)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-shape/d3-shape-test.ts)

### d3-time

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time/d3-time-test.ts)

### d3-time-format

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time-format/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time-format/d3-time-format-test.ts)

### d3-timer

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-timer/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-timer/d3-timer-test.ts)

### d3-transition

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-transition/index.d.ts)
- [ ] Test File

**Note**: Utilizes `this`-typing (criticality: high)

`this`-typing is used for context-binding to DOM element.

### d3-voronoi

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-voronoi/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-voronoi/d3-voronoi-test.ts)

### d3-zoom

- [X] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-zoom/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-zoom/d3-zoom-test.ts)

**Note**: Utilizes `this`-typing (criticality: high)

`this`-typing is used for context-binding to DOM element.


## Related Contributions

This repo benefits from the original work on [**D3js 3.x** typings on DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/d3) for the file _d3.d.ts_ and its tests _d3-test.ts_.
By implication the debt is to all its contributors with primary listed responsibility of [Alex Ford](https://github.com/gustavderdrache) and [Boris Yankov](https://github.com/borisyankov).
