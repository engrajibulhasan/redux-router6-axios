import { combineReducers } from "redux";
import bookCounter from "./bookCounter";
import petCounter from "./petCounter";
import posts from "./posts";
import users from "./users";
const reducers=combineReducers({
    petCounter,
    bookCounter,
    users,
    posts
    
})
export default reducers;