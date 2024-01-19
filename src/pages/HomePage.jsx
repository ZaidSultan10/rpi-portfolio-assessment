import React from 'react'
import { Divider, Layout } from 'antd'
import PortfolioHeader from '../components/PortfolioHeader'
import Typography from 'antd/es/typography/Typography'
import PriceChart from '../components/PriceChart'

const HomePage = () => {
  return (
    <section>
        <Layout style={{maxWidth : '95%', margin:'12px auto', padding:'16px'}}>
            <Layout>
                <PortfolioHeader />
                <Divider />
            </Layout>
            <Layout>
                <Typography.Paragraph>Price</Typography.Paragraph>
                <PriceChart />
            </Layout>
            <Layout>
                news
            </Layout>
        </Layout>
    </section>
  )
}

export default HomePage