import Game from '../entities/Game';
import { Resolver, Query, Arg } from 'type-graphql';

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
}
