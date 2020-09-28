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
    yearRange: string;
    gameDescription: string;
    builds?: GameBuild[] | undefined;
}

// Games in class form. Migrate data to a PostgreSQL database in the future
class Spooksville implements Game {
    gameTitle: string = 'Spooksville';
    yearRange: string = '2020-2021';
    gameDescription: string =
        'Our very first game as a club! A Halloween themed gamed where you go door to door to collect candy with a suprising boss battle at the end!';
    builds?: GameBuild[] | undefined = [
        new GameBuild('Windows', 'v1.0.0', 'somelink'),
    ];
}

class GameTwo implements Game {
    gameTitle: string = 'Game #2';
    yearRange: string = '2021-2022';
    gameDescription: string =
        'We worked on this game, but we never got to finish it because of the corona virus :(';
    builds?: GameBuild[] | undefined = [];
}

export class GameCardRenderer {
    static games: Game[] = [new Spooksville(), new GameTwo()];

    static showGamesFromYears(yearRange: string): JSX.Element {
        const quereyedArray = this.games.filter(
            (game) => game.yearRange == yearRange
        );

        const yearTitle: JSX.Element = (
            <p
                className='text'
                style={{
                    fontSize: '36px',
                }}
            >
                {yearRange + ' Games'}
            </p>
        );

        const queryResults: JSX.Element[] = quereyedArray.map((game) => (
            <div>
                <GameSection
                    gameTitle={game.gameTitle}
                    yearRange={game.yearRange}
                    gameDescription={game.gameDescription}
                    builds={game.builds}
                />
            </div>
        ));

        return (
            <div>
                {yearTitle}
                <div className='line' />
                {queryResults}
            </div>
        );
    }
}
