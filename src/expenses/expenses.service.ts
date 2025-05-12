import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dbo/update-expense.dto';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private expensesRepository: Repository<Expense>,
  ) {}

  create(createExpenseDto: CreateExpenseDto) {
    return this.expensesRepository.save(createExpenseDto);
  }

  findAll() {
    return this.expensesRepository.find();
  }

  findOne(id: number) {
    return this.expensesRepository.findOneBy({ id });
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return this.expensesRepository.update(id, updateExpenseDto);
  }

  remove(id: number) {
    return this.expensesRepository.delete(id);
  }
}
