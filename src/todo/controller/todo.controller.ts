import { Controller } from '@nestjs/common';
import { GetTodosPort } from '../domain/port/get-todos.port';
import { Todo } from '../domain/model/todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly getTodosPort: GetTodosPort) {}

  async getTodos(): Promise<Todo[]> {
    return this.getTodosPort.execute();
  }
}
