import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { Income } from './entities/income.entity';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private incomeRepository: Repository<Income>,
  ) {}

  create(createIncomeDto: CreateIncomeDto) {
    return this.incomeRepository.save(createIncomeDto);
  }

  findAll() {
    return this.incomeRepository.find();
  }

  findOne(id: number) {
    return this.incomeRepository.findOneBy({ id });
  }

  update(id: number, updateIncomeDto: UpdateIncomeDto) {
    return this.incomeRepository.update(id, updateIncomeDto);
  }

  remove(id: number) {
    return this.incomeRepository.delete(id);
  }
}
