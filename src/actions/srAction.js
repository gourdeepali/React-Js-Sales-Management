import {FETCH_SR , SR_FETCHED , ERROR_FETCHING_SR } from '../constants/srTypes'
import axios from 'axios'

export const fetchingSR =()=> {
    return{
        type:FETCH_SR
    }
}

export const srFetched = SR =>{
    return{
        type:SR_FETCHED,
        payload:SR
    }
}

export const errorFetchingSr = error =>{
    return{
        type:ERROR_FETCHING_SR,
        payload:error
    }
}

const fetchSR = () =>{
    return (dispatch) =>{

        // dispatch(fetchingSR())

        axios.get('http://localhost:8000/SR')
        .then(response =>{
            console.log(response.data)
            dispatch(srFetched(response.data))
        })
        .catch(error =>{
            console.log(error.message)
            dispatch(errorFetchingSr(error.message))
        })
    }
}

export default fetchSR