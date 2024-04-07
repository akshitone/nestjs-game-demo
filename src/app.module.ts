import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SongsModule } from './routes/songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { CustomersModule } from './routes/customers/customers.module';

@Module({
  imports: [SongsModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // for all routes
  }
}
