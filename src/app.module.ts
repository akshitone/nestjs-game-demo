import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { SongsModule } from './modules/songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { CustomersModule } from './modules/customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthMiddleware } from './common/middleware/auth/auth.middleware';
import { LogsModule } from './modules/logs/logs.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorsFilter } from './common/filters/errors.filter';
import { LogsService } from './modules/logs/logs.service';

configDotenv();

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_CONNECTION_URL_PROD), SongsModule, CustomersModule, UsersModule, LogsModule],
  controllers: [],
  providers: [{ provide: APP_FILTER, useClass: ErrorsFilter }, LogsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes('*'); // for all routes
  }
}
