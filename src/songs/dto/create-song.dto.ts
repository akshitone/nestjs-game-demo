import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsNotEmpty()
  readonly artists: string[];

  @IsString()
  @IsNotEmpty()
  readonly album: string;

  @IsDateString()
  @IsNotEmpty()
  readonly releasedDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: string;
}
