import { Button, Col, Row, Typography } from 'antd'
import React, { Fragment } from 'react'
import { StepsProgress } from '..'
import { useStep } from '../../../hooks'
import './Steps.scss'

const {Text} = Typography

export const Steps = () => {
    const {steps, changeStep} = useStep()

    return (
        <Fragment>
            <Row justify='center'>
                <Col span={20}>
                    <StepsProgress/>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <div className='align-center question-body'>
                        <Text style={{fontSize: 28}}>
                            {steps.currentStep.questionBody}
                        </Text>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <div className='align-center'>
                        <Button type='primary'
                                className='answer-button'
                                onClick={() => {
                                    changeStep(true)
                                }}>Yes</Button>
                        <Button className='answer-button'
                                onClick={() => {
                                    changeStep(false)
                                }}>No</Button>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}
