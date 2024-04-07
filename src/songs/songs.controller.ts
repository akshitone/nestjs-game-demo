import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';

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
  findSong() {
    return { message: `This action return song based on id` };
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
