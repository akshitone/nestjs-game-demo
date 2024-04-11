import { IsArray, IsMilitaryTime, IsNotEmpty, IsString } from 'class-validator';

export class SongCreateDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsNotEmpty()
  readonly artists: string[];

  @IsString()
  @IsNotEmpty()
  readonly album: string;

  @IsString()
  @IsNotEmpty()
  readonly releasedDate: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: string;
}
