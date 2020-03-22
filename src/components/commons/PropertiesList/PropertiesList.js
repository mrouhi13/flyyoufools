import { List, Tooltip, Typography } from 'antd'
import React from 'react'

const {Title, Text} = Typography

export const PropertiesList = ({header, items, icon}) => (
    <List
        header={<Title level={4}>{header}</Title>}
        itemLayout='horizontal'
        locale={{emptyText: ' '}}
        split={false}
        dataSource={items}
        renderItem={item => (
            <List.Item>
                {icon}
                <Tooltip title={item.tip}>
                    <Text>{item.name}</Text>
                </Tooltip>
            </List.Item>
        )}
    />
)
