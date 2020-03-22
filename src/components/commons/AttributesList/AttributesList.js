import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { List, Typography } from 'antd'
import React from 'react'
import './AttributesList.scss'

const {Title} = Typography

export const AttributesList = ({header, items}) => (
        <List
            header={<Title level={4}>{header}</Title>}
            itemLayout='horizontal'
            split={false}
            locale={{emptyText: ' '}}
            dataSource={items}
            renderItem={item => (
                <List.Item>
                    {item._value ?
                        <CheckCircleOutlined className='item-icon'
                                             style={{color: 'green'}}
                        /> :
                        <CloseCircleOutlined className='item-icon'
                                             style={{color: 'red'}}
                        />}
                    {item.name}
                </List.Item>
            )}
        />
    )
