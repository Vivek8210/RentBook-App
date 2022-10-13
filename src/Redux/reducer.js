import {GET_NOVELS_REQUEST,GET_NOVELS_SUCCESS,GET_NOVELS_FAILURE} from './actionType';
import { ADD_CART_DATA_REQUEST,ADD_CART_DATA_SUCCESS,ADD_CART_DATA_FAILURE,FETCH_CART_SUCCESS } from "./actionType";

const initialState ={
    isLoading:false,
    products:[],
    isError:false,
    cart:[],
  
}

export const reducer = (state=initialState,{type,payload}) =>{

    switch(type){
        
        case GET_NOVELS_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
            case GET_NOVELS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                products:payload
            }
            case GET_NOVELS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }

            case ADD_CART_DATA_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                    isError: false
                }
                case ADD_CART_DATA_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    cart: [...state.cart,payload],
                    isError: false
                }
                case ADD_CART_DATA_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true
                }
                case FETCH_CART_SUCCESS :
                    return{
                        ...state,
                        cart:[...payload],
                    }
            default:
                return state
        }
    }