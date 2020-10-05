import { Game } from '../entities/Game';
import { Resolver, Query, Arg } from 'type-graphql';

@Resolver()
export class GameResolver {
    @Query(() => [Game])
    games(): Promise<Game[]> {
        return Game.find();
    }

    @Query(() => [Game])
    getGameByYear(@Arg('yearCreated') yearCreated: string): Promise<Game[]> {
        return Game.find({
            where: [{ yearCreated: yearCreated }],
        });
    }
}
