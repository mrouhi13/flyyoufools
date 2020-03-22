import { Button, Col, Row, Typography } from 'antd'
import React, { Fragment } from 'react'
import { StepsProgress } from '..'
import { useStep } from '../../../hooks'
import './Steps.scss'

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
                <Col span={24}>
                    <div className='align-center question-body'>
                        <Typography.Text>
                            {steps.currentStep.questionBody}
                        </Typography.Text>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div className='align-center'>
                        <Button type='primary'
                                className='answer-button'
                                onClick={() => {
                                    changeStep(true)
                                }}
                        >
                            Yes
                        </Button>
                        <Button className='answer-button'
                                onClick={() => {
                                    changeStep(false)
                                }}
                        >
                            No
                        </Button>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}
