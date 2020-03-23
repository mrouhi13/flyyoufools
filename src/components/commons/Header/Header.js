import { ReloadOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Row, Typography } from 'antd'
import React from 'react'
import { APP_LOGO } from '../../../constants'
import { useStep } from '../../../hooks'
import './Header.scss'

export const Header = () => {
    const {resetState} = useStep()

    return (
        <Layout.Header className='layout-header'>
            <Row align='middle'>
                <Col xs={{span: 15}}
                     md={{span: 12}}
                     lg={{span: 8}}
                     xl={{span: 16}}
                >
                    <div className='app-logo'>
                        <img
                            src={process.env.PUBLIC_URL + `/static/media/${APP_LOGO}`}
                            width='36'
                            height='36'
                            title='FlyYouFools'
                            alt='FlyYouFools'
                        />
                        <Typography.Title level={1}
                                          style={{
                                              fontSize: 18,
                                              display: 'inline-flex'
                                          }}>
                            FlyYouFools
                        </Typography.Title>
                    </div>
                </Col>
                <Col xs={{span: 9}}
                     md={{span: 12}}
                     lg={{span: 16}}
                     xl={{span: 8}}
                >
                    <Button onClick={resetState}
                            className='reset-button'
                            icon={<ReloadOutlined/>}
                            size='small'
                            type='link'
                    >
                        Reset
                    </Button>
                </Col>
            </Row>
        </Layout.Header>
    )
}
