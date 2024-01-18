import { Divider, Flex, Layout, Slider, Typography } from 'antd'
import React from 'react'

const PortfolioHeader = () => {
  return (
    <Flex style={{width : '100%'}} justify='space-between' align='center' horizontal>
        <Layout style={{width : '100%'}}>
            <Typography.Title level={3}>{`Portfolio Tracker`}</Typography.Title>
        </Layout>
        <Layout style={{width : '200px', border: '1px solid black', borderRadius : '4px'}}>
            <Slider 
            range={{
                draggableTrack: true,
            }}
            defaultValue={[20, 50]} />
        </Layout>
    </Flex>
  )
}

export default PortfolioHeader