import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { List, Typography } from 'antd'
import React from 'react'
import './AttributesList.scss'

export const AttributesList = ({header, items}) => (
    <List header={<Typography.Title level={4}>{header}</Typography.Title>}
          itemLayout='horizontal'
          split={false}
          locale={{emptyText: ' '}}
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
)
