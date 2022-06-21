const initialState={
    posts:[],
    error:null,
    loading:false
}
const posts=(state=initialState,action)=>{
    
    switch(action.type){
        case "GET_POSTS_REQUESTED":
            return {...state,loading:true}
        case "GET_POSTS_SUCCESS":
            return {...state,loading:false,posts:action.payload}
        case "GET_POSTS_FAILD":
            return {...state,loading:false,error:action.payload}
        default:
            return {state}
    }
}
export default posts;