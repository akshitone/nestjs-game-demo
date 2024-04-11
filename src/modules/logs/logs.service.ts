import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODULES } from 'src/common/global.constants';
import { ILog } from './logs.type';

@Injectable()
export class LogsService {
  constructor(@InjectModel(MODULES.LOG) private readonly logModel: Model<ILog>) {}

  async create(log: ILog) {
    return await this.logModel.create(log);
  }
}
