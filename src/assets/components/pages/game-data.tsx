// A substitution for databases which I plan to learn later
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

class Spooksville implements Game {
    gameTitle: string = 'Spooksville';
    gameDescription: string = 'Cool game!';
    builds?: GameBuild[] | undefined = [
        new GameBuild('Windows', '1.0.0', 'somelink'),
    ];
}

export interface Game {
    gameTitle: string;
    gameDescription: string;
    builds?: GameBuild[] | undefined;
}

export class ContentRenderer {
    static games: Game[] = [new Spooksville()];

    static render(): any {
        return this.games.map((game) => {
            <div>
                <GameSection
                    gameTitle={game.gameTitle}
                    gameDescription={game.gameDescription}
                    builds={game.builds}
                />
            </div>;
        });
    }
}
