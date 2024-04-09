import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { SongsModule } from './modules/songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { CustomersModule } from './modules/customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthMiddleware } from './common/middleware/auth/auth.middleware';

configDotenv();

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_CONNECTION_URL_PROD), SongsModule, CustomersModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes('*'); // for all routes
  }
}
