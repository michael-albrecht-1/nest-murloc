import { Todo } from '../model/todo.model';

export abstract class TodoRepositoryPort {
  abstract findAll(): Promise<Todo[]>;
}
