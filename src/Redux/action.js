import {GET_NOVELS_REQUEST,GET_NOVELS_SUCCESS,GET_NOVELS_FAILURE} from './actionType';
import axios from 'axios';


export const getProducts = (payload,q) => dispatch =>{
 
    dispatch({type: GET_NOVELS_REQUEST})
    return axios.get(`http://localhost:8080/history?_limit=8`,payload)
    .then((r)=>{
        dispatch({type:GET_NOVELS_SUCCESS,payload:r.data});
        return GET_NOVELS_SUCCESS
    })
    .catch((err) =>dispatch({type:GET_NOVELS_FAILURE,payload:err}))
  }