export const mainService = (name) => {
    return dis=> {
        dis({type:'MAIN_SERVICE', payload: name})
    }
}

export const FirstStepService = (name) => {
    return dis=>{
        dis({type:'FIRST_STEP_SERVICE', payload:name})
    }
}
export const SecondStep = (name) => {
    return dis=>{
        dis({type:'SECOND_STEP_SERVICE', payload:name})
    }
}
export const ThirdStep = (name) => {
    return dis=>{
        dis({type:'THIRD_STEP_SERVICE', payload:name})
    }
}