import { Game } from '../entities/Game';
import { Resolver, Query, Arg } from 'type-graphql';

@Resolver()
export class GameResolver {
    @Query(() => [Game])
    async games(): Promise<Game[] | undefined> {
        return Game.find();
    }

    @Query(() => [Game])
    async getGamesFromYear(
        @Arg('yearCreated') yearCreated: string
    ): Promise<Game[] | undefined> {
        return Game.find({
            where: [{ yearCreated: yearCreated }],
        });
    }
}
