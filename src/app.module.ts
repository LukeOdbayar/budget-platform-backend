import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomeModule } from './income/income.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'mysql',
      port: 3306,
      username: 'root',
      password: 'B^dg#t',
      database: 'budget',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST || 'redis',
      port: 6379,
    }),
    ExpensesModule,
    IncomeModule,
  ],
})
export class AppModule {}
