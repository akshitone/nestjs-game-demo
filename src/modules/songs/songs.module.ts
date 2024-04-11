import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SongSchema } from './songs.model';
import { MODULES } from 'src/common/global.constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: MODULES.SONG, schema: SongSchema }])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
