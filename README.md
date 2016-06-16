# D3 Version 4 Typescript Definition Files

## Purpose

This repo is intended as a staging area for typescript definitions related to the upcoming release of [D3js](https://github.com/d3/d3) version 4.x.

Its content is _work in progress_ and intended to be rolled into a contribution to DefinitelyTyped or comparable community effort. The repo is **not intended** as a source for definition files to be used in the regular course of working with D3 in typescript.

The definitions are currently written on a per module basis in reference to the now separeted **D3** modules.

## General Status

At the time of creating this repository **D3 version 4** is in **alpha stage** and under active development. Release notes are under preparation.

By extension, any definition files contained herein are to be considered with care.

Furthermore, where indicated, some features of the definition files may be considered experimental. Specifically, some definition files make use of the ability to type the `this` context of a function and depend on new features of the **typescript compiler** (currently typescript@next (1.9.0-dev)).

With respect to **D3**, this ability, may be of specific interest when working with [selections](https://github.com/d3/d3-selection) and [transitions](https://github.com/d3/d3-transition), where the current DOM element is provided through the this context.

A further separate consideration, is the question of flexibly using typescript definitions for *D3*, given the bundling scenarios contemplated by the D3 release.


## Module-Level Status

_Note_: All references to "Test File" below should be read as typescript files that should compile without errors to indicated the consistency of the typescript definitions.
They are not meant to be used with a test runner as functional tests.

### d3-color

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-color/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-color/d3-color-test.ts)

### d3-dispatch

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-dispatch/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-dispatch/d3-dispatch-test.ts)

### d3-ease

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-ease/index.d.ts)
- [ ] Test File

### d3-interpolate

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-interpolate/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-interpolate/d3-interpolate-test.ts)

### d3-selection

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-selection/index.d.ts) (_draft_)
- [ ] Test File

### d3-time

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-time/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-time/d3-time-test.ts)

### d3-timer

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-timer/index.d.ts)
- [x] [Test File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-timer/d3-timer-test.ts)

### d3-transition

- [x] [Definition File](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-transition/index.d.ts) (_draft_)
- [ ] Test File

