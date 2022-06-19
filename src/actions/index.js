export const petIncrement=(number)=>{
    return {
        type: "PET_INCREASED",
        payload:number
    }
}

export const petDecrement=(number)=>{
    return {
        type: "PET_DECREASED",
    }
}

export const bookIncrement=(number)=>{
    return {
        type: "INCREASE_BOOK",
        payload:number
    }
}

export const bookDecrement=()=>{
    return {
        type: "DECREASE_BOOK",
    }
}