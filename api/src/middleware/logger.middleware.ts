import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const loggerService = new LoggerService(req.url.slice(1).split('/')[0]);

    loggerService.info(
      JSON.stringify({
        uri: `${req.method} ${req.url.split('?')[0]}`,
        headers: req.headers,
        query: req.query,
        body: req.body,
      }),
    );

    next();
  }
}
