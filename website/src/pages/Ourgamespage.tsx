import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_GAMES = gql`
    {
        games {
            name
            description
            year
        }
    }
`;

const Ourgamespage: React.FC = () => {
    const { data, loading } = useQuery<{
        games: {
            name: string;
            description: string;
            year: string;
        }[];
    }>(GET_GAMES);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {data?.games.map((game) => (
                <div key={game.name}>
                    <p>{game.name}</p>
                    <p>{game.year}</p>
                    <p>{game.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Ourgamespage;
