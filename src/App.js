import { useDispatch, useSelector } from "react-redux";
import { petDecrement, petIncrement } from "./actions";

function App() {
  const petCounter=useSelector((state)=>state.petCounter);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>React Redux SAGA basic</h1>
      <button onClick={()=>dispatch(petIncrement(1))}>Pet Increament Action</button>
      <button onClick={()=>dispatch(petDecrement())}>Pet Decrement Action</button>
      <p>Pet counter: {petCounter}</p>
    </div>
  );
}

export default App;
