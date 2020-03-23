export const stepActions = {
    UPDATE_CURRENT_STEP: 'UPDATE_CURRENT_STEP',
    SET_APPROPRIATE_LICENSE: 'SET_APPROPRIATE_LICENSE',
    RESET_STATE: 'RESET_STATE',
    IS_LOADING: 'IS_LOADING'
}

export const stepReducer = (state, action) => {
    switch (action.type) {
        case stepActions.UPDATE_CURRENT_STEP:
            return {
                ...state,
                currentStep: action.payload,
                appropriateLicense: null
            }
        case stepActions.SET_APPROPRIATE_LICENSE:
            return {...state, appropriateLicense: action.payload}
        case stepActions.RESET_STATE:
            return {...state, currentStep: action.payload, appropriateLicense: null}
        case stepActions.IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}
