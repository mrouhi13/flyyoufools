import { Layout, Typography } from 'antd'
import React from 'react'
import { APP_LOGO } from '../../../constants'
import './Header.scss'

export const Header = () => (
    <Layout.Header className='layout-header'>
        <div className='app-logo'>
            <img src={process.env.PUBLIC_URL + `/static/media/${APP_LOGO}`}
                 width='36'
                 height='36'
                 title='FlyYouFools'
                 alt='FlyYouFools'
            />
            <Typography.Title level={1}
                              style={{fontSize: 18, display: 'inline-flex'}}>
                FlyYouFools
            </Typography.Title>
        </div>
    </Layout.Header>
)
