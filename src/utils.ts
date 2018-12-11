import { promisify } from 'util';
import { Context } from 'koa';
import * as helmet from 'helmet';

/**
 * @summary Set policy around third-party content via headers
 * @param {helmet.IHelmetContentSecurityPolicyConfiguration} options The options
 * @return {RequestHandler} The Request handler
 */
export const contentSecurityPolicy = (options?: helmet.IHelmetContentSecurityPolicyConfiguration) => {
  const method = helmet.contentSecurityPolicy;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Stop browsers from doing DNS prefetching.
 * @param {helmet.IHelmetDnsPrefetchControlConfiguration} options The options
 * @return {RequestHandler} The Request handler
 */
export const dnsPrefetchControl = (options?: helmet.IHelmetDnsPrefetchControlConfiguration) => {
  const method = helmet.dnsPrefetchControl;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Prevent clickjacking.
 * @param {helmet.IHelmetFrameguardConfiguration} options The options
 * @return {RequestHandler} The Request handler
 */
export const frameguard = (options?: helmet.IHelmetFrameguardConfiguration | false) => {
  const method = helmet.frameguard;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Hide "X-Powered-By" header.
 * @param {helmet.IHelmetHidePoweredByConfiguration} options The options
 * @return {RequestHandler} The Request handler.
 */
export const hidePoweredBy = (options?: helmet.IHelmetHidePoweredByConfiguration) => {
  const method = helmet.hidePoweredBy;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Adds the "Public-Key-Pins" header.
 * @param {helmet.IHelmetHpkpConfiguration} options The options
 * @return {RequestHandler} The Request handler.
 */
export const hpkp = (options?: helmet.IHelmetHpkpConfiguration) => {
  const method = helmet.hpkp;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Adds the "Strict-Transport-Security" header.
 * @param {helmet.IHelmetHstsConfiguration} options The options
 * @return {RequestHandler} The Request handler.
 */
export const hsts = (options?: helmet.IHelmetHstsConfiguration) => {
  const method = helmet.hsts;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Add the "X-Download-Options" header.
 * @return {RequestHandler} The Request handler.
 */
export const ieNoOpen = () => {
  const method = helmet.ieNoOpen;
  const methodPromise = promisify(method.call(null));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Add the "Cache-Control" and "Pragma" headers to stop caching.
 * @return {RequestHandler} The Request handler.
 */
export const noCache = (options?: Object) => {
  const method = helmet.noCache;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Adds the "X-Content-Type-Options" header.
 * @return {RequestHandler} The Request handler.
 */
export const noSniff = () => {
  const method = helmet.noSniff;
  const methodPromise = promisify(method.call(null));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Adds the "Referrer-Policy" header.
 * @return {RequestHandler} The Request handler.
 */
export const referrerPolicy = (options?: helmet.IHelmetReferrerPolicyConfiguration) => {
  const method = helmet.referrerPolicy;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Mitigate cross-site scripting attacks with the "X-XSS-Protection" header.
 * @param {helmet.IHelmetXssFilterConfiguration} options The options
 * @return {RequestHandler} The Request handler.
 */
export const xssFilter = (options?: helmet.IHelmetXssFilterConfiguration) => {
  const method = helmet.xssFilter;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Adds the "Expect-CT" header.
 * @param {helmet.helmet.IHelmetExpectCtConfiguration} options
 * @returns {e.RequestHandler}
 */
export const expectCt = (options?: helmet.IHelmetExpectCtConfiguration) => {
  const method = helmet.expectCt;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}

/**
 * @summary Adds the "X-Permitted-Cross-Domain-Policies" header.
 * @param {helmet.helmet.IHelmetPermittedCrossDomainPoliciesConfiguration} options
 * @returns {express.RequestHandler}
 */
export const permittedCrossDomainPolicies = (options?: helmet.IHelmetPermittedCrossDomainPoliciesConfiguration) => {
  const method = helmet.permittedCrossDomainPolicies;
  const methodPromise = promisify(method.call(null, options));

  return (ctx: Context, next: () => Promise<void>) => {
    ctx.req.secure = ctx.request.secure;
    return methodPromise(ctx.req, ctx.res).then(next);
  };
}
