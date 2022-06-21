import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
    const [postDetail,setPostDetail]=useState({
        userId:"",
        id:"",
        title:"",
        body:""
    })
    let {id}=useParams();
    const postRequest=async(id)=>{
        try{
            const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(response,"The response");
            setPostDetail(response.data)

        }catch(err){
            console.log(err,"The error");
        }
    }
    useEffect(()=>{
        postRequest(id);
    },[id])
  return (
    <div>
        <h1>{postDetail.title} by {postDetail.userId}</h1>
        <p>{postDetail.body}</p>
    </div>
  )
}

export default PostDetail