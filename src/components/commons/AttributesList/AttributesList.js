import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { List, Typography } from 'antd'
import QueueAnim from 'rc-queue-anim'
import React from 'react'
import './AttributesList.scss'

export const AttributesList = ({header, items, animationType}) => (
    <QueueAnim type={animationType}>
        <List header={<Typography.Title level={4}>{header}</Typography.Title>}
              itemLayout='horizontal'
              split={false}
              key='a'
              locale={{emptyText: 'No item!'}}
              dataSource={items}
              renderItem={item => (
                  <List.Item>
                      {item._value ?
                          <CheckCircleOutlined className='item-icon'
                                               style={{color: '#52c41a'}}
                          /> :
                          <CloseCircleOutlined className='item-icon'
                                               style={{color: '#f5222d'}}
                          />}
                      {item.name}
                  </List.Item>
              )}
        />
    </QueueAnim>
)
