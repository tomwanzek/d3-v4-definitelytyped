# D3 Version 4 Typescript Definition Files

[![Build Status](https://travis-ci.org/tomwanzek/d3-v4-definitelytyped.svg?branch=master)](https://travis-ci.org/tomwanzek/d3-v4-definitelytyped)

## Summary

This repo is intended as a staging area for typescript definitions supporting the latest major release of **[D3js](https://github.com/d3/d3) (i.e. version 4.x)** by [Mike Bostock](https://github.com/mbostock).

The definitions are written on a per module basis in reference to the now separated D3 modules. Definitions in the `master` branch are written on the basis of **TypeScript 2.x**.
In particular, they make use of a new feature which allows the typing of the `this` context of functions. This ability is particulary beneficial for D3, as D3 frequently binds the `this` context of
functions to the _DOM Element_ being manipulated. The definition files are written as external modules/UMD modules.

The scope of this project covers the modules which are part of the **standard D3 bundle** as defined by Mike Bostock. On a best efforts basis, consideration may be given to a small number of D3 modules which are
not part of the standard bundle, but are  maintained by Mike Bostock.

Starting with Release Candidate 2.0.0-rc.2 work on the D3 standard bundle modules is considered functionally complete. For a module-by-module status see section **[Module-Level Status](#module-level-status)** below.

The migration of completed definitions and their supporting shape tests to **[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)** has progressed well for the majority of the modules. This means that modules which have been successfully migrated, now have a supporting definition in the **npm @types** organization. These definitions can be used in conjunction with e.g. `npm install @types/d3-selection --save`. For the remaining modules and the definition for the D3 standard bundle itself, migration is still in progress. See the section **[Roadmap](#roadmap)** below for a further discussion.

For added clarity, this repo is _not intended_ as a permanent source for definition files to be used in the regular course of working with D3 in TypeScript. As a result, this repo currently does not contain instructions for definitions acquisition using **typings**, or **tsd** (legacy). The plan is to retire this repo after successful migration to DefinitelyTyped and keep it only for historic reference.

## Content

* [Roadmap](#roadmap)
* [Module-Level Status](#module-level-status)
* [Contributing](#contributing)
* [Related Contributions](related-contributions)

## Roadmap

This section provides a high-level view of the road ahead to completed definitons for D3 4.1.x, which can be accessed by developers using standard definition acquisition methods:

* [Completion of Module Definitions](#completion-of-module-definitions)
* [Migration to DefinitelyTyped](migration-to-definitelytyped)
* TypeScript 1.8.x Compatible Definitions

### Completion of Module Definitions

The modules comprising the **standard D3 bundle** now have a complete working TypeScript 2 definition with accompanying tests.

A TypeScript related issue is open and tracked which pertains to the generation of a `d3` global for plain-vanilla script use of individual D3 modules.

Adding complete JSDoc comments is a pending task for most modules. Given the effort involved in keeping this repo and DefinitelyTyped in sync during the migration process, completing this task might be better solved after a successfully completed migration.

_(a) Open Modules (Optional Scope)_

The [Module-Level Status](#module-level-status) section provides a quick glance at the modules, which do not yet have a complete initial definition with tests. Currently, this affects only a limited number of optional scope modules, which do not form part of the D3 standard bundle.

For each of these modules there is one open issue for the definition and one for the related tests. Should you wish
to contribute by writing a definition that is flagged as not yet started, please check the related issue for a current status. The issue is also mapped to a milestone to give a sense of prioritization.


Beyond that, please refer to the [Contributing](#contributing) section.

_(b) Open Issues_

The issues in this repo, broadly fall into three categories:

1. Overarching issues related to how TypeScript definitions are written and/or deployed for easy use/maintenance by developers,
2. Module-specific 'functional' issues, and
3. Project management issues (progress tracking etc).

Please review and contribute to these open issues as you see fit.

**Important:** As described in the next sub-sections, this repo is in the process of being migrated to DefinitelyTyped.
If an open module-specific issue for an otherwise complete module is critical/severe, I may hold off on migrating the affected module. Otherwise, preference will be given to migrating the module and carrying the related open issue over to DefinitelyTyped.


### Migration to DefinitelyTyped

The process of moving essentially complete TypeScript 2 definitions and tests over to **DefinitelyTyped/types-2.0** branch has, in general, progressed well.

A key rationale for using **DefinitelyTyped** going forward is that, it serves as the primary feeder source for the **@types organization**. Depending on the migration status of the individual module definitions, this means the resulting definitions are easily deployable using, e.g:

```
npm install @types/d3-selection --save
```

The main DefinitelyTyped issue thread for the migration-related questions is [Request for d3.js API update from v3 to v4.1.0](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9936). This thread contains a more in depth, live disscussion of the mechanics related to the migration.

The section [Module-Level Status](#module-level-status) gives a quick migration status indication by module. A slightly more granular breakout can be found [here for D3 standard bundle modules](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) and [here for the optional scope modules](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/105).

### TypeScript 1.8.x Compatible Definitions

Under the milestone **Standard Bundle Modules (TypeScript 1.8.x)** consideration is given to the preparation of definitions/tests which do not require the latest features of TypeScript 2.

The intent is to strip the unsupported features (e.g. `this` typing of function contexts) out, with the aim of keeping the definitions structurally as comparable as possible. A suitable wrapping of the module definitions may be required.

**IMPORTANT:** Activities related to this milestone are _currently on hold_, until the remaining migration related questions have been sufficiently resolved.

See specifically [this issue comment](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9936#issuecomment-234431988) for DefinitelyTyped related questions.

## Module-Level Status

* [D3 Standard Bundle Modules](#d3-standard-bundle-modules)
* [Optional Scope Modules](#optional-scope-modules)

First of:

* As long as a D3 module does not have a definition _and_ test file flagged as complete, the definition is available for review and comment, but not considered stable. Self-evidently, changes may also result from changes to D3 itself.

* Starting with the D3 version 4 release, D3 provides substantial flexibility with regard to _(un)bundling_ as well as the choice between _vanilla_ and _module import_ use. The definitions in this repo are written as external modules/UMD module definitions.
Ambient declarations are only used, when required for module augmentation (e.g. **d3-transition** extending the `Selection` interface of **d3-selection**).

* The availability of the `d3` **global** for _vanilla_ use, is somewhat related to the potential use of `export as namespace d3` in UMD module definitions.
The [D3 standard bundle definitions file](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3/index.d.ts) contained in this repo re-exports the modules listed in
the next section. It also exposes a `d3` **global** which can be used, where the module is not imported, but definitions are included by reference. The global is exposed using `export as namespace d3`.

* The individual D3 modules, currently _do not_ merge into the `d3` **global** when used as unbundled vanilla scripts. This is a known [issue](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/41) with a duplicate identifier compile error created by using `export as namespace d3` at the constituent module level.

* The definition and test files in this repo are currently using relative paths.
This was done as an interim step to focus on the D3-related aspects of this effort.

**Important**: All references to "Test File" below should be read as follows. The typescript files should compile without errors to indicate the internal consistency of the typescript definitions.
I.e. they are only shape tests as is the DefinitelyTyped tradition. They are expressly not meant to be used with a test runner as functional tests.

### D3 Standard Bundle Modules

#### D3 Standard Bundle Definition

_Migration on hold. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/116) for detailed status._

This is a definitions file for the bundle which re-exports the constituent modules and exposes a `d3` global for vanilla script use.

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3/d3-test.ts)

_(individual modules in alphabetical order)_

#### d3-array

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-array/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-array/d3-array-test.ts)

#### d3-axis

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-axis/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-axis/d3-axis-test.ts)

#### d3-brush

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-brush/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-brush/d3-brush-test.ts)

#### d3-chord

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-chord/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-chord/d3-chord-test.ts)

_Note:_ Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used accessor functions in RibbonGenerator. The `this` context depends on the context bound when invoking the
RibbonGenerator with data. I.e. it can be global object, undefined, a custom object or anything explicitly bound using `.call(...)` et al.
The latter is the case e.g. when using RibbonGenerator to create the path string in conjunction with a `Selection` or `Transition` for SVGPathElements' `attr(...)` callbacks.

#### d3-collection

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-collection/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-collection/d3-collection-test.ts)

#### d3-color

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-color/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-color/d3-color-test.ts)

#### d3-dispatch

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-dispatch/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-dispatch/d3-dispatch-test.ts)

_Note_: Utilizes `this`-typing (criticality: _medium_)

#### d3-drag

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-drag/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-drag/d3-drag-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-dsv

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-dsv/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-dsv/d3-dsv-test.ts)

#### d3-ease

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-ease/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

#### d3-force

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-force/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

_Note_: Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used for context-binding of event handler to Simulation (using `Simulation.on(...)`).


#### d3-format

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-format/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-format/d3-format-test.ts)

#### d3-geo

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-geo/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-geo/d3-geo-test.ts)

#### d3-hierarchy

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-hierarchy/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-hierarchy/d3-hierarchy-test.ts)

#### d3-interpolate

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-interpolate/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-interpolate/d3-interpolate-test.ts)

#### d3-path

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-path/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-path/d3-path-test.ts)

#### d3-polygon

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-polygon/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-polygon/d3-polygon-test.ts)

#### d3-quadtree

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-quadtree/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-quadtree/d3-quadtree-test.ts)

#### d3-queue

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-queue/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-queue/d3-queue-test.ts)

#### d3-random

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-random/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-random/d3-random-test.ts)

#### d3-request

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-request/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-request/d3-random-test.ts)

#### d3-scale

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-scale/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-scale/d3-scale-test.ts)

#### d3-selection

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-selection/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-selection/d3-selection-test.ts)

_Note:_ Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-shape

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-shape/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-shape/d3-shape-test.ts)

_Note:_ Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used for accessor functions in Arc, Pie, Symbol, Stack. The `this` context depends on the context bound when invoking the
respective generator with data. I.e. it can be global object, undefined, a custom object or anything explicitly bound using `.call(...)` et al.
The latter is the case e.g. when using `symbol` or `arc` to create the path string in conjunction with a `Selection` or `Transition` for SVGPathElements' `attr(...)` callbacks.

#### d3-time

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time/d3-time-test.ts)

#### d3-time-format

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time-format/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time-format/d3-time-format-test.ts)

#### d3-timer

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-timer/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-timer/d3-timer-test.ts)

#### d3-transition

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-transition/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-transition/d3-transition-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-voronoi

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-voronoi/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-voronoi/d3-voronoi-test.ts)

#### d3-zoom

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-zoom/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-zoom/d3-zoom-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

### Optional Scope Modules

_(in alphabetical order)_

#### d3-geo-projection

- [ ] Definition File
- [ ] Test File

#### d3-hexbin

- [ ] Definition File
- [ ] Test File

#### d3-hsv

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/105) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-hsv/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-hsv/d3-hsv.ts)

#### d3-sankey

- [ ] Definition File
- [ ] Test File

#### d3-scale-chromatic

- [ ] Definition File
- [ ] Test File

#### d3-selection-multi

_Available through @types. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/105) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-selection-multi/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-selection-multi/d3-selection-multi-test.ts)

#### d3-tile

- [ ] Definition File
- [ ] Test File


## Contributing

You can contribute to this repository in several ways:

* help to identify or resolve specific issues with the existing definitions,
* review the definitions and point out areas of improvement, or
* provide pull requests for as yet missing definitions.

For details of how to contribute, please see [here](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/CONTRIBUTING.md).

**Important:**
Contributing to this repo, means your contribution is intended to be merged into DefinitelyTyped. Once a module indicates completed migration from here to DefinitelyTyped, all new issues should be opened on DefinitelyTyped. Any related outstanding issues will be migrated over to DefinitelyTyped alond-side the module.

## Related Contributions

This repo benefits from the original work on [**D3js 3.x** typings on DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/d3) for the file _d3.d.ts_ and its tests _d3-test.ts_.
By implication the debt is to all its contributors with primary listed responsibility of [Alex Ford](https://github.com/gustavderdrache) and [Boris Yankov](https://github.com/borisyankov).
