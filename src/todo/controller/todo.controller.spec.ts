import { TodoStatus } from '../domain/model/todo-status.enum';
import { Todo } from '../domain/model/todo.model';
import { GetTodosPort } from '../domain/port/get-todos.port';
import { TodoController } from './todo.controller';
import { StrictBuilder } from 'builder-pattern';

class GetTodosMock implements GetTodosPort {
  execute = jest.fn();
}

describe('TodoController', () => {
  let controller: TodoController;
  let getTodosMock: GetTodosMock;

  beforeEach(async () => {
    getTodosMock = new GetTodosMock();
    controller = new TodoController(getTodosMock);
  });

  describe('getTodos', () => {
    it('should retrieve todos', async () => {
      // when
      await controller.getTodos();

      // then
      expect(getTodosMock.execute).toHaveBeenCalled();
    });

    it('should return todos response', async () => {
      // given
      const todos = [
        StrictBuilder<Todo>()
          .id('1')
          .title('Todo 1')
          .status(TodoStatus.TODO)
          .createdAt(new Date())
          .build(),
        StrictBuilder<Todo>()
          .id('2')
          .title('Todo 2')
          .status(TodoStatus.TODO)
          .createdAt(new Date())
          .build(),
      ];
      getTodosMock.execute.mockResolvedValue(todos);

      // when
      const result = await controller.getTodos();

      // then
      expect(result).toEqual(todos);
    });
  });
});
