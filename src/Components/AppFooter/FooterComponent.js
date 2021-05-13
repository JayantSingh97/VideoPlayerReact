import React ,{Component}from 'react'
import { Button, AppBar,Typography ,IconButton,Toolbar,MenuItem,menui} from '@material-ui/core'
 

export class FooterComponent extends React.Component {
   constructor(props){
       super();
   }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"   color="inherit" aria-label="menu">
                         
                    </IconButton>
                    <Typography variant="h6" >
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    };
}

