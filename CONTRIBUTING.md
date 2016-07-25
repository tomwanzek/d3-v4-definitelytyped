_drafting_

## Contributing Missing Definitions

### General Considerations

Missing definitions for modules forming part of the **D3 Standard Bundle** can be quickly identified by checking the [module listing in the README](https://github.com/tomwanzek/d3-v4-definitelytyped#d3-standard-bundle-modules).

Should you be interested in contributing a missing definition, please check the status of the related issues. Each outstanding definition and the related tests, respectively, have corresponding main issues carrying the module name as a label as well as the **help wanted** label.

Please, prioritize modules against the **Standard Bundle Modules (TypeScript 2)** milestone. Modules flagged to the milestone **Optional Scope Modules** are secondary.

Contributions should be submitted as pull requests on a per module basis supported by shape tests.

As a starting point for a new **definition**, please use the skeleton `index.d.ts` file contained in the subfolder of [src](https://github.com/tomwanzek/d3-v4-definitelytyped/tree/master/src) carrying the module name. E.g. `/src/d3-queue/index.d.ts` for the d3-queue module.

As a starting point for the **corresponding test file definition**, please use the skeleton test file contained in the subfolder of [tests](https://github.com/tomwanzek/d3-v4-definitelytyped/tree/master/tests) carrying the module name. E.g. `/tests/d3-queue/d3-queue-test.ts` for the d3-queue module.

### Style Guide

_to be completed_

### Attribution

_to be completed_

### Testing

The test file should have a complete set of shape tests covering the proposed definitions. The tests must successfully compile when running `npm test`. The test script also runs `tslint`. The submitted definitions and tests should be free of linting errors.

When submitting a pull request **Travis CI** will be triggered for this repo.
