import React from 'react';
import { Link, useParams } from "react-router-dom";
import useFetchGame from "../hooks/useFetchGame"
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';



function GameDetails(props) {

    const params = useParams()

    const {game} = useFetchGame(params.id)


return (
<Container maxWidth="md" sx={{mt: 4}} >


    <Typography variant='h2' sx={{textAlign: "center"}}>
        <a href={game.game_url} style={{textDecoration: "none", color: "black"}}>{game.title}</a>
        <Chip label={game.status} color="success" sx={{ml: 4}} />

    </Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Platform" secondary={game.platform} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Publisher" secondary={game.publisher} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Genre" secondary={game.genre} />
      </ListItem>
    </List>

   
        <Stack direction="row" justifyContent="space-between" spacing={2} sx={{mb: 2}}>
        <Link to={"/"} style={{textDecoration: "none"}}>
        <Button variant="contained" key="back">Back</Button>
        </Link>
        <a href={game.game_url} style={{textDecoration: "none", color: "black"}}>
        <Button variant="contained" key="two">Website</Button>
        </a>
  
  
  

        </Stack>
    

        

    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Short Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
               game.short_description 
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
               game.description 
            }
          </Typography>
        </AccordionDetails>
      </Accordion>


{game.screenshots && 
<ImageList variant="masonry" cols={1} gap={8}>
    
        {game.screenshots.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.id}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
}




    
</Container>
);
}

export default GameDetails;