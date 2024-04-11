import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { generatePublicId, responseGenerators, setTimesTamp } from '../common.functions';
import { LogsService } from 'src/modules/logs/logs.service';

@Catch()
export class ErrorsFilter implements ExceptionFilter {
  constructor(private readonly logsService: LogsService) {}

  async catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    await this.logsService.create({
      logId: generatePublicId(),
      logType: exception.name || undefined,
      host: request.headers.host || undefined,
      message: exception.message || undefined,
      method: request.method || undefined,
      fullUrl: request.url || undefined,
      requestIp: request.ip || undefined,
      requestBody: request.body || undefined,
      responseBody: exception || undefined,
      userAgent: request.headers['user-agent'] || undefined,
      reqHeaders: request.headers || undefined,
      apiToken: request.headers.authorization || undefined,
      statusCode: exception.getStatus() || undefined,
      createdAt: setTimesTamp().toString(),
    });

    return response.status(exception.getStatus()).send(responseGenerators({}, exception.getStatus(), exception.message, true));
  }
}
