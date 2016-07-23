# D3 Version 4 Typescript Definition Files

## Summary

This repo is intended as a staging area for typescript definitions supporting the latest major release of **[D3js](https://github.com/d3/d3) (i.e. version 4.1.x)** by [Mike Bostock](https://github.com/mbostock).

The definitions are written on a per module basis in reference to the now separated D3 modules. Definitions in the `master` branch are written on the basis of **TypeScript 2.0.x**.
In particular, they make use of a new feature which allows the typing of the `this` context of functions. This ability is particulary beneficial for D3, as D3 frequently binds the `this` context of
functions to the _DOM Element_ being manipulated. The definition files are written as external modules/UMD modules.

The intended complete scope of this project covers the modules which are part of the **standard D3 bundle** as defined by Mike Bostock. On a best efforts basis, consideration may be given to small number of D3 modules which are
not part of the standard bundle but are  maintained by Mike Bostock. Specifically, this optional scope may include **d3-selection-multi** and **d3-scale-chromatic**.

The content is _work in progress_ as detailed in the section **Module-Level Status** below.

The migration of completed definitions and their supporting shape tests to **[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)** has started. See the section **Roadmap** below, which also addresses the considered strategy to addressing TypeScript 1.8.x compatible definitions.

For added clarity, this repo is _not intended_ as a permanent source for definition files to be used in the regular course of working with D3 in TypeScript. The plan is to retire this repo after successful migration to DefinitelyTyped and keep it only for historic reference.

## Roadmap

### Completion of Module Definitions

_to be added_

### Migration to DefinitelyTyped

_to be added_

### TypeScript 1.8.x Compatible Definitions

_to be added_

## Contributing

_to be added (including ref to Contributing.md)_

Details can be found [here](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/CONTRIBUTING.md).

## Module-Level Status

First of, 

* as long as a repo does not have a test file flagged as complete, the content is available for review and comment, but not considered stable. Self-evidently, changes may also result from changes to D3 itself. 

* starting with the **D3 Version 4** release, D3 provides substantial flexibility with regard to _(un)bundling_ as well as the choice between _vanilla_ and _mondule import_ use. The definitions in this repo are written as external modules/UMD module definitions.
Ambient declarations are only used, when required for module augmentation (e.g. **d3-transition** extending the `Selection` interface of **d3-selection**).

The question of exporting to a `d3` **global** for _vanilla_ use, is somewhat related to the potential use of `export as namespace d3` in UMD module definitions.
The [D3 standard bundle definitions file](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3/index.d.ts) contained in this repo currently re-exports the modules, listed in
the next section. It also exposes `d3` **global** which can be used, where the module is not imported, but definitions are included by reference. The global is exposed using `export as namespace d3`.
Note that, this is _currently_ not possible at module level, as it creates a duplicate identifier error for `d3`.

Please, note that the definition and test files in this repo are currently using relative paths.
This was done as an interim step to focus on the D3-related aspects of this effort (including the experimental `this` typing). See [issue #1 regarding definitions discovery/deployment mechanism](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/1).


**Note**: All references to "Test File" below should be read as follows. The typescript files should compile without errors to indicate the internal consistency of the typescript definitions.
I.e. they are only shape tests as is the DefinitelyTyped tradition. They are expressly not meant to be used with a test runner as functional tests. A grunt-task using the dev-dependency typescript@2.0.0 version is currently used to perform the compilation tests.

### D3 Standard Bundle Modules

#### d3-array

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-array/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-array/d3-array-test.ts)

#### d3-axis

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-axis/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-axis/d3-axis-test.ts)

#### d3-brush

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-brush/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-brush/d3-brush-test.ts)

#### d3-chord

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-chord/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-chord/d3-chord-test.ts)

_Note:_ Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used accessor functions in RibbonGenerator. The `this` context depends on the context bound when invoking the
RibbonGenerator with data. I.e. it can be global object, undefined, a custom object or anything explicitly bound using `.call(...)` et al.
The latter is the case e.g. when using RibbonGenerator to create the path string in conjunction with a `Selection` or `Transition` for SVGPathElements' `attr(...)` callbacks.

#### d3-collection

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-collection/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-collection/d3-collection-test.ts)

#### d3-color

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-color/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-color/d3-color-test.ts)

#### d3-dispatch

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-dispatch/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-dispatch/d3-dispatch-test.ts)

_Note_: Utilizes `this`-typing (criticality: _medium_)

#### d3-drag

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-drag/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-drag/d3-drag-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-dsv

- [ ] Definition File
- [ ] Test File

#### d3-ease

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-ease/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

#### d3-force

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-force/index.d.ts) (*draft*)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

_Note_: Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used for context-binding of event handler to Simulation (using `Simulation.on(...)`).


#### d3-format

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-format/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-format/d3-format-test.ts)

#### d3-geo

- [ ] Definition File
- [ ] Test File

#### d3-hierarchy

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-hierarchy/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-hierarchy/d3-hierarchy-test.ts)

#### d3-interpolate

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-interpolate/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-interpolate/d3-interpolate-test.ts)

#### d3-path

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-path/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-path/d3-path-test.ts)

#### d3-polygon

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-polygon/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-polygon/d3-polygon-test.ts)

#### d3-quadtree

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-quadtree/index.d.ts)
- [x] Test File

#### d3-queue

- [ ] Definition File
- [ ] Test File

#### d3-random

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-random/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-random/d3-random-test.ts)

#### d3-request

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-request/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-request/d3-random-test.ts)

#### d3-scale

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-scale/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-scale/d3-scale-test.ts)

#### d3-selection

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-selection/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-selection/d3-selection-test.ts)

See [issue 2 BaseType definition for selection/transition elements](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/2).

_Note:_ Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-shape

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-shape/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-shape/d3-shape-test.ts)

_Note:_ Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used for accessor functions in Arc, Pie, Symbol, Stack. The `this` context depends on the context bound when invoking the
respective generator with data. I.e. it can be global object, undefined, a custom object or anything explicitly bound using `.call(...)` et al.
The latter is the case e.g. when using `symbol` or `arc` to create the path string in conjunction with a `Selection` or `Transition` for SVGPathElements' `attr(...)` callbacks.  

#### d3-time

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time/d3-time-test.ts)

#### d3-time-format

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time-format/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time-format/d3-time-format-test.ts)

#### d3-timer

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-timer/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-timer/d3-timer-test.ts)

#### d3-transition

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-transition/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-transition/d3-transition-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-voronoi

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-voronoi/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-voronoi/d3-voronoi-test.ts)

#### d3-zoom

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-zoom/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-zoom/d3-zoom-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.


## Related Contributions

This repo benefits from the original work on [**D3js 3.x** typings on DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/d3) for the file _d3.d.ts_ and its tests _d3-test.ts_.
By implication the debt is to all its contributors with primary listed responsibility of [Alex Ford](https://github.com/gustavderdrache) and [Boris Yankov](https://github.com/borisyankov).
