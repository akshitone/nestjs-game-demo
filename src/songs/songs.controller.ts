import { Body, Controller, Delete, Get, Next, Post, Put, Req, Res } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { responseGenerators } from 'src/common/common.functions';
import { SONGS } from 'src/common/global.constants';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  createSong(@Body() createSongDTO: CreateSongDTO) {
    const songExist = this.songsService.create(createSongDTO);

    return { message: 'Song created successfully', songs: songExist };
  }

  @Get()
  findSongs() {
    const songsExist = this.songsService.findAll();
    return { message: 'Songs fetch successfully', songs: songsExist };
  }

  @Get('/:id')
  findSong(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    const { id } = req.params;

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
