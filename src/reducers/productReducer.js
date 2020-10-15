import { FETCH_PRODUCTS , PRODUCTS_FETCHED , ERROR_FETCHING_PRODUCTS , ADD_PRODUCT} from '../constants/productsType'


const initialState = {
    loading:false,
    products:[],
    error:''
}

const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS: return{
            ...state,
            loading:true
        }
        
        case PRODUCTS_FETCHED: return{
            loading:false,
            products:action.payload,
            error:''
        }    

        case ERROR_FETCHING_PRODUCTS: return{
            loading:false,
            products:[],
            erorr:action.payload
        }

        case ADD_PRODUCT: 
        const p= state.products.concat(action.payload)
        return{
            loading:false,
            products:p,
            error:''
        }
        
        default: return state

    }
}

export default productReducer