## Contributing Missing Definitions

### General Considerations

Missing definitions for modules forming part of the **D3 Standard Bundle** can be quickly identified by checking the [module listing in the README](https://github.com/tomwanzek/d3-v4-definitelytyped#d3-standard-bundle-modules).

Should you be interested in contributing a missing definition, please check the status of the related issues. Each outstanding definition and the related tests, respectively, have corresponding main issues carrying the module name as a label as well as the **help wanted** label.

Please, prioritize modules against the **Standard Bundle Modules (TypeScript 2)** milestone. Modules flagged to the milestone **Optional Scope Modules** are secondary.

Contributions should be submitted as pull requests on a per module basis supported by shape tests.

As a starting point for a new **definition**, please use the skeleton `index.d.ts` file contained in the subfolder of [src](https://github.com/tomwanzek/d3-v4-definitelytyped/tree/master/src) carrying the module name. E.g. `/src/d3-queue/index.d.ts` for the d3-queue module.

As a starting point for the **corresponding test file definition**, please use the skeleton test file contained in the subfolder of [tests](https://github.com/tomwanzek/d3-v4-definitelytyped/tree/master/tests) carrying the module name. E.g. `/tests/d3-queue/d3-queue-test.ts` for the d3-queue module.

### Definition Structure and Style Guide

Please use completed definition and test files contained in this repo as reference points when drafting new
definitions and their supporting tests.

Most importantly please adhere to the following,

* all definitions should be written as external modules
* use `declare module` structures only when required to implement module augmentations (see [d3-transition](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-transition/index.d.ts) as an example)
* where applicable, make use of `this` typing for function contexts where D3 makes specific provisions for binding (see e.g. [d3-selection](https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/src/d3-selection/index.d.ts) and the approach to DOM Element binding)
* use generics to template and enforce cross interface constraints on typing, where appropriate
* include overloads of functions/methods as necessary to optimize the specificity of signatures
* review return types of methods/functions and use union types where appropriate (include `undefined` or `null` where the API documentation indicates specific handled 'failure mode' return values)
* classes and interfaces should use PascalCase (do not prefix interface names with `I`)
* variable, property and function/method names should use camelCase
* use spaces not tabs for indentation
* use single quotes not double quotes for string literals
* 4 spaces should be used for indentation

At present, do not yet add a line like `export namespace as d3;` to the definition to expose a `d3` **global** with the module members (_UMD module_). Please refer to this [issue](https://github.com/tomwanzek/d3-v4-definitelytyped/issues/41) for an explanation or to comment.

With respect to including **comments** providing a description of an exported module member (variable, function, interface etc.):
* use JSDoc style comments,
* ensure the content is consistent with the latest API documentation for the respective member

_Note:_ Presently, JSDoc comments are very much appreciated, but have not been prioritized relative to completing a full set of definitions and shape test coverage.

For purposes of **attribution and continuity of support**, this repo took the following approach. DefinitielyTyped uses a header comment of the structure shown below. This header is also a starting point for the definitions fed into the @types organizaion from DefinitelyTyped. I have followed the practice of adding the primary author of a new definition contributed to this repo as the third author in the `Definitions by` line. The original authors of D3 v3.x defintions are retained as a nod and for continuity.

```
// Type definitions for D3JS d3-queue module 3.0.1
// Project: https://github.com/d3/d3-queue/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
```

### Tests and Testing

The test file should have a complete set of shape tests in the spirit of DefinitelyTyped covering the proposed definitions.

Tests should cover all exported members of a module. Where overloads of functions/methods have been included, each overload should have a corresponding test.

In order to test return values functions/methods and the types of interface properties, ensure that you test the assignment to **typed** variable. Ideally, where the definition implies chainability, test chainability by assignment at the method overloaded signature level. This ensures that each overloaded signature in the definition has the correct return type for chaining.

The tests must successfully compile when running `npm test`. The test script also runs `tslint`. The submitted definitions and tests should be free of linting errors.

When submitting a pull request **Travis CI** will be triggered for this repo.
