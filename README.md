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
