import React, { useCallback, useState } from 'react';
import useFetch from '../hooks/useFetch';
import GameList from './GameList';

function GameListConatiner() {
    const [filter, setFilter] = useState({platform : 'browser', sortBy:'relevance'})
    const {games, error} = useFetch(filter)
   

return (
<GameList games={games} setFilter={setFilter}/>
);
}

export default GameListConatiner;