import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MODULES } from 'src/common/global.constants';
import { UserSchema } from 'src/models/users.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: MODULES.USER, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
