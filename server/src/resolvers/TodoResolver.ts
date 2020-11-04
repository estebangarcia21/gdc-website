import Todo from '../entities/Todo';
import { Resolver, Query, Arg } from 'type-graphql';

@Resolver()
export default class TodoResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    return Todo.find();
  }

  @Query(() => [Todo])
  async getTodosFromGroup(@Arg('group') group: string): Promise<Todo[]> {
    return Todo.find({
      where: {
        group: group,
      },
    });
  }
}
