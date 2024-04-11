import { Body, Controller, Get, NotFoundException, Param, Post, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { StatusCodes } from 'http-status-codes';
import { generateHashPassword, generatePublicId, responseGenerators } from 'src/common/common.functions';
import { USERS } from 'src/common/global.constants';
import { UserCreateDTO } from 'src/dto/users.dto';
import { Response } from 'express';
import { NotFoundError } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userCreateDTO: UserCreateDTO, @Res() res: Response) {
    const userId = generatePublicId();
    const { firstName, lastName, userName, password, dateOfBirth } = userCreateDTO;

    const hashedPassword = generateHashPassword(password);

    const userExist = await this.usersService.create({ userId, firstName, lastName, userName, password: hashedPassword, dateOfBirth });

    return res.status(StatusCodes.OK).send(responseGenerators(userExist, StatusCodes.OK, USERS.CREATED, false));
  }

  @Get()
  async findUsers(@Res() res: Response) {
    const usersExist = await this.usersService.findAll();

    return res.status(StatusCodes.OK).send(responseGenerators(usersExist, StatusCodes.OK, USERS.FOUND, false));
  }

  @Get('/:userId')
  async findUser(@Param('userId') userId: string, @Res() res: Response) {
    const userExist = await this.usersService.findOne(userId);

    return res.status(StatusCodes.OK).send(responseGenerators(userExist, StatusCodes.OK, USERS.FOUND, false));
  }
}
