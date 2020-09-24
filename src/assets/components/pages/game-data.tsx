import React from 'react';
import GameSection from '../objects/GameSection';

class GameBuild {
    operatingSystem: string;
    version: string;
    downloadLink: string;

    constructor(
        operatingSystem: string,
        version: string,
        downloadLink: string
    ) {
        this.operatingSystem = operatingSystem;
        this.version = version;
        this.downloadLink = downloadLink;
    }
}

export interface Game {
    gameTitle: string;
    gameDescription: string;
    builds?: GameBuild[] | undefined;
}

// These values need to be migrated to a database with MikroORM / Apollo / GraphQL
class Spooksville implements Game {
    gameTitle: string = 'Spooksville';
    gameDescription: string = 'Cool game xD!';
    builds?: GameBuild[] | undefined = [
        new GameBuild('Windows', 'v1.0.0', 'somelink'),
    ];
}

class GameTwo implements Game {
    gameTitle: string = 'Game #2';
    gameDescription: string =
        'We worked on this game, but we never got to finish it because of the corona virus.';
    builds?: undefined;
}

export class GameCardRenderer {
    static games: Game[] = [new Spooksville(), new GameTwo()];

    static renderCards(): any {
        return this.games.map((game) => (
            <div>
                <GameSection
                    gameTitle={game.gameTitle}
                    gameDescription={game.gameDescription}
                    builds={game.builds}
                />
            </div>
        ));
    }
}
