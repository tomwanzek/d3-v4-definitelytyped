# D3 Version 4 Typescript Definition Files

## Purpose

This repo is intended as a staging area for typescript definitions related to the upcoming release of [D3js](https://github.com/d3/d3) version 4.0.x by [Mike Bostock](https://github.com/mbostock).

Its content is _work in progress_ and intended to be rolled into a contribution to DefinitelyTyped or comparable community effort. The repo is **not intended** as a source for definition files to be used in the regular course of working with D3 in typescript.

The definitions are currently written on a per module basis in reference to the now separated **D3** modules.

## General Status

**D3 version 4** has now been released. 

The definition files contained in this repo are to be considered with care. Specifically, 

* as long as a repo does not have a test file flagged as complete, the content is available for review and comment, but not considered stable. Stability is obviously also conditioned on the API stability of the just released **D3 v4**. 

* where indicated, some features of the definition files may be considered experimental. Certain definition files make use of the ability to type the `this` context of a function and depend on new features of the **typescript compiler** (currently typescript@next (2.0.0-dev)). With respect to **D3**, this ability may be of specific interest when working with [selections](https://github.com/d3/d3-selection) and [transitions](https://github.com/d3/d3-transition), where the current DOM element is provided through the `this` context.

* the **D3 v4** release allows substantial flexibility with regard to _(un)bundling_ as well as the choice between _vanilla_ and _mondule import_ use. The definitions in this repo are written as external modules.
Ambient declarations are only used, when required for module augmentation (e.g. **d3-transition** extending the `Selection` interface of **d3-selection**).

The question of exporting to a `d3` **global** for _vanilla_ use, is somewhat related to the potential use of `export as namespace d3` in UMD module declarations.
The [D3 standard bundle definitions file](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3/index.d.ts) contained in this repo currently re-exports the modules, as stated in
the next section. It also exposes `d3` **global** which can be used, where the module is not imported, but definitions are included by reference. The global is exposed using `export as namespace d3`.
Note that, this is _currently_ not possible at module level, as it creates a duplicate identifier error for `d3`.

Please, note that the definition and test files in this repo are currently using relative paths.
This was done as an interim step to focus on the D3-related aspects of this effort (including the experimental `this` typing). See [issue #1 regarding definitions discovery/deployment mechanism](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/1).

## Module-Level Status

**Note**: All references to "Test File" below should be read as follows. The typescript files should compile without errors to indicate the internal consistency of the typescript definitions.
I.e. they are only shape tests as is the DefinitelyTyped tradition. They are expressly not meant to be used with a test runner as functional tests.

A grunt-task using the dev-dependency typescript@next version is currently used to perform the compilation tests.


### d3-array

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-array/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-array/d3-array-test.ts)

### d3-axis

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-axis/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-axis/d3-axis-test.ts)

### d3-brush

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-brush/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-brush/d3-brush-test.ts)

### d3-chord

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-chord/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-chord/d3-chord-test.ts)

**Note**: Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used accessor functions in RibbonGenerator. The `this` context depends on the context bound when invoking the
RibbonGenerator with data. I.e. it can be global object, undefined, a custom object or anything explicitly bound using `.call(...)` et al.
The latter is the case e.g. when using RibbonGenerator to create the path string in conjunction with a `Selection` or `Transition` for SVGPathElements' `attr(...)` callbacks.

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

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-drag/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-drag/d3-drag-test.ts)

**Note**: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

### d3-dsv


### d3-ease

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-ease/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

### d3-force

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-force/index.d.ts) (*draft*)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

**Note**: Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used for context-binding of event handler to Simulation (using `Simulation.on(...)`).


### d3-format

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-format/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-format/d3-format-test.ts)

### d3-hierarchy

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-hierarchy/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-hierarchy/d3-hierarchy-test.ts)

### d3-interpolate

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-interpolate/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-interpolate/d3-interpolate-test.ts)

### d3-path

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-path/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-path/d3-path-test.ts)

### d3-polygon

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-polygon/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-polygon/d3-polygon-test.ts)

### d3-quadtree

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-quadtree/index.d.ts) (_draft_)
- [ ] Test File

### d3-queue


### d3-random

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-random/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-random/d3-random-test.ts)

### d3-request


### d3-scale

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-scale/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-scale/d3-scale-test.ts)

### d3-selection

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-selection/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-selection/d3-selection-test.ts)

See [issue 2 BaseType definition for selection/transition elements](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/2).

**Note**: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

### d3-shape

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-shape/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-shape/d3-shape-test.ts)

**Note**: Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used for accessor functions in Arc, Pie, Symbol, Stack. The `this` context depends on the context bound when invoking the
respective generator with data. I.e. it can be global object, undefined, a custom object or anything explicitly bound using `.call(...)` et al.
The latter is the case e.g. when using `symbol` or `arc` to create the path string in conjunction with a `Selection` or `Transition` for SVGPathElements' `attr(...)` callbacks.  

### d3-time

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time/d3-time-test.ts)

### d3-time-format

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time-format/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time-format/d3-time-format-test.ts)

### d3-timer

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-timer/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-timer/d3-timer-test.ts)

### d3-transition

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-transition/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-transition/d3-transition-test.ts)

**Note**: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

### d3-voronoi

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-voronoi/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-voronoi/d3-voronoi-test.ts)

### d3-zoom

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-zoom/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-zoom/d3-zoom-test.ts)

**Note**: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.


## Related Contributions

This repo benefits from the original work on [**D3js 3.x** typings on DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/d3) for the file _d3.d.ts_ and its tests _d3-test.ts_.
By implication the debt is to all its contributors with primary listed responsibility of [Alex Ford](https://github.com/gustavderdrache) and [Boris Yankov](https://github.com/borisyankov).
