import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import Todo from '../entities/Todo';

@Resolver()
export default class TodoResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    return await Todo.find();
  }

  @Query(() => [Todo])
  async getTodosByTeam(@Arg('team') team: string): Promise<Todo[]> {
    return await Todo.find({
      where: {
        team,
      },
      order: {
        completed: 'ASC',
        title: 'ASC',
      },
    });
  }

  @Mutation(() => Todo)
  async toggleCompletion(@Arg('id') id: number): Promise<Todo | undefined> {
    const todo = await Todo.findOne({ where: { id } });

    if (!todo) throw new Error('Todo does not exist.');

    Object.assign(todo, { completed: !todo.completed });

    return await todo.save();
  }
}
