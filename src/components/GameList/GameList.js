import React from 'react';
import GameCard from '../GameCard/GameCard'
import GameFilter from '../GameFilter/GameFilter';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
function GameList({games, setFilter}) {
  
return (
<>
<GameFilter setFilter={setFilter}/>
<Container maxWidth="md">
<Grid container >
{/* <Stack   direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  >  */}

    {!games.length? <Alert severity='error' style={{width: "100%", marginTop: "10px"}}>No games to load</Alert> :
    games.map(game => {
        return(
          
            <GameCard content={game}/>

          
            
        
            
        
        )
        
    })}
{/* </Stack> */}
</Grid>

</Container>

</>
);
}

export default GameList;