import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import Game from '../entities/Game';

@Resolver()
export default class GameResolver {
  @Query(() => [Game])
  async games(): Promise<Game[]> {
    return Game.find();
  }

  @Query(() => [Game])
  async getGamesFromYear(@Arg('year') year: string): Promise<Game[]> {
    return Game.find({
      where: [{ year: year }],
    });
  }

  @Mutation(() => Game!)
  async addGame(
    @Arg('name') name: string,
    @Arg('description') description: string,
    @Arg('year') year: string
  ): Promise<Game> {
    const game = Game.create({
      name,
      description,
      year,
    });

    return await game.save();
  }
}
