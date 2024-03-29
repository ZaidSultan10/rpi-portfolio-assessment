import { Card, Layout, Space } from 'antd'
import React from 'react'
import {data, investingData} from '../data'
import { ResponsiveLine } from '@nivo/line'

const PriceChart = () => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Card size="large">
        <Layout style={{height: 200, backgroundColor:'white'}}>
          <ResponsiveLine
              data={data}
              margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{
                  type: 'linear',
                  min: 'auto',
                  max: 'auto',
                  stacked: true,
                  reverse: false
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Date',
                  legendOffset: 36,
                  legendPosition: 'middle'
              }}
              axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'closing Price',
                  legendOffset: -40,
                  legendPosition: 'middle'
              }}
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                  {
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: 'left-to-right',
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: 'circle',
                      symbolBorderColor: 'rgba(0, 0, 0, .5)',
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemBackground: 'rgba(0, 0, 0, .03)',
                                  itemOpacity: 1
                              }
                          }
                      ]
                  }
              ]}
          />
        </Layout>
      </Card>
    </Space>
  )
}

export default PriceChart