import { ConsoleLogger, Injectable, LogLevel, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const xForwardedFor = ((req.headers['x-forwarded-for'] || '') as string).replace(/:\d+$/, '');
    const ip = xForwardedFor || req.connection.remoteAddress?.split(':').pop();

    console.log(`------------ API Info ------------
    IMP - API called path: ${req.path},
    method: ${req.method},
    query: ${JSON.stringify(req.query)},
    body: ${JSON.stringify(req.body)},
    remote address (main/proxy ip):${ip},
    reference: ${req.headers.referer},
    user-agent: ${req.headers['user-agent']}
    ------------ End ------------  `);

    next();
  }
}

export class MyLogger extends ConsoleLogger {
  error(message: string): void {
    super.error(message);
  }

  log(message: string): void {
    super.log(message);
  }

  warn(message: string): void {
    super.warn(message);
  }

  debug(message: string): void {
    super.debug(message);
  }

  fatal(message: string): void {
    super.fatal(message);
  }
}

export const logger = new MyLogger();
