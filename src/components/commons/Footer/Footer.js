import { Button, Col, Divider, Layout, Popover, Row, Typography } from 'antd'
import React from 'react'
import { DonatePopover } from '..'
import './Footer.scss'

export const Footer = () => (
    <Layout.Footer className='layout-footer'>
        <Row align='middle'>
            <Col xs={{span: 15}}
                 md={{span: 12}}
                 lg={{span: 8}}
                 xl={{span: 16}}
            >
                <Typography.Text disabled>by </Typography.Text>
                <Typography.Text className='copyright'
                                 type='secondary'
                >
                    Majid Rouhi
                </Typography.Text>
                <Divider type='vertical' className='divider'/>
                <Popover trigger='click'
                         content={<DonatePopover/>}
                         placement='topLeft'
                >
                    <Button type='link' size='small'>Donate</Button>
                </Popover>
            </Col>
            <Col xs={{span: 9}}
                 md={{span: 12}}
                 lg={{span: 16}}
                 xl={{span: 8}}
            >
                <Button type='link'
                        className='github-logo'
                        size='small'
                        target='_blank'
                        href='https://github.com/mrouhi13/flyyoufools'
                >
                    <img width='28'
                         height='100%'
                         src={process.env.PUBLIC_URL + `/static/media/gh-mark-dark.svg`}
                         title='Girhub Repository'
                         alt='Github Repository'/>
                </Button>
            </Col>
        </Row>
    </Layout.Footer>
)
