import { Flex, Layout, Slider, Typography } from 'antd'
import React from 'react'
import { data } from '../data'
import moment from 'moment'

const PortfolioHeader = () => {
  return (
    <Flex style={{width : '100%'}} justify='space-between' align='center' horizontal>
        <Layout style={{width : '100%'}}>
            <Typography.Title level={3}>{`Portfolio Tracker`}</Typography.Title>
        </Layout>
        <Layout style={{width : '200px', border: '2px solid #ed1b2f', borderRadius : '8px'}}>
            <Slider 
            range={{
                draggableTrack: true,
            }}
            defaultValue={[moment(data[0].data[0].x).valueOf(),moment(data[data.length - 1].data[data.length - 1].x).valueOf()]} />
        </Layout>
    </Flex>
  )
}

export default PortfolioHeader