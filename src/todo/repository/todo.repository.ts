import { Todo } from '../domain/model/todo.model';
import { TodoRepositoryPort } from '../domain/port/todo-repository.port';
import { Injectable } from '@nestjs/common';
import { StrictBuilder } from 'builder-pattern';
import { TodoStatus } from '../domain/model/todo-status.enum';
import { RedisClientType } from 'redis';
import { RedisService } from 'src/shared/redis/redis.service';

@Injectable()
export class TodoRepository implements TodoRepositoryPort {
  constructor(private readonly redisService: RedisService) {}

  private getClient(): RedisClientType {
    return this.redisService.getClient();
  }

  async findAll(): Promise<Todo[]> {
    const client = this.getClient();
    await client.set('keymike', 'valuemike!');
    const value = await client.get('keymike');
    console.warn(value);

    // Example of using Redis - you can cache todos here
    const cachedTodos = await client.get('todos');
    console.warn({ todosRetrievedFromCache: cachedTodos });

    if (cachedTodos !== null) {
      return JSON.parse(cachedTodos as string);
    }

    const todos = [
      StrictBuilder<Todo>()
        .id('2')
        .title('Todo 2')
        .status(TodoStatus.IN_PROGRESS)
        .createdAt(new Date())
        .build(),
    ];

    // Cache the todos for 1 minute
    await client.setEx('todos', 60, JSON.stringify(todos));

    return todos;
  }
}
