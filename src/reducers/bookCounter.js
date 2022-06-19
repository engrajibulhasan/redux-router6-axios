const bookCounter=(state=0,action)=>{
    switch (action.type) {
        case "INCREASE_BOOK":
            return state+action.payload;
        case "DECREASE_BOOK":
            return state-1;
        default:
            return state
            
    }
}
export default  bookCounter;
