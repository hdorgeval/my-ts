# my-ts
fluent API for TypeScript

![npm](https://img.shields.io/npm/v/my-ts.svg)
[![devDependency Status](https://david-dm.org/hdorgeval/my-ts/dev-status.svg)](https://david-dm.org/hdorgeval/my-ts?type=dev)
[![dependency Status](https://david-dm.org/hdorgeval/my-ts/status.svg)](https://david-dm.org/hdorgeval/my-ts)

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