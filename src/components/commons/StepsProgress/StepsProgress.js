import { Steps } from 'antd'
import React from 'react'
import { STEPS } from '../../../constants'
import { useStep } from '../../../hooks'
import './StepsProgress.scss'

export const StepsProgress = () => {
    const {steps} = useStep()

    return (
        <Steps
            current={steps.currentStep.number - 1}
            labelPlacement='vertical'
            size='small'
            progressDot={true}
            className='steps-progress'
        >
            {STEPS.map(item => (
                <Steps.Step key={item.name} title={item.name}/>
            ))}
        </Steps>
    )
}
