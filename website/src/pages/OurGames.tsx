import React from 'react';
import { useQuery, gql } from '@apollo/client';

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

interface Todo {
  id: number;
  group: string;
  name: string;
  completed: boolean;
}

const OurGames: React.FC = () => {
  const { data, loading } = useQuery<GameData>(GET_GAMES);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: 'black' }}>
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
