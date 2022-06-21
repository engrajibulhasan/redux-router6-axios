import axios from "axios";

export const getUsers=async(dispatch)=>{
    dispatch({type: "GET_USERS_REQUESTED"})
    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({type: "GET_USERS_SUCCESS",payload:response.data})
    }catch(err){
        console.log(err.message,"The users");
        dispatch  ({type: "GET_USERS_FAILED",payload:err.message})   
    }
}
