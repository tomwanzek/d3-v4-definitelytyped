# D3 Version 4 Typescript Definition Files

## Summary

This repo is intended as a staging area for typescript definitions supporting the latest major release of **[D3js](https://github.com/d3/d3) (i.e. version 4.1.x)** by [Mike Bostock](https://github.com/mbostock).

The definitions are written on a per module basis in reference to the now separated D3 modules. Definitions in the `master` branch are written on the basis of **TypeScript 2.0.x**.
In particular, they make use of a new feature which allows the typing of the `this` context of functions. This ability is particulary beneficial for D3, as D3 frequently binds the `this` context of
functions to the _DOM Element_ being manipulated. The definition files are written as external modules/UMD modules.

The intended complete scope of this project covers the modules which are part of the **standard D3 bundle** as defined by Mike Bostock. On a best efforts basis, consideration may be given to a small number of D3 modules which are
not part of the standard bundle, but are  maintained by Mike Bostock. Specifically, this optional scope may include **d3-selection-multi** and **d3-scale-chromatic**.

The content is _work in progress_ as detailed in the section **[Module-Level Status](#module-level-status)** below.

The migration of completed definitions and their supporting shape tests to **[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)** has started. See the section **[Roadmap](#roadmap)** below, which also lines out the considered strategy to addressing TypeScript 1.8.x compatible definitions.

For added clarity, this repo is _not intended_ as a permanent source for definition files to be used in the regular course of working with D3 in TypeScript. As a result, this repo currently does not contain instructions for definitions acquisition using **@types**, **typings**, or **tsd**. The plan is to retire this repo after successful migration to DefinitelyTyped and keep it only for historic reference.

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

While most modules comprising the **standard D3 bundle** now have a complete working TypeScript 2 definition with accompanying tests, there is some remaining work to be done.

_(a) Open Modules_

The [Module-Level Status](#module-level-status) section provides a quick glance at the modules, which do not yet have a complete initial definition with tests.

For each of these modules there is one issue for the definition and one for the related tests. Should you wish
to contribute by writing a definition that is flagged as not yet started, please check the related issue for a current status. The issue is also mapped to a milestone to give a sence of prioritization.

The **Standard Bundle Module (TypeScript 2)** milestone takes priority over the **Optional Scope Modules** milestone.

Beyond that, please refer to the [Contributing](#contributing) section.

_(a) Open Issues_

The issues in this repo, broadly fall into three categories:

1. Overarching issues related to how TypeScript definitions are written and/or deployed for easy use/maintenance by developers,
2. Module-specific 'functional' issues, and
3. Project management issues (progress tracking etc).
 
Please review and contribute to these open issues as you see fit.

**Important:** As described in the next sub-sections, this repo is in the process of being migrated to DefinitelyTyped.
If an open module-specific issue for an otherwise complete module is critical/severe, I may hold off on migrating the affected module. Otherwise, preference will be given to migrating the module and carrying the related open issue over to DefinitelyTyped.


### Migration to DefinitelyTyped

The process of moving essentially complete TypeScript 2 definitions and tests over to **DefinitelyTyped/types-2.0** branch has started.

A key rationale for using **DefinitelyTyped** going forward is that, it serves as the primary feeder source for the **@types organization**. Aspirationally, this means the resulting definitions should be easily deployable using, e.g:

```
npm install @types/d3-selection --save
```

The main DefinitelyTyped issue thread for the migration-related questions is [Request for d3.js API update from v3 to v4.1.0](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9936). This thread contains a more in depth, live disscussion of the mechanics related to the migration.

The section [Module-Level Status](#module-level-status) gives a quick migration status indication by module. A slightly more granular breakout can be found [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56).

### TypeScript 1.8.x Compatible Definitions

Under the milestone **Standard Bundle Modules (TypeScript 1.8.x)** consideration is given to the preparation of definitions/tests which do not require the latest features of TypeScript 2.

The intent is to strip the unsupported features (e.g. `this` typing of function contexts) out, with the aim of keeping the definitions structurally as comparable as possible. A suitable wrapping of the module definitions may be required.

This way the impact of upgrading a D3-consuming code base from TS 1.8.x to TS 2.x should be minimal.

These definitions could then be contributed to what is currently the **DefinitelyTyped/master** branch.

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

_(in alphabetical order)_

#### d3-array

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-array/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-array/d3-array-test.ts)

#### d3-axis

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-axis/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-axis/d3-axis-test.ts)

#### d3-brush

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-brush/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-brush/d3-brush-test.ts)

#### d3-chord

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-chord/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-chord/d3-chord-test.ts)

_Note:_ Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used accessor functions in RibbonGenerator. The `this` context depends on the context bound when invoking the
RibbonGenerator with data. I.e. it can be global object, undefined, a custom object or anything explicitly bound using `.call(...)` et al.
The latter is the case e.g. when using RibbonGenerator to create the path string in conjunction with a `Selection` or `Transition` for SVGPathElements' `attr(...)` callbacks.

#### d3-collection

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-collection/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-collection/d3-collection-test.ts)

#### d3-color

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-color/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-color/d3-color-test.ts)

#### d3-dispatch

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-dispatch/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-dispatch/d3-dispatch-test.ts)

_Note_: Utilizes `this`-typing (criticality: _medium_)

#### d3-drag

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-drag/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-drag/d3-drag-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-dsv

- [ ] Definition File
- [ ] Test File

#### d3-ease

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-ease/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

#### d3-force

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-force/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-ease/d3-ease-test.ts)

_Note_: Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used for context-binding of event handler to Simulation (using `Simulation.on(...)`).


#### d3-format

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-format/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-format/d3-format-test.ts)

#### d3-geo

- [ ] Definition File
- [ ] Test File

#### d3-hierarchy

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-hierarchy/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-hierarchy/d3-hierarchy-test.ts)

#### d3-interpolate

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-interpolate/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-interpolate/d3-interpolate-test.ts)

#### d3-path

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-path/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-path/d3-path-test.ts)

#### d3-polygon

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-polygon/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-polygon/d3-polygon-test.ts)

#### d3-quadtree

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-quadtree/index.d.ts)
- [x] Test File

#### d3-queue

- [ ] Definition File
- [ ] Test File

#### d3-random

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-random/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-random/d3-random-test.ts)

#### d3-request

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-request/index.d.ts)
- [ ] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-request/d3-random-test.ts)

#### d3-scale

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-scale/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-scale/d3-scale-test.ts)

#### d3-selection

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-selection/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-selection/d3-selection-test.ts)

See [issue 2 BaseType definition for selection/transition elements](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/2).

_Note:_ Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-shape

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-shape/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-shape/d3-shape-test.ts)

_Note:_ Utilizes `this`-typing (criticality: _medium_)

`this`-typing is used for accessor functions in Arc, Pie, Symbol, Stack. The `this` context depends on the context bound when invoking the
respective generator with data. I.e. it can be global object, undefined, a custom object or anything explicitly bound using `.call(...)` et al.
The latter is the case e.g. when using `symbol` or `arc` to create the path string in conjunction with a `Selection` or `Transition` for SVGPathElements' `attr(...)` callbacks.  

#### d3-time

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time/d3-time-test.ts)

#### d3-time-format

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time-format/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time-format/d3-time-format-test.ts)

#### d3-timer

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-timer/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-timer/d3-timer-test.ts)

#### d3-transition

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-transition/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-transition/d3-transition-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

#### d3-voronoi

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-voronoi/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-voronoi/d3-voronoi-test.ts)

#### d3-zoom

_Migration in progress. Check [here](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/56) for detailed status._

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-zoom/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-zoom/d3-zoom-test.ts)

_Note_: Utilizes `this`-typing (criticality: _high_)

`this`-typing is used for context-binding to DOM element.

### Optional Scope Modules

_(in alphabetical order)_

#### d3-scale-chromatic

- [ ] Definition File
- [ ] Test File

#### d3-selection-multi

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
