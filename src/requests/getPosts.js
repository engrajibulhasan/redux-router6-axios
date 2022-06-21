import axios from "axios";
import { postsAPIUrl } from "../config";

export const getPosts=async(dispatch)=>{
    try{
        const response =await axios.get(postsAPIUrl);
        dispatch({type:"GET_POSTS_SUCCESS",payload:response.data})
    }catch(err){
        console.log(err,"Fail");
        dispatch({type:"GET_POSTS_FAIL",error:err.message})
    }
    
}