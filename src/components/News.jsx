import { Divider, Flex, Image, Typography, Space, Card } from 'antd'
import { useAtom } from 'jotai';
import React from 'react'
import { companyNameAtorm } from '../lib/atoms';
import { investingData } from '../data';
import { Link } from 'react-router-dom';

const News = () => {
  const [companyName] = useAtom(companyNameAtorm);
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card size="large">
      {investingData.filter(elem => elem.name === companyName)[0].news.map((item, i) => (
        <React.Fragment>
          <Flex gap={16}>
            <div>
              <Image width={60} height={60} style={{borderRadius:'8px', objectFit:'cover'}} src={item.image} />
            </div>
            <div>
              <Link to={item.snippet} target='_blank'><Typography.Title className='linkHover' level={5}>{item.title}</Typography.Title></Link>
              <Typography.Paragraph style={{color:'#808080'}}>{`By ${item.source}`}</Typography.Paragraph>
            </div>
          </Flex>
          {i !== (investingData.filter(elem => elem.name === companyName)[0].news.length - 1) && (
            <Divider />
          )}
        </React.Fragment>
      ))}
      </Card>
    </Space>
  )
}

export default News