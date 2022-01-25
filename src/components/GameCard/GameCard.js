import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Link } from 'react-router-dom';

function GameCard({content: {id, title, thumbnail, short_description, genre}}) {
    const link = `/games/${id}`
return (
    
    <Link to={link}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={thumbnail}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {short_description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {genre}

        </Typography>
      </CardContent>
      
    </Card>







      
    </Link>

);
}

export default GameCard;