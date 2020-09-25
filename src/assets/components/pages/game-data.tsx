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
    year: string;
    gameDescription: string;
    builds?: GameBuild[] | undefined;
}

class Spooksville implements Game {
    gameTitle: string = 'Spooksville';
    year: string = '2020-2021';
    gameDescription: string =
        'Our very first game as a club! A Halloween themed gamed where you go door to door to collect candy with a suprising boss battle at the end!';
    builds?: GameBuild[] | undefined = [
        new GameBuild('Windows', 'v1.0.0', 'somelink'),
    ];
}

class GameTwo implements Game {
    gameTitle: string = 'Game #2';
    year: string = '2020-2021';
    gameDescription: string =
        'We worked on this game, but we never got to finish it because of the corona virus. Yay!';
    builds?: GameBuild[] | undefined = [];
}

export class GameCardRenderer {
    static games: Game[] = [new Spooksville(), new GameTwo()];

    static renderCards(): any {
        return this.games.map((game) => (
            <div>
                <GameSection
                    gameTitle={game.gameTitle}
                    year={game.year}
                    gameDescription={game.gameDescription}
                    builds={game.builds}
                />
            </div>
        ));
    }
}
