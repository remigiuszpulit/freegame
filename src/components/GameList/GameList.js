import React from 'react';
import GameCard from '../GameCard/GameCard'
import GameFilter from '../GameFilter/GameFilter';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
function GameList({games, onFilterChange}) {
return (
<>
<GameFilter onFilterChange={onFilterChange}/>
<Stack   direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  >
    {games.map(game => {
        return(
            
<GameCard content={game}/>
            
        
        )
        
    })}
</Stack>
</>
);
}

export default GameList;