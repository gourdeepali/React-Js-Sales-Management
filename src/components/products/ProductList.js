import React , {useEffect}  from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'
import fetchProducts from '../../actions/productAction'
import fetchSr from '../../actions/srAction'

function ProductList({fetchProducts , productState , componentName , srState , fetchSr}) {

    useEffect( () => {
         fetchProducts()
         fetchSr()
    },[])

    let products=[]

    if(componentName === "Products")
     products = productState.products 
     else
     products = srState.sr


    return (

        <Paper style={{marginBottom:40}}>
           { products.map( product =>
        <Paper key={product.id} style={{marginBottom:40}} >
            <div>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <span style={{marginLeft:20, marginTop:10}}>
                    <Avatar alt="Remy Sharp"  src={product.img} 
                    style={{position:"absolute" , width:100 , height:100 , marginLeft:20 }} />
                    </span>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <span>                    
                    <h3> {product.name}</h3>
                    <h4>{product.price }</h4>
                    <h4>{product.designation}</h4>
                    
                    </span>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <span>                        
                    {(componentName === "Products")?
                    ( product.quantity >= 0 )? <h4>Available</h4> : <h4>Unavailable </h4> :
                    <span>
                        <h4>Division - {product.division}</h4>
                        <h4>Manager - {product.manager}</h4>
                    </span>
                    }
                    </span>
                </Grid>
                
                {
                (componentName === "Products") ?
                    <Grid item xs={6} sm={3}>
                    <Button variant="outlined" style={{color:"#f50057" , marginBottom:10}}>Add to Cart</Button>
                    <br />
                    <Link to ={`/products/${product.id}`} style={{textDecoration:"none"}} > 
                        <Button variant="outlined" style={{color:"#f50057" }}>Details</Button>
                    </Link>
                    </Grid>
                     :
                    <Grid item xs={6} sm={3}>
                    <Link to ={`/salesRepresentatives/${product.id}`} style={{textDecoration:"none"}} > 
                        <Button variant="outlined" style={{color:"#f50057" }}>Details</Button>
                    </Link>
                    </Grid>

                }
                
             
                

            
                
                
            
              
                                      
            </Grid>   
            </div> 
        </Paper>
        )}
        </Paper>  
    )    
        
    }

const mapStateToProps = state => {
    return{
        productState : state.productReducer,
        srState: state.srReducer
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchProducts: ()=>{dispatch(fetchProducts())},
        fetchSr: ()=>{dispatch(fetchSr())}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ProductList)