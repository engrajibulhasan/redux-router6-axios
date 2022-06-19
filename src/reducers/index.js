import { combineReducers } from "redux";
import bookCounter from "./bookCounter";
import petCounter from "./petCounter";
import users from "./users";
const reducers=combineReducers({
    petCounter,
    bookCounter,
    users
    
})
export default reducers;