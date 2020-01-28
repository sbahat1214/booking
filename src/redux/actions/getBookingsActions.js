import axios from 'axios'


export const getBookingsActions = () => {
    return dis=>{
        axios.get('http://sabahat.website/wp-json/wp/v2/categories?per_page=100&include[]=13&include[]=2&include[]=17&include[]=16')
        .then(res=>{
            dis({type:'GET_BOOKING', payload: res.data})
        })
    }
}

// export const getFirstStepBooking = (url) => {
//     console.log('myyy',url)
//     return dis=> {
//         axios.get('http://sabahat.website/wp-json/wp/v2/categories?per_page=100&parent=3')
//         .then(res=>{
//             console.log(res.data)
//             dis({type:'GET_FIRST_BOOKING', payload: res.data})
//         })
//     }
// }

export const sendId = (id) => {
    return dis=> {
        dis({type:'SEND_ID', payload: id})
    }
}

export const setUrl = (id) => {
    return dis=> {
        console.log(id)
        axios.get(`http://sabahat.website/wp-json/wp/v2/categories?parent=${id}`)
        .then(res=>(
            dis({type:'UPDATE_POSTS', payload:res.data})
        ))
    }
}