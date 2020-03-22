import { useContext } from 'react'
import { LICENSES, STEPS } from '../constants'
import { StepContext } from '../contexts'
import { stepActions } from '../reducers'

export const useStep = () => {
    const {steps, dispatch} = useContext(StepContext)

    const changeStep = (currentStepAnswer) => {
        dispatch({
            type: stepActions.IS_LOADING,
            payload: true
        })

        let nextAction = {}
        let nextStep = {}
        const currentStep = steps.currentStep

        if (currentStepAnswer) {
            nextAction = currentStep.onYesAction
        } else {
            nextAction = currentStep.onNoAction
        }

        if (nextAction.end === true) {
            dispatch({
                type: stepActions.SET_APPROPRIATE_LICENSE,
                payload: LICENSES.filter(license => license.slug === nextAction.appropriateLicense)[0]
            })
        } else {
            if (nextAction.nextStep === currentStep.number) {
                nextStep = currentStep.subSteps.filter(
                    substep => substep.number === nextAction.subStep)[0]
            } else {
                nextStep = STEPS.filter(
                    step => step.number === nextAction.nextStep)[0]
            }

            dispatch({
                type: stepActions.UPDATE_CURRENT_STEP,
                payload: nextStep
            })
        }

        setTimeout(() => dispatch({
                type: stepActions.IS_LOADING,
                payload: false
            }), 200
        )
    }

    const resetState = () => {
        dispatch({
            type: stepActions.RESET_STATE,
            payload: STEPS[0]
        })

        setTimeout(() => dispatch({
                type: stepActions.IS_LOADING,
                payload: false
            }), 200
        )
    }

    const backToLastStep = () => {
        dispatch({
            type: stepActions.UPDATE_CURRENT_STEP,
            payload: steps.currentStep
        })

        setTimeout(() => dispatch({
                type: stepActions.IS_LOADING,
                payload: false
            }), 200
        )
    }

    return {steps, changeStep, resetState, backToLastStep}
}
