import React, { createContext, useReducer } from 'react'
import { stepReducer } from '../reducers'
import {STEPS} from '../constants'

export const StepContext = createContext(null)
export const StepContextProvider = ({children}) => {
    const initialState = {
        isLoading: false,
        currentStep: STEPS[0],
        appropriateLicense: null
    }
    const [steps, dispatch] = useReducer(stepReducer, initialState)
    return (
        <StepContext.Provider value={{steps, dispatch}}>
            {children}
        </StepContext.Provider>
    )
}
