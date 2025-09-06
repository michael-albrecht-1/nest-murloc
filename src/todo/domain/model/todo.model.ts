import { TodoStatus } from './todo-status.enum';

export class Todo {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly status: TodoStatus,
    public readonly createdAt: Date,
    public readonly description?: string,
  ) {}
}
