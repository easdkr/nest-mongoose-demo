import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async createCats(@Body() dto: CreateCatDto) {
    return await this.catsService.create(dto);
  }

  @Get()
  async getAllCats() {
    return await this.catsService.findAll();
  }
}
