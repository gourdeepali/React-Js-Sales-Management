import React from 'react'
import {Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Link } from 'react-router-dom'
// import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';

function NavBar() {

    const linkStyle ={
        textEmphasisColor:"black" , 
        backgroundColor:"#009688",
        marginLeft:10,
        color:"white",
        textDecoration:"none"
    }

    return (
        <AppBar style= {{backgroundColor:"#009688"}}>
            <Toolbar>
                <Link to="/" style={{textDecoration:"none"}} >
                    <Button label="Products"  style={linkStyle} >Products</Button>
                </Link>
                    
                <Link to="/salesRepresentatives" style={{textDecoration:"none"}} >
                    <Button label="Sales Representatives" style={linkStyle} >Sales Representatives</Button>
                </Link>

                <Link to="/manager" style={{textDecoration:"none" , marginRight:0}} >   
                    <Button label="Manager Login"  style={linkStyle} >Manager Login </Button>
                </Link>

            </Toolbar>

        </AppBar>           
        
    )
}

export default NavBar
