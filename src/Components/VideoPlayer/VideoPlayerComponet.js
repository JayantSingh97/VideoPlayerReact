import React, { Component, useLayoutEffect, useEffect } from 'react'
import { Button, Card, Grid, CardActionArea, CardMedia, CardContent, Typography, CircularProgress, Slide } from '@material-ui/core'
import HeaderComponent from '../AppHeader/HeaderComponent'
import { FooterComponent } from '../AppFooter/FooterComponent'
import '../VideoPlayer/Video.css';
import reactDom from 'react-dom';
import { Tooltip } from '@material-ui/core';
import { Dashboard, Home, Tv } from '@material-ui/icons';
import { PlayVideoComponent } from '../PlayVideo/PlayVideoComponent'

const axios = require('axios');
const baseUrl = 'https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json';

export default function VideoPlayerComponent() {

    const [videoContainer, PutInVideoContainer] = React.useState([]);
    const [playVideo, setPlayVideo] = React.useState(false);
    const [VideoToplay, seVideoToPlay] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const GetVideos = () => {
        axios.get(baseUrl)
            .then(function (response) {
                debugger
                PutInVideoContainer(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const PlayVideo = (video) => {
        debugger
        setPlayVideo(true);
        seVideoToPlay(video);


    }

    const goHome = () => {
        setPlayVideo(false);
        seVideoToPlay([]);
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            GetVideos();
            setLoading(false);
        }, 2000);


    }, []);

    return (

        <div>
            {loading === true ?
                <div className='loading'>
                    <p ><CircularProgress
                        variant="indeterminate"

                        size={30}
                        thickness={11}
                        color='secondary'
                        value={100}
                    /> Loading Video(s)...</p></div> :

                <div>
                    <HeaderComponent></HeaderComponent>
                    <Grid container spacing={1} >
                        <Grid item xs={12} lg={6} alignContent='flex-start' className="Header-text">

                            <h2 >  <Dashboard></Dashboard>  Recently released video</h2>

                        </Grid>
                        {playVideo == true ? <Grid item xs={12} lg={6} className="button-loader">

                            <Button onClick={() => goHome()} color='white' variant="contained"> <Home></Home> Home </Button>

                        </Grid> : null}

                    </Grid>

                    <hr />


                    {playVideo == true ? <PlayVideoComponent videotoPlay={VideoToplay}></PlayVideoComponent> : <Grid className="videos-continer" container spacing={2}>
                        {videoContainer.map((v, i) => {
                            return <Grid item xs={12} lg={3} sm={6} >
                                <Slide direction="up" in={true} style={{ transitionDelay: '200ms' }}>
                                    <Tooltip arrow placement="bottom" title={v.description} aria-label={v.description}>
                                        <Card onClick={() => PlayVideo(v)}>

                                            <CardActionArea>

                                                <CardMedia
                                                    component="img"
                                                    alt="1"
                                                    height="350"

                                                    image={v.image}
                                                />

                                                <CardContent>

                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {v.name}
                                                    </Typography>
                                                </CardContent>

                                            </CardActionArea>


                                        </Card>
                                    </Tooltip>
                                </Slide>
                            </Grid>

                        })}
                    </Grid>
                    }
                </div>}
        </div>
    )
};


