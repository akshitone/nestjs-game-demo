import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const xForwardedFor = ((req.headers['x-forwarded-for'] || '') as string).replace(/:\d+$/, '');
    const ip = xForwardedFor || req.connection.remoteAddress?.split(':').pop();

    console.log(`------------ API Info ------------
    IMP - API called path: ${req.path},
    method: ${req.method},
    query: ${JSON.stringify(req.query)},
    remote address (main/proxy ip):${ip},
    reference: ${req.headers.referer} ,
    user-agent: ${req.headers['user-agent']}
    ------------ End ------------  `);

    next();
  }
}
