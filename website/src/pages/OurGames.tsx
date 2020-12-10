import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_GAMES = gql`
    {
        games {
            id
            name
            description
            year
        }
    }
`;

interface Game {
    id: number;
    name: string;
    description: string;
    year: string;
}

interface GameData {
    games: Game[];
}

const OurGames = () => {
    const { data, loading } = useQuery<GameData>(GET_GAMES);

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ backgroundColor: "black" }}>
            {data &&
                data.games.map(game => (
                    <div key={game.id}>
                        <p>{game.name}</p>
                        <p>{game.year}</p>
                        <p>{game.description}</p>
                        <br />
                    </div>
                ))}
        </div>
    );
};

export default OurGames;
