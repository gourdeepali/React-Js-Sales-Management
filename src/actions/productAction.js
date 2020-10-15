import { FETCH_PRODUCTS , PRODUCTS_FETCHED , ERROR_FETCHING_PRODUCTS , ADD_PRODUCT } from '../constants/productsType'
import axios from 'axios'

export const fetchingProducts =() =>{
    return{
        type:FETCH_PRODUCTS
    }
}

export const productsFetched = products =>{
    return{
        type:PRODUCTS_FETCHED,
        payload:products
    }
}

export const errorFetchingProducts = error =>{
    return{
        type:ERROR_FETCHING_PRODUCTS,
        payload:error
    }
}

export const addProduct = product =>{
    return{
        type:ADD_PRODUCT,
        payload:product
    }
}

 const fetchProducts = ()=>{
    return(dispatch) =>{
        dispatch(fetchingProducts())

        axios.get("http://localhost:8000/products")
        .then(response =>{
            // console.log(response.data)
            dispatch(productsFetched(response.data))
        })
        .catch(error =>{
            // console.log(error)
            dispatch(errorFetchingProducts(error.message))
        })
    }

}

export const addProducts = product =>{
   
    return(dispatch) =>{
        axios.post('http://localhost:8000/products' , product)
        .then(response =>{
            dispatch(addProduct(response.data))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

export default fetchProducts