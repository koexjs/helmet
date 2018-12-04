# koa-helmet

[![NPM version](https://img.shields.io/npm/v/@zcorky/koa-helmet.svg?style=flat)](https://www.npmjs.com/package/@zcorky/koa-helmet)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/koa-helmet.svg?style=flat)](https://coveralls.io/r/zcorky/koa-helmet)
[![Dependencies](https://david-dm.org/@zcorky/koa-helmet/status.svg)](https://david-dm.org/@zcorky/koa-helmet)
[![Build Status](https://travis-ci.com/zcorky/koa-helmet.svg?branch=master)](https://travis-ci.com/zcorky/koa-helmet)
![license](https://img.shields.io/github/license/zcorky/koa-helmet.svg)
[![issues](https://img.shields.io/github/issues/zcorky/koa-helmet.svg)](https://github.com/zcorky/koa-helmet/issues)

> helmet for Koa, wrapper with helmet.

### Install

```
$ npm install @zcorky/koa-helmet
```

### Usage

```javascript
// See more in test
import helmet from '@zcorky/koa-helmet';

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