import React from 'react'
import ProductNavComponent from './ProductNavComponent'
// import Paper from '@material-ui/core/Paper';
import ProductList from './ProductList';

function ProductComponent(props) {

    var componentName=props.match.path;
    if(componentName==="/"){
        componentName="Products"
    }
    else{
        componentName="Sales Representatives"
    }

    return (
        <div style={{marginTop:50}}>
            <h2>{componentName}</h2>
            <ProductNavComponent />
            
            <div style={{width: 800,  marginLeft:250}}>
            <ProductList componentName={componentName} />
            </div>           
        </div>
    )
}

export default ProductComponent
