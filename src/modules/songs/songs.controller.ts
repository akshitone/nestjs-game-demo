import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongCreateDTO } from './songs.dto';
import { StatusCodes } from 'http-status-codes';
import { generatePublicId, removeFields, responseGenerators } from 'src/common/common.functions';
import { SONGS } from 'src/common/global.constants';
import { FastifyReply } from 'fastify';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  async createSong(@Body() songCreateDTO: SongCreateDTO, @Res() res: FastifyReply) {
    const songId = generatePublicId();
    const { title, artists, album, releasedDate, duration } = songCreateDTO;

    const songExist = await this.songsService.create({ songId, title, artists, album, releasedDate, duration });

    return res.status(StatusCodes.OK).send(responseGenerators(removeFields(songExist, ['_id', '__v']), StatusCodes.OK, SONGS.CREATED, false));
  }

  @Get()
  async findSongs(@Res() res: FastifyReply) {
    const songsExist = await this.songsService.findAll();

    return res.status(StatusCodes.OK).send(responseGenerators(songsExist, StatusCodes.OK, SONGS.FOUND, false));
  }

  @Get('/:songId')
  async findSong(@Param('songId') songId: string, @Res() res: FastifyReply) {
    const songExist = await this.songsService.findOne(songId);

    return res.status(StatusCodes.OK).send(responseGenerators(removeFields(songExist, ['_id', '__v']), StatusCodes.OK, SONGS.FOUND, false));
  }

  @Put('/:songId')
  updateSong() {
    return { message: `This action update song based on id` };
  }

  @Delete('/:songId')
  deleteSong() {
    return { message: `This action delete song based on id` };
  }
}
