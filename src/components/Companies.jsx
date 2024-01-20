import { Button, Card, Flex, Space, Typography } from 'antd'
import React from 'react'
import { investingData } from '../data'
import { companyNameAtorm } from '../lib/atoms'
import { useAtom } from 'jotai'

const Companies = () => {
  const [companyName,setCompanyName] = useAtom(companyNameAtorm);
  const handleClick = (name) => {
    setCompanyName(name)
  }
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card title="Name/Price" size="large" style={{height:250}}>
      {
        investingData.map((item, i) => (
          <Flex justify='space-between' align='center'>
            <div style={{width:'100%'}}>
              <Typography.Title fon level={4}>{item.name}</Typography.Title>
            </div>
            <div style={{width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
              <Typography.Paragraph style={{color:'#808080'}}>{item.currentPrice}</Typography.Paragraph>
            </div>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end',alignItems:'center'}}>
              <Button onClick={() => handleClick(item.name)} className='linkHoverBg'>{`Details`}</Button>
            </div>
          </Flex>
        ))
      }
      </Card>
    </Space>
  )
}

export default Companies