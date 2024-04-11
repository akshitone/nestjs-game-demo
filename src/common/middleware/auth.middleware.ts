import { Injectable, NestMiddleware, Req, Res } from '@nestjs/common';
import { NextFunction } from 'express';
import { IncomingMessage, ServerResponse } from 'http';
import { StatusCodes } from 'http-status-codes';
import { responseGenerators } from 'src/common/common.functions';
import { ERROR } from 'src/common/global.constants';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: IncomingMessage, res: ServerResponse, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.write(JSON.stringify(responseGenerators({}, StatusCodes.UNAUTHORIZED, ERROR.UNAUTHORIZED, true)));
      res.end();
    }

    // search authToken into the database and after that verify here
    if (authorization !== '123') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.write(JSON.stringify(responseGenerators({}, StatusCodes.UNAUTHORIZED, ERROR.EXPIRED, true)));
      res.end();
    }

    next();
  }
}
