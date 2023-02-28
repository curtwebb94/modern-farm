const field = [] //empty array that stores plants growing in the field

export const addPlant = (seed) => { //must accept a seed object and it to the fielde
    if (Array.isArray(seed)) { //if seed is an array
        field.push(seed[0])
        field.push(seed[1])
    } else {
        field.push(seed) //push seed object into the empty field array
    }
}
export const usePlants = () => {    //returns a copy of the array of plants
    return field
}


