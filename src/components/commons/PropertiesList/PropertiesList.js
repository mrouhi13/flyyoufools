import { List, Tooltip, Typography } from 'antd'
import QueueAnim from 'rc-queue-anim'

import React from 'react'

export const PropertiesList = ({header, items, icon, animationType}) => (
    <QueueAnim type={animationType}>
        <List
            header={<Typography.Title level={4}>{header}</Typography.Title>}
            itemLayout='horizontal'
            locale={{emptyText: ' '}}
            split={false}
            key='a'
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
    </QueueAnim>
)
