const initState = {
    bookings:[],
    firstBooking: [],
    id:'',
    updatedPosts: []
}

const getCategories = (state= initState, action) => {
    switch(action.type){
        case 'GET_BOOKING':
            return{
                ...state,
                bookings: action.payload
            }
        case 'GET_FIRST_BOOKING':
            return{
                ...state,
                firstBooking: action.payload
            }
        case 'SEND_ID':
            return {
                ...state,
                id: action.payload
            }
        case 'UPDATE_POSTS':
            return {
                ...state,
                updatedPosts: action.payload
            }
        default:
            return state
    }
}


export default getCategories