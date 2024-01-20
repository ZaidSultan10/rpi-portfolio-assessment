import Layout from 'antd/es/layout/layout'
import React from 'react'
import { Typography, Flex, Space, Card, Divider } from 'antd'
import { investingData } from '../data'
import { companyNameAtorm } from '../lib/atoms'
import { useAtom } from 'jotai'

const Profile = () => {
  const [companyName] = useAtom(companyNameAtorm);
  const htmlData = [{
    heading : `Company`,
    value : companyName
  },{
    heading : `Industry`,
    value : investingData.filter(elem => elem.name === companyName)[0].industry
  },{
    heading : `Sector`,
    value : investingData.filter(elem => elem.name === companyName)[0].sector
  },{
    heading : `Employees`,
    value : investingData.filter(elem => elem.name === companyName)[0].employees
  },{
    heading : `Market`,
    value : investingData.filter(elem => elem.name === companyName)[0].market
  }]
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card size="large">
        {
          htmlData.map(({heading, value}, i) => (
            <React.Fragment>
              <Flex gap={8} key={heading} justify='space-between'>
                <Typography.Title level={5}>{`${heading}:`}</Typography.Title>
                <Typography.Paragraph style={{textAlign:'end'}}>{value}</Typography.Paragraph>
              </Flex>
              {i !== (htmlData.length - 1) && (
                <Divider className='dividerMargin'/>
              )}
            </React.Fragment>
          ))
        }
      </Card>
    </Space>
  )
}

export default Profile