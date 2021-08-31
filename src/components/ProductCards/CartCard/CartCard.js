import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const dummyImage = "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "400px",
    height: "180px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "200px",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  let product = props.product;

  console.log(product);

  return (
    <Card className={classes.root}>
      
        <CardMedia
            className={classes.cover}
            title="Live from space album cover"
            image={product.images[0]}
        />

        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                    {product.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                &#8377;{product.price}
                </Typography>
            </CardContent>
            <div className={classes.controls}>
                {
                    props.myOrders ?
                    null
                    :
                    <IconButton aria-label="play/pause" onClick={(e) => props.onDelete(product, e)} >
                        <DeleteForeverIcon className={classes.playIcon} />
                    </IconButton>
                }
            </div>
        </div>

    </Card>
  );
}
