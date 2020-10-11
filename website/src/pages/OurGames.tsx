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

const OurGames: React.FC = () => {
  const { data, loading, error } = useQuery<{
    games: {
      id: number;
      name: string;
      description: string;
      year: string;
    }[];
  }>(GET_GAMES);

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log(error.message);
    return <div>Query request error!</div>;
  }

  return (
    <div>
      {data?.games.map((game) => (
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
