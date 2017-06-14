# my-ts
fluent API for TypeScript

![travis build](https://img.shields.io/travis/hdorgeval/my-ts.svg)
![npm](https://img.shields.io/npm/v/my-ts.svg)
[![devDependency Status](https://david-dm.org/hdorgeval/my-ts/dev-status.svg)](https://david-dm.org/hdorgeval/my-ts?type=dev)
[![dependency Status](https://david-dm.org/hdorgeval/my-ts/status.svg)](https://david-dm.org/hdorgeval/my-ts)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![codecov](https://codecov.io/gh/hdorgeval/my-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/hdorgeval/my-ts)
[![npm badge](https://nodei.co/npm/my-ts.png)](https://npmjs.org/package/my-ts)

## Prerequisites

This library have dependencies that require Node 7.0.8 or higher, together with NPM 4.2.0 or higher.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install my-ts --save-dev
```

## Usage

```typescript
const object: number[] = ...
if (my(object).isNullOrUndefinedOrEmpty) {
    //code omitted for brevity
}
```