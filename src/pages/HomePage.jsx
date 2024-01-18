import React from 'react'
import { Divider, Layout } from 'antd'
import PortfolioHeader from '../components/PortfolioHeader'

const HomePage = () => {
  return (
    <section>
        <Layout style={{maxWidth : '95%', margin:'12px auto', padding:'16px'}}>
            <Layout>
                <PortfolioHeader />
                <Divider />
            </Layout>
            <Layout>
                graphs
            </Layout>
            <Layout>
                news
            </Layout>
        </Layout>
    </section>
  )
}

export default HomePage