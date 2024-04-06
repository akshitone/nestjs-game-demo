import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create() {
    const songExist = this.songsService.create({
      title: 'Where are U now',
      artist: 'Justin Bieber',
      album: 'Where are U now',
      year: 2016,
    });

    return { message: 'Song created successfully', songs: songExist };
  }

  @Get()
  findAll() {
    const songsExist = this.songsService.findAll();
    return { message: 'Songs fetch successfully', songs: songsExist };
  }

  @Get('/:id')
  findOne() {
    return { message: `This action return song based on id` };
  }

  @Put('/:id')
  updateOne() {
    return { message: `This action update song based on id` };
  }

  @Delete('/:id')
  deleteOne() {
    return { message: `This action delete song based on id` };
  }
}
