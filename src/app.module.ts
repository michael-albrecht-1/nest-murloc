import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoModule } from './todo/todo.module';
import { RedisModule } from './shared/redis/redis.module';

@Module({
  imports: [RedisModule, TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
