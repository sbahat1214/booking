const initState = {
    mainService:'',
    firstStepService:'',
    secondStepService:'',
    thirdStepService:''

}

const serviceReducer = (state= initState, action) => {
    switch(action.type){
        case 'MAIN_SERVICE':
            return{
                ...state,
                mainService: action.payload
            }
        case 'FIRST_STEP_SERVICE':
            return {
                ...state,
                firstStepService: action.payload
            }
        case 'SECOND_STEP_SERVICE':
            return {
                ...state,
                secondStepService: action.payload
            }
        case 'THIRD_STEP_SERVICE':
            return {
                ...state,
                thirdStepService: action.payload
            }
        default:
            return state
    }
}


export default serviceReducer