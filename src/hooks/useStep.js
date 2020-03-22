import { useContext } from 'react'
import { LICENSES, STEPS } from '../constants'
import { StepContext } from '../contexts'
import { stepActions } from '../reducers'

export const useStep = () => {
    const {steps, dispatch} = useContext(StepContext)

    const changeStep = (currentStepAnswer, ref) => {
        dispatch({
            type: stepActions.IS_LOADING,
            payload: true
        })

        let nextAction = {}
        let nextStep = {}

        if (currentStepAnswer) {
            nextAction = steps.currentStep.onYesAction
        } else {
            nextAction = steps.currentStep.onNoAction
        }

        if (nextAction.end === true) {
            dispatch({
                type: stepActions.SET_APPROPRIATE_LICENSE,
                payload: LICENSES.filter(license => license.slug === nextAction.appropriateLicense)[0]
            })
        } else {
            nextStep = STEPS.filter(step => step.number === nextAction.nextStep)[0]

            dispatch({
                type: stepActions.UPDATE_CURRENT_STEP,
                payload: nextStep
            })
        }

        scrollToRef(ref, nextStep)

        setTimeout(() => dispatch({
                type: stepActions.IS_LOADING,
                payload: false
            }), 300
        )
    }

    const scrollToRef = (ref, currentStep) => {
        ref.current.firstChild.scrollLeft = (currentStep.number - 1) * 144
    }

    const resetState = () => {
        dispatch({
            type: stepActions.RESET_STATE,
            payload: STEPS[0]
        })

        setTimeout(() => dispatch({
                type: stepActions.IS_LOADING,
                payload: false
            }), 300
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
            }), 300
        )
    }

    return {steps, changeStep, scrollToRef, resetState, backToLastStep}
}
