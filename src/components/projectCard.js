import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard() {
  return (

    <Card className="col-md-3 shadow m-4 p-2">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://via.placeholder.com/150"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="row m-2 px-2">
        <span className="badge badge-success">Angular</span>
        <span className="badge badge-primary">NodeJs</span>
        <span className="badge badge-warning">MongoDB</span>
        <span className="badge badge-info">Express</span>
      </div>
      <CardActions>
        <Button variant="contained">Github</Button>
        <Button variant="contained">Demo</Button>
      </CardActions>
    </Card>
  );
}