import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_GAMES_FROM_YEAR_2020 = gql`
    {
        getGameByYear(yearCreated: "2020") {
            name
            yearCreated
        }
    }
`;

const Ourgamespage: React.FC = () => {
    const { loading, data } = useQuery<
        { name: string; yearCreated: string },
        { year: string }
    >(GET_GAMES_FROM_YEAR_2020, {
        variables: { year: '2020' },
    });

    console.log(data);

    return <div></div>;
};

export default Ourgamespage;
