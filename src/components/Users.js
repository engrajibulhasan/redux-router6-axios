import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../requests/getUsers";


function Users() {
  const users=useSelector((state)=>state.users);
  const dispatch=useDispatch();

  return (
    <div>
      <h1>All users| Users</h1> <hr/>
      <button onClick={()=>getUsers(dispatch)}>Fetch users</button>
      <ul>
        {
          users.loading?"Loading..."
          :
          users.users.length>0?users.users.map((item,index)=><li key={index}>{item.name}</li>):"No users"
        }
      </ul>
    </div>
    
  )
}

export default Users