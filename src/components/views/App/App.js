import { Layout } from 'antd'
import React from 'react'
import { useStep } from '../../../hooks'
import { Footer, Header, LicenseDetails, Steps } from '../../commons'
import './App.scss'

export const App = () => {
    const {steps} = useStep()

    return (
        <Layout className='layout'>
            <Header/>
            <Layout.Content className='layout-content'>
                {steps.appropriateLicense ? <LicenseDetails/> : <Steps/>}
            </Layout.Content>
            <Footer/>
        </Layout>
    )
}
