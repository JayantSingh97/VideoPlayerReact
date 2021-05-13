import React, { Component } from 'react'
import { Button, AppBar, Typography, IconButton, Toolbar, MenuItem, menui, Card } from '@material-ui/core'
import '../PlayVideo/Video.css'

export class PlayVideoComponent extends React.Component {
    constructor(props) {
        super();
        debugger
        this.state = {
            videotoPlay: []
        }
    }

    getVideoFromParent() {
        console.log(this.props.videotoPlay);
    }
    componentDidMount() {
        this.setState({ videotoPlay: this.props.videotoPlay })
    }
    render() {
        return (
            <div className='Video-container'>
                <Card >

                    <video width="100%" height="400px" autoPlay controls className='MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img'>
                        <source src={this.state.videotoPlay.video} type="video/mp4"></source>
                    </video>

                </Card>
                <Typography variant="body2" color='black' component='p' align='justify' >
                    <h2> Web Series Name : {this.state.videotoPlay.name}</h2>
                </Typography>
                <hr />
                <p><strong>Description</strong> : {this.state.videotoPlay.description} </p>
            </div>
        )
    };
}

