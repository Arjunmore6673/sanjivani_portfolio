import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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