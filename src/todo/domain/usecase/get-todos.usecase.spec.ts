import { GetTodos } from './get-todos.usecase';
import { TodoRepositoryPortMock } from '../port/todo-repository.port.mock';
import { todoOneFixture, todoTwoFixture } from 'test/fixture/todo.fixture';

describe('GetTodos', () => {
  let usecase: GetTodos;
  let repositoryMock: TodoRepositoryPortMock;

  beforeEach(() => {
    repositoryMock = new TodoRepositoryPortMock();
    usecase = new GetTodos(repositoryMock);
  });

  it('should retrieve todos from repository', async () => {
    // given

    // when
    await usecase.execute();

    // then
    expect(repositoryMock.findAll).toHaveBeenCalled();
  });

  it('should return todos', async () => {
    // given
    const todos = [todoOneFixture, todoTwoFixture];
    repositoryMock.findAll.mockResolvedValue(todos);

    // when
    const result = await usecase.execute();

    // then
    expect(result).toEqual(todos);
  });
});
