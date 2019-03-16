import { promisify } from 'util';
import { Context } from 'koa';
import * as helmet from 'helmet';
// utils
export * from './utils';

declare module 'http' {
  export interface IncomingMessage {
    secure: boolean;
  }
}

export type Handler = (ctx: Context, next: () => Promise<void>) => Promise<void>;

export default (options?: helmet.IHelmetConfiguration) => {
  const helmetPromise = promisify(helmet.call(null, options));

  return async function koexHelmet(ctx: Context, next: () => Promise<void>) {
    ctx.req.secure = ctx.request.secure;
    return helmetPromise(ctx.req, ctx.res).then(next);
  };
};
