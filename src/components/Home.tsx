import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { data } from '../assets/data';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 140,
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    data.map(item => (
                        <Grid item xs={6} sm={3}>
                            <Link to={item.link}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={item.image}
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { item.title }
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            { item.content }
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Home;