import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, TextField, Button, TextFieldProps } from '@material-ui/core';
import axios from 'axios';

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
    title: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    inputForm: {
      margin: '50px 0',
      textAlign: 'center',
      lineHeight: '3rem'
    },
    btnContainer: {
  
    }
  }));
  
  const ImageSearch = () => {
    const classes = useStyles();
    const inputRef = React.useRef<TextFieldProps>(null);
    const [tags, setTags] = React.useState<any>('mountain');
    const [data, setData] = React.useState<any[]>([]);
  
    React.useEffect(() => {
      getData();
    }, [tags]);
  
    const getData = () => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then((response: any) => setData(response.data.photos.photo));
    }
    
    const handleClick = () => {
      setTags(inputRef.current?.value);
    }
  
    return (
      <Container maxWidth="lg" className={classes.root}>
        <div className={classes.inputForm}>
          <TextField id="standard-basic" label="keyword" inputRef={inputRef} />
          <Button variant="contained" color="primary" onClick={handleClick}>검색</Button>
          <div className={classes.btnContainer}>
            <Button variant="outlined" onClick={() => setTags('mountain')}>Mountain</Button>
            <Button variant="outlined" onClick={() => setTags('beaches')}>Beaches</Button>
            <Button variant="outlined" onClick={() => setTags('birds')}>Birds</Button>
            <Button variant="outlined" onClick={() => setTags('food')}>Food</Button>
          </div>
        </div>
        <Grid container spacing={3}>
          {
            data.map(item => 
              <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={"https://farm66.staticflickr.com/65535/"+item.id+"_"+item.secret+"_m.jpg"}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {item.title}
                      </Typography>
                      {/* <Typography variant="body2" color="textSecondary" component="p">
                          내용
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          }
        </Grid>
      </Container>
    );
  }
  
  export default ImageSearch;