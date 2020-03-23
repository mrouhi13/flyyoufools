import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/views'
import { StepContextProvider } from './contexts'
import './index.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <StepContextProvider>
        <App/>
    </StepContextProvider>,
    document.getElementById('root')
)

serviceWorker.register()
