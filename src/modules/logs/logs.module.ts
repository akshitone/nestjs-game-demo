import { Module } from '@nestjs/common';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MODULES } from 'src/common/global.constants';
import { LogSchema } from 'src/models/logs.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: MODULES.LOG, schema: LogSchema }])],
  controllers: [LogsController],
  providers: [LogsService],
  exports: [LogsService, MongooseModule],
})
export class LogsModule {}
