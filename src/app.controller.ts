import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//this is just a test
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
