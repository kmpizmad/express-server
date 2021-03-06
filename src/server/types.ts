import {
  Request,
  Response,
  NextFunction,
  RequestHandler,
  Router,
} from 'express';

export interface ServerConfiguration {
  middlewares: RequestHandler[];
  routes: Route[];
}

export type Route = {
  uri: string;
  handlers: (Router | NotFoundHandler | ErrorHandler)[];
  errorHandler: boolean;
};

export type Logging = { level: string; value?: string };

export type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export type NotFoundHandler = Controller;

export type ErrorHandler = Controller extends (...params: infer U) => infer R
  ? (err: Error, ...params: U) => R
  : never;

export type ControllerType = {
  req: Request;
  res: Response;
  next: NextFunction;
};

export type Message<T> = (T extends 'Error'
  ? Omit<Error, keyof MessageBase> & { type: string; code: number }
  : T extends 'Info'
  ? { data?: any }
  : never) &
  MessageBase;

/** @private */
interface MessageBase {
  name: string;
  message: string;
}
