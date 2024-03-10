# rgb-color-yiq-value &middot; [![Test workflow status](https://github.com/ChrisCodesThings/rgb-color-yiq-value/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/rgb-color-yiq-value)](https://www.npmjs.com/package/@chriscodesthings/rgb-color-yiq-value) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Calculate the YIQ value of a color in RGB format**

## Install

```sh
npm install --save @chriscodesthings/rgb-color-yiq-value
```

## Use

```js
import isString from '@chriscodesthings/rgb-color-yiq-value';

console.log(rgbYIQValue(100, 149, 237)); // cornflowerblue
// => 144.381
```

## Syntax

```js
rgbYIQValue(r, g, b);
```

### Parameters

- *r, g, b*: red green and blue color components

### Return Value

Returns calculated YIQ value of the color.

## Description

Does what it says on the tin.