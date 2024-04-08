import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODULES } from 'src/common/global.constants';
import { IUser } from 'src/types/users.type';

@Injectable()
export class UsersService {
  constructor(@InjectModel(MODULES.USER) private readonly userModel: Model<IUser>) {}

  async create(song: IUser) {
    return await this.userModel.create(song);
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(userId: string) {
    return await this.userModel.findOne({ userId });
  }
}
