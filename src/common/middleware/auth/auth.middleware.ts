import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { responseGenerators } from 'src/common/common.functions';
import { ERROR } from 'src/common/global.constants';
import { logger } from '../logger/logger.middleware';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      logger.error(ERROR.UNAUTHORIZED);
      return res.status(StatusCodes.UNAUTHORIZED).send(responseGenerators({}, StatusCodes.UNAUTHORIZED, ERROR.UNAUTHORIZED, true));
    }

    // search authToken into the database and after that verify here
    if (authorization !== '123') {
      logger.error(ERROR.EXPIRED);
      return res.status(StatusCodes.UNAUTHORIZED).send(responseGenerators({}, StatusCodes.UNAUTHORIZED, ERROR.EXPIRED, true));
    }

    next();
  }
}
