import { Arg, Query, Resolver } from 'type-graphql';
import Todo from '../entities/Todo';

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
