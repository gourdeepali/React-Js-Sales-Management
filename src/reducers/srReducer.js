import {FETCH_SR , SR_FETCHED , ERROR_FETCHING_SR } from '../constants/srTypes'
// export interface State {loading:boolean;
//     sr:[];
//     error:String;}

const initialState = {
    loading:false,
    sr:[],
    error:''
}

const srReducer = (state = initialState , action) =>{
    switch(action.type){
        case FETCH_SR: return{
            ...state,
            loading:true
        }

        case SR_FETCHED: return{
            loading:false,
            sr:action.payload,
            error:''
        }

        case ERROR_FETCHING_SR: return{
            loading:false,
            sr:[],
            error:action.payload
        }

         default:return state
    }
}
export default srReducer