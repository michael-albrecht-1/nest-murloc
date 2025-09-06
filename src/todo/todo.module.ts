import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { GetTodosPort } from './domain/port/get-todos.port';
import { GetTodos } from './domain/usecase/get-todos.usecase';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [
    {
      provide: GetTodosPort,
      useClass: GetTodos,
    },
  ],
})
export class TodoModule {}
