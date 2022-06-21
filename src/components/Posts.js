import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../requests/getPosts";

const Posts = () => {
    const posts=useSelector(state=>state.posts)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        getPosts(dispatch);
    },[])
  
  return (
    <div>
        <h1>All Posts</h1>
        {
          posts.loading?"Loading posts..."
          :  
          posts?.posts?.length>0?
          <ul>
            {posts.posts.map((item,index)=><li key={index}>
                <h4>{item.title} | Posted By {item.userId} </h4>
                <p>{item.body}</p>
                <Link to={`/post-detail/${item.id}`}>Read more..</Link>
            </li>)}
            
        </ul>
        :"No posts"
        }
        
    </div>
  )
}

export default Posts