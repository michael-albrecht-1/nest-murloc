import { Injectable } from '@nestjs/common';
import { Todo } from '../model/todo.model';
import { GetTodosPort } from '../port/get-todos.port';
import { TodoRepositoryPort } from '../port/todo-repository.port';

@Injectable()
export class GetTodos implements GetTodosPort {
  constructor(private readonly repository: TodoRepositoryPort) {}

  async execute(): Promise<Todo[]> {
    return this.repository.findAll();
  }
}
