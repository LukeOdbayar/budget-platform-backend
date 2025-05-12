import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  CacheTTL,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  create(@Body() createIncomeDto: CreateIncomeDto) {
    return this.incomeService.create(createIncomeDto);
  }

  @Get()
  @CacheTTL(60)
  findAll() {
    return this.incomeService.findAll();
  }

  @Get(':id')
  @CacheTTL(60)
  findOne(@Param('id') id: string) {
    return this.incomeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncomeDto: UpdateIncomeDto) {
    return this.incomeService.update(+id, updateIncomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeService.remove(+id);
  }
}
