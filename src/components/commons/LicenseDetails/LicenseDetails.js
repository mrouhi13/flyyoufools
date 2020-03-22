import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    ExclamationOutlined,
    InfoCircleOutlined
} from '@ant-design/icons'
import { Button, Col, Result, Row, Typography } from 'antd'
import React from 'react'
import { AttributesList, PropertiesList } from '..'
import { useStep } from '../../../hooks'
import './LicenseDetails.scss'

const {Text} = Typography

export const LicenseDetails = () => {
    const {steps, resetState, backToLastStep} = useStep()
    const licenseInfo = steps.appropriateLicense

    return (
        <Result
            className='license-details-layout'
            icon={
                licenseInfo.logo ? <img
                        src={process.env.PUBLIC_URL + `/static/media/logos/${licenseInfo.logo}`}
                        alt={licenseInfo.name}
                        title={licenseInfo.name}
                        width='80px'
                        height='100%'
                    /> :
                    <ExclamationOutlined style={{color: 'orange'}}/>
            }
            title={licenseInfo.name}
            subTitle={
                <Row>
                    <Col span={12} offset={6}>
                        <Text>{licenseInfo.description}&nbsp;
                            {
                                licenseInfo.read_more_link ? <a
                                    href={licenseInfo.read_more_link}
                                    target='_blank'>
                                    Read more...
                                </a> : null
                            }
                        </Text>
                    </Col>
                </Row>
            }
            extra={[
                <Button
                    type='primary'
                    key='back'
                    onClick={() => backToLastStep()}
                >
                    Go Back
                </Button>,
                <Button
                    key='reset'
                    onClick={() => resetState()}>
                    Reset
                </Button>
            ]}
            status='info'>
            <Row>
                <Col span={6}>
                    <PropertiesList
                        header='Permissions'
                        items={licenseInfo.permissions}
                        icon={<CheckCircleOutlined
                            className='item-icon'
                            style={{color: 'green'}}
                        />}
                    />
                </Col>
                <Col span={6}>
                    <PropertiesList
                        header='Limitations'
                        items={licenseInfo.limitations}
                        icon={<CloseCircleOutlined
                            className='item-icon'
                            style={{color: 'red'}}
                        />}
                    />
                </Col>
                <Col span={6}>
                    <PropertiesList
                        header='Conditions'
                        items={licenseInfo.conditions}
                        icon={<InfoCircleOutlined
                            className='item-icon'
                            style={{color: 'blue'}}
                        />}
                    />
                </Col>
                <Col span={6}>
                    <AttributesList
                        header='Properties'
                        items={licenseInfo.attributes}
                    />
                </Col>
            </Row>
        </Result>
    )
}
