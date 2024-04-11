export interface ILog {
  logId: string;
  logType: string;
  host: string;
  message: string;
  method: string;
  reqHeaders: object;
  apiToken: string;
  userAgent: string;
  fullUrl: string;
  requestIp: string;
  statusCode: number;
  requestBody: object | unknown;
  responseBody: object;
  createdAt: string;
}
