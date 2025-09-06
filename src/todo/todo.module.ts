import { Module } from '@nestjs/common';
import { GetTodosPort } from './domain/port/get-todos.port';
import { GetTodos } from './domain/usecase/get-todos.usecase';
import { TodoRepositoryPort } from './domain/port/todo-repository.port';
import { TodoRepository } from './repository/todo.repository';
import { TodoController } from './controller/todo.controller';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [
    {
      provide: GetTodosPort,
      useClass: GetTodos,
    },
    {
      provide: TodoRepositoryPort,
      useClass: TodoRepository,
    },
  ],
})
export class TodoModule {}
