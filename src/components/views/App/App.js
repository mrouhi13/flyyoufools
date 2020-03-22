import { Button, Divider, Layout, Popover, Spin, Typography } from 'antd'
import React from 'react'
import { APP_LOGO } from '../../../constants'
import { useStep } from '../../../hooks'
import { DonatePopover, LicenseDetails, Steps } from '../../commons'
import './App.scss'

const {Header, Footer, Content} = Layout
const {Text} = Typography

export const App = () => {
    const {steps} = useStep()
    return (
        <Layout className='layout'>
            <Header className='layout-header'>
                <div className='app-logo'>
                    <img
                        src={process.env.PUBLIC_URL + `/static/media/${APP_LOGO}`}
                        alt='Fly You Fools'
                    />
                </div>
            </Header>
            <Content className='layout-content'>
                <Spin size='large' spinning={steps.isLoading}>
                    {steps.appropriateLicense ? <LicenseDetails/> : <Steps/>}
                </Spin>
            </Content>
            <Footer className='layout-footer'>
                <Popover
                    content={<DonatePopover/>}
                    trigger='click'
                    placement='topLeft'>
                    <Button type='link' size='small'>Donate</Button>
                </Popover>
                <Divider type='vertical' className='divider'/>
                <Button type='link'
                        size='small'
                        target='_blank'
                        href='https://github.com/mrouhi13/flyyoufools'
                >
                    Github
                </Button>
                <Divider type='vertical' className='divider'/>
                <Text className='message' disabled>by </Text>
                <Text type='secondary'>Majid Rouhi</Text>
            </Footer>
        </Layout>
    )
}
