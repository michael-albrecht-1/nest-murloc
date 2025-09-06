import { Todo } from '../model/todo.model';

export abstract class GetTodosPort {
  abstract execute(): Promise<Todo[]>;
}
