import { Button, Col, Row, Typography } from 'antd'
import QueueAnim from 'rc-queue-anim'
import React, { Fragment, useEffect, useRef } from 'react'
import { StepsProgress } from '..'
import { useStep } from '../../../hooks'
import './Steps.scss'

export const Steps = () => {
    const myRef = useRef(null)
    const {steps, changeStep} = useStep()
    const useMountEffect = fun => useEffect(fun, [])

    const scrollToRef = (ref) => {
        ref.current.firstChild.scrollLeft = steps.currentStep.number * 144
    }

    useMountEffect(() => scrollToRef(myRef))

    return (
        <Fragment>
            <Row key='1' justify='center'>
                <Col span={20}>
                    <div ref={myRef}>
                        <StepsProgress/>
                    </div>
                </Col>
            </Row>
            <Row key='2'>
                <Col span={24}>
                    <QueueAnim type={['left']}>
                        {!steps.isLoading ?
                            <div key='a'
                                 className='align-center question-body'>
                                <Typography.Text>
                                    {steps.currentStep.questionBody}
                                </Typography.Text>
                            </div> : null}
                    </QueueAnim>
                </Col>
            </Row>
            <Row key='3'>
                <Col span={24}>
                    <QueueAnim type={['right']}>
                        {!steps.isLoading ?
                            <div key='a' className='align-center'>
                                <Button type='primary'
                                        className='answer-button'
                                        onClick={() => {
                                            scrollToRef(myRef)
                                            changeStep(true)
                                        }}
                                >
                                    Yes
                                </Button>
                                <Button className='answer-button'
                                        onClick={() => {
                                            scrollToRef(myRef)
                                            changeStep(false)
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
