import { Button, Col, Row, Spin, Typography } from 'antd'
import QueueAnim from 'rc-queue-anim'
import React, { Fragment, useEffect, useRef } from 'react'
import { StepsProgress } from '..'
import { useStep } from '../../../hooks'
import './Steps.scss'

export const Steps = () => {
    const stepsProgressRef = useRef(null)
    const {steps, changeStep, scrollToRef} = useStep()

    useEffect(() => scrollToRef(stepsProgressRef, steps.currentStep),
        [steps])

    return (
        <Fragment>
            <Row justify='center'>
                <Col xs={{span: 18}} sm={{span: 18}} md={{span: 14}}
                     lg={{span: 12}} xl={{span: 12}}>
                    <div ref={stepsProgressRef}>
                        <StepsProgress/>
                    </div>
                </Col>
            </Row>
            <Row justify='center'>
                <Col xs={{span: 24}} sm={{span: 20}} md={{span: 14}}
                     lg={{span: 12}} xl={{span: 10}}>
                    <Spin spinning={steps.isLoading}>
                        <QueueAnim type={['left']}>
                            {!steps.isLoading ?
                                <div key='a'
                                     className='align-center question-body'>
                                    <Typography.Text>
                                        {steps.currentStep.questionBody}
                                    </Typography.Text>
                                </div> : null}
                        </QueueAnim>
                    </Spin>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <QueueAnim type={['right']}>
                        {!steps.isLoading ?
                            <div key='a' className='align-center'>
                                <Button type='primary'
                                        size='large'
                                        className='answer-button'
                                        onClick={() => {
                                            changeStep(true, stepsProgressRef)
                                        }}
                                >
                                    Yes
                                </Button>
                                <Button size='large'
                                        className='answer-button'
                                        onClick={() => {
                                            changeStep(false, stepsProgressRef)
                                        }}
                                >
                                    No
                                </Button>
                            </div> : null}
                    </QueueAnim>
                </Col>
            </Row>
        </Fragment>
    )
}
