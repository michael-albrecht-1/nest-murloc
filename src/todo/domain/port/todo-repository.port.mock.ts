import { TodoRepositoryPort } from './todo-repository.port';

export class TodoRepositoryPortMock implements TodoRepositoryPort {
  findAll = jest.fn();
}
