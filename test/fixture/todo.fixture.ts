import { StrictBuilder } from 'builder-pattern';
import { TodoStatus } from 'src/todo/domain/model/todo-status.enum';
import { Todo } from 'src/todo/domain/model/todo.model';

export const todoOneFixture = StrictBuilder<Todo>()
  .id('1')
  .title('Todo 1')
  .status(TodoStatus.TODO)
  .createdAt(new Date())
  .build();

export const todoTwoFixture = StrictBuilder<Todo>()
  .id('2')
  .title('Todo 2')
  .status(TodoStatus.IN_PROGRESS)
  .createdAt(new Date())
  .build();
