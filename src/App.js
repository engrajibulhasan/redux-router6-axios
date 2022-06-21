import { useDispatch, useSelector } from "react-redux";
import { petDecrement, petIncrement } from "./actions";

function App() {
  const petCounter=useSelector((state)=>state.petCounter);
  const users=useSelector((state)=>state.users.users);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>React Redux &amp; Router6  basic | HOME</h1><hr/>
      <button onClick={()=>dispatch(petIncrement(1))}>Pet Add</button> 
      <button onClick={()=>dispatch(petDecrement())}>Pet Remove</button>
      <h3>Total Pet: {petCounter} Total Users: {users.length}</h3>
    </div>
  );
}

export default App;
