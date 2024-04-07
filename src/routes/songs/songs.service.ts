import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODULES } from 'src/common/global.constants';
import { ISong } from 'src/types/songs.type';

@Injectable()
export class SongsService {
  constructor(@InjectModel(MODULES.SONG) private readonly songModel: Model<ISong>) {}

  async create(song: ISong) {
    return await this.songModel.create(song);
  }

  async findAll() {
    return await this.songModel.find();
  }

  async findOne(songId: string) {
    return await this.songModel.findOne({ songId });
  }
}
