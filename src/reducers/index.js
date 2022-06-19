import { combineReducers } from "redux";
import bookCounter from "./bookCounter";
import petCounter from "./petCounter";
const reducers=combineReducers({
    petCounter,
    bookCounter,
    
})
export default reducers;