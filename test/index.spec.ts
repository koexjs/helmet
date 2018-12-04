import * as Koa from 'koa';
import * as request from 'supertest';
// import { get, post } from '@zcorky/koa-router';
import 'should';

import helmet from '../src';
import * as helmetAll from '../src';

describe('koa static', () => {
  // const options = {
  //   dir: path.join(__dirname, '..'),
  // };

  it('it works with the default helmet call', async () => {
    const app = new Koa();
    app.use(helmet());

    app.use((ctx) => {
      ctx.body = 'Hello world!';
    });

    await request(app.listen())
      .get('/')
      // dnsPrefetchControl
      .expect('X-DNS-Prefetch-Control', 'off')
      // frameguard
      .expect('X-Frame-Options', 'SAMEORIGIN')
      // hsts: Not enabled in HTTP
      .expect('Strict-Transport-Security', 'max-age=15552000; includeSubDomains')
      // ieNoOpen
      .expect('X-Download-Options', 'noopen')
      // noSniff
      .expect('X-Content-Type-Options', 'nosniff')
      // xssFilter
      .expect('X-XSS-Protection', '1; mode=block')
      .expect(200);
  });

  it('it sets individual headers properly', async () => {
    const app = new Koa();
    app.use(
      helmetAll.hsts({
        force: true,
      }),
    );
    app.use(helmetAll.noCache());
    app.use(helmetAll.xssFilter());
    app.use(helmetAll.frameguard(false));
    app.use(helmetAll.noSniff());
    app.use(
      helmetAll.hpkp({
        maxAge: 1000,
        sha256s: ['AbCdEf123=', 'ZyXwVu456='],
        includeSubdomains: true,
        reportUri: 'http://example.com',
      }),
    );

    app.use(ctx => {
      ctx.body = 'Hello world!';
    });

    await request(app.listen())
      .get('/')
      // noCache
      .expect(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, proxy-revalidate'
      )
      .expect('Pragma', 'no-cache')
      .expect('Expires', '0')
      // hsts
      .expect(
        'Strict-Transport-Security',
        'max-age=15552000; includeSubDomains',
      )
      // xssFilter
      .expect('X-XSS-Protection', '1; mode=block')
      // frameguard
      .expect('X-Frame-Options', 'SAMEORIGIN')
      // noSniff
      .expect('X-Content-Type-Options', 'nosniff')
      // hpkp
      .expect(
        'Public-Key-Pins',
        'pin-sha256="AbCdEf123="; pin-sha256="ZyXwVu456="; max-age=1000; includeSubDomains; report-uri="http://example.com"'
      );
  });
});
