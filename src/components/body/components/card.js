import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
    display: 'flex',
    flexDirection: 'row',
    margin: 1,

  },
  media: {
    height: 500,
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-1.jpg?v=1598433227")`,
  },
  media1: {
    height: 500,
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-2.jpg?v=1598433238")`,
  },
  media2: {
    height: 500,
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-3.jpg?v=1598433247")`,
  },
  media3: {
    height: 500,
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-4.jpg?v=1598433256")`,
  },

});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media1}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media2}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media3}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}