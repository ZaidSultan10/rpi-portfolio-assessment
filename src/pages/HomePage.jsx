import React, { useEffect, useState } from 'react'
import { Col, Divider, Flex, Layout, Row } from 'antd'
import PortfolioHeader from '../components/PortfolioHeader'
import Typography from 'antd/es/typography/Typography'
import PriceChart from '../components/PriceChart'
import Companies from '../components/Companies'
import Profile from '../components/Profile'
import News from '../components/News'
import useWindowWidth from '../hooks/useWindowWidth'
import { companyNameAtorm } from '../lib/atoms'
import { useAtom } from 'jotai'

const HomePage = () => {
    const innerWidth = useWindowWidth()
    const [companyName] = useAtom(companyNameAtorm);

  return (
    <section>
        <Layout style={{ margin:'12px auto', padding:'16px'}}>
            <Layout>
                <PortfolioHeader />
                <Divider style={{border:'1px solid red'}} />
            </Layout>
            <Flex gap={8} vertical = {innerWidth < 750 }>
                <Layout style={{width : innerWidth < 750 ? '100%' : '60%'}}>
                    <Typography.Title level={4}>{`Price`}</Typography.Title>
                    <PriceChart />
                </Layout>
                <Layout style={{width : innerWidth < 750 ? '100%' : '40%', marginTop : innerWidth < 750 ? '2rem' : '0'}}>
                    <Typography.Title level={4}>{`Companies`}</Typography.Title>
                    <Companies />
                </Layout>
            </Flex>
            <Flex gap={8} vertical = {innerWidth < 750 }  style={{marginTop : '2rem'}}>
                <Layout style={{width : innerWidth < 750 ? '100%' : '40%'}}>
                    <Typography.Title level={4}>{`Profile`}</Typography.Title>
                    <Profile />
                </Layout>
                <Layout style={{width : innerWidth < 750 ? '100%' : '60%', marginTop : innerWidth < 750 ? '2rem' : '0'}}>
                    <Typography.Title level={4}>{`News by ${companyName}`}</Typography.Title>
                    <News />
                </Layout>
            </Flex>
        </Layout>
    </section>
  )
}

export default HomePage