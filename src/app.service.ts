import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello, Let's start learning Nest JS!`;
  }
}
