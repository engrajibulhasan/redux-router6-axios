import { useDispatch, useSelector } from "react-redux";
import { bookDecrement, bookIncrement } from "./actions";

function Books() {
    const petCounter=useSelector((state)=>state.petCounter);
    const bookCounter=useSelector((state)=>state.bookCounter);
    const dispatch=useDispatch()
  return (
    <div>
        <hr/>
        <h1>Book Counter Using Redux</h1>
        <button onClick={()=>dispatch(bookIncrement(1))}> Add Book</button>
        <button onClick={()=>dispatch(bookDecrement())}> Remove Book</button>
        <h3>Total Book: {bookCounter}</h3>
        <h3>Total Pet: {petCounter}</h3>

    </div>
  )
}

export default Books