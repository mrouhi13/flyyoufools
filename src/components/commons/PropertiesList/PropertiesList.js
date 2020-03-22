import { List, Tooltip, Typography } from 'antd'
import React from 'react'

export const PropertiesList = ({header, items, icon}) => (
    <List
        header={<Typography.Title level={4}>{header}</Typography.Title>}
        itemLayout='horizontal'
        locale={{emptyText: ' '}}
        split={false}
        dataSource={items}
        renderItem={item => (
            <List.Item>
                {icon}
                <Tooltip title={item.tip}>
                    <Typography.Text>{item.name}</Typography.Text>
                </Tooltip>
            </List.Item>
        )}
    />
)
