# helmet

[![NPM version](https://img.shields.io/npm/v/@koex/helmet.svg?style=flat)](https://www.npmjs.com/package/@koex/helmet)
[![Coverage Status](https://img.shields.io/coveralls/koexjs/helmet.svg?style=flat)](https://coveralls.io/r/koexjs/helmet)
[![Dependencies](https://img.shields.io/david/koexjs/helmet.svg)](https://github.com/koexjs/helmet)
[![Build Status](https://travis-ci.com/koexjs/helmet.svg?branch=master)](https://travis-ci.com/koexjs/helmet)
![license](https://img.shields.io/github/license/koexjs/helmet.svg)
[![issues](https://img.shields.io/github/issues/koexjs/helmet.svg)](https://github.com/koexjs/helmet/issues)

> helmet for koa extend, wrapper with helmet.

### Install

```
$ npm install @koex/helmet
```

### Usage

```javascript
// See more in test
import helmet from '@koex/helmet';

import * as Koa from 'koa';
const app = new Koa();

app.use(helmet());

app.use(ctx => {
  ctx.body = 'Hello, World!';
});

app.listen(8000, '0.0.0.0', () => {
  console.log('koa server start at port: 8000');
});
```

### Related
* [helmet](https://github.com/helmetjs/helmet)
* [koa-helmet](https://github.com/venables/koa-helmet)