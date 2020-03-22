import {
    GithubOutlined,
    MailOutlined,
    TwitterOutlined
} from '@ant-design/icons'
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { Fragment } from 'react'
import { BTC_WALLET_ADDRESS, ETH_WALLET_ADDRESS } from '../../../constants'
import './DonatePopover.scss'

export const DonatePopover = () => (
    <Fragment>
        <Row style={{width: '250px'}}>
            <Col span={11} className='align-center'>
                <Typography.Text strong>Bitcoin</Typography.Text>
                <img
                    src={process.env.PUBLIC_URL + `/static/media/btc-qr.svg`}
                    width='90' height='90'
                    title='Bitcoin Wallet' alt='Bitcoin Wallet'/>
                <Typography.Text
                    copyable={{text: BTC_WALLET_ADDRESS}}
                    className='donate-address'
                    type='secondary'
                >
                    {BTC_WALLET_ADDRESS.substr(0, 5)}...
                </Typography.Text>
            </Col>
            <Divider type='vertical' className='donate-divider-v'/>
            <Col span={11} className='align-center'>
                <Typography.Text strong>Ethereum</Typography.Text>
                <img
                    src={process.env.PUBLIC_URL + `/static/media/eth-qr.svg`}
                    width='90' height='90'
                    title='Ethereum Wallet' alt="Ethereum Wallet"/>
                <Typography.Text
                    copyable={{text: ETH_WALLET_ADDRESS}}
                    className='donate-address'
                    type='secondary'
                >
                    {ETH_WALLET_ADDRESS.substr(0, 5)}...
                </Typography.Text>
            </Col>
        </Row>
        <Divider className='donate-divider-h'>OR</Divider>
        <div className='align-center'>
            <Typography.Text className='donate-message'>
                Just an encouraging message :)
            </Typography.Text>
            <div>
                <Button type='link'
                        href='mailto:mrouhi13@gmail.com'
                        target='_blank'
                >
                    <MailOutlined/>
                </Button>
                <Button type='link'
                        href='https://twitter.com/mrouhi13'
                        target='_blank'
                >
                    <TwitterOutlined/>
                </Button>
                <Button type='link'
                        href='https://github.com/mrouhi13'
                        target='_blank'
                >
                    <GithubOutlined/>
                </Button>
            </div>
        </div>
    </Fragment>
)
