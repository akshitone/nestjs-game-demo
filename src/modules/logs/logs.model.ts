import { Schema } from 'mongoose';
import { setTimesTamp } from 'src/common/common.functions';

export const LogSchema: Schema = new Schema({
  logId: { type: String },
  logType: { type: String },
  host: { type: String },
  message: { type: String },
  method: { type: String },
  reqHeaders: { type: Object },
  apiToken: { type: String },
  userAgent: { type: String },
  fullUrl: { type: String },
  requestIp: { type: String },
  requestBody: { type: Object },
  responseBody: { type: Object },
  statusCode: { type: Number },
  createdAt: { type: String, default: setTimesTamp() },
});
