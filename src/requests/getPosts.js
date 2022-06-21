import axios from "axios";

export const getPosts=async(dispatch)=>{
    try{
        const response =await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        dispatch({type:"GET_POSTS_SUCCESS",payload:response.data})
    }catch(err){
        console.log(err,"Fail");
        dispatch({type:"GET_POSTS_FAIL",error:err.message})
    }
    
}