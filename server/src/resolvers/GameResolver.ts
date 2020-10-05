import { Game } from '../entities/Game';
import { Resolver, Query, Arg } from 'type-graphql';

@Resolver()
export class GameResolver {
    @Query(() => [Game])
    games(): Promise<Game[] | undefined> {
        return Game.find();
    }

    @Query(() => [Game])
    getGamesFromYear(
        @Arg('yearCreated') yearCreated: string
    ): Promise<Game[] | undefined> {
        return Game.find({
            where: [{ yearCreated: yearCreated }],
        });
    }
}
