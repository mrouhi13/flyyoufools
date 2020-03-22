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

export const LicenseDetails = () => {
    const {steps, resetState, backToLastStep} = useStep()
    const licenseInfo = steps.appropriateLicense

    return (
        <Result
            className='license-details-layout'
            title={licenseInfo.name}
            status='info'
            icon={
                licenseInfo.logo ? <img
                        src={process.env.PUBLIC_URL + `/static/media/logos/${licenseInfo.logo}`}
                        title={licenseInfo.name}
                        alt={licenseInfo.name}
                        width='80px'
                        height='100%'
                    /> :
                    <ExclamationOutlined style={{color: '#faad14'}}/>
            }
            subTitle={
                <Row>
                    <Col xs={{span: 24}}
                         md={{span: 16, offset: 4}}
                         lg={{span: 18, offset: 3}}
                         xl={{span: 18, offset: 3}}
                    >
                        <Typography.Text>{licenseInfo.description}
                            {
                                licenseInfo.read_more_link ? <Button
                                    type='link'
                                    size='small'
                                    href={licenseInfo.read_more_link}
                                    target='_blank'>
                                    Read more...
                                </Button> : null
                            }
                        </Typography.Text>
                    </Col>
                </Row>
            }
            extra={[
                <Button onClick={() => backToLastStep()}
                        type='primary'
                        key='back'
                >
                    Go Back
                </Button>,
                <Button onClick={() => resetState()}
                        key='reset'
                >
                    Reset
                </Button>
            ]}
        >
            <Row>
                <Col xs={{span: 24}}
                     md={{span: 12}}
                     lg={{span: 6}}
                     xl={{span: 6}}
                >
                    <PropertiesList header='Permissions'
                                    items={licenseInfo.permissions}
                                    icon={<CheckCircleOutlined
                                        className='item-icon'
                                        style={{color: '#52c41a'}}
                                    />}
                    />
                </Col>
                <Col xs={{span: 24}}
                     md={{span: 12}}
                     lg={{span: 6}}
                     xl={{span: 6}}
                >
                    <PropertiesList header='Limitations'
                                    items={licenseInfo.limitations}
                                    icon={<CloseCircleOutlined
                                        className='item-icon'
                                        style={{color: '#f5222d'}}
                                    />}
                    />
                </Col>
                <Col xs={{span: 24}}
                     md={{span: 12}}
                     lg={{span: 6}}
                     xl={{span: 6}}
                >
                    <PropertiesList header='Conditions'
                                    items={licenseInfo.conditions}
                                    icon={<InfoCircleOutlined
                                        className='item-icon'
                                        style={{color: '#1890ff'}}
                                    />}
                    />
                </Col>
                <Col xs={{span: 24}}
                     md={{span: 12}}
                     lg={{span: 6}}
                     xl={{span: 6}}
                >
                    <AttributesList header='Properties'
                                    items={licenseInfo.attributes}
                    />
                </Col>
            </Row>
        </Result>
    )
}
