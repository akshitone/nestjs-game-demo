import { Body, Controller, Delete, Get, Next, Param, ParseIntPipe, Post, Put, Req, Res } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from '../../dto/songs.dto';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { generatePublicId, responseGenerators } from 'src/common/common.functions';
import { SONGS } from 'src/common/global.constants';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  async createSong(@Body() createSongDTO: CreateSongDTO) {
    const songId = generatePublicId();
    const { title, artists, album, releasedDate, duration } = createSongDTO;

    const songExist = await this.songsService.create({ songId, title, artists, album, releasedDate, duration });

    return { message: 'Song created successfully', song: songExist };
  }

  @Get()
  async findSongs() {
    const songsExist = await this.songsService.findAll();
    return { message: 'Songs fetch successfully', songs: songsExist };
  }

  @Get('/:id')
  findSong(@Param('id', ParseIntPipe) id: number, @Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    return res.status(StatusCodes.OK).send(responseGenerators({ id }, StatusCodes.OK, SONGS.FOUND, false));
  }

  @Put('/:id')
  updateSong() {
    return { message: `This action update song based on id` };
  }

  @Delete('/:id')
  deleteSong() {
    return { message: `This action delete song based on id` };
  }
}
