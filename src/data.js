import apple_news_1 from './assets/apples_news_1.jpg'
import apple_news_2 from './assets/apples_news_2.jpg'
import apple_news_3 from './assets/apples_news_3.jpg'
import tesla_news_1 from './assets/tesla_news_1.jpg'
import tesla_news_2 from './assets/tesla_news_2.jpg'
import tesla_news_3 from './assets/tesla_news_3.jpg'
import nvidia_news_1 from './assets/nvidia_news_1.jpg'
import nvidia_news_2 from './assets/nvidia_news_2.jpg'
import nvidia_news_3 from './assets/nvidia_news_3.jpg'

export const investingData = [{
    name : "Apple",
    stockCode : 'AAPL',
    currentPrice : "$191.56",
    industry : `Computers, Phones & Household Electronics`,
    sector : `Technology`,
    employees : 161000,
    market : `United States`,
    news : [{
        title : `S&P 500 notches first record high close in 2 years; chipmakers soar`,
        snippet : `https://www.investing.com/news/stock-market-news/futures-climb-as-chips-megacaps-gain-corporate-earnings-on-tap-3278106`,
        source : `Reuters`,
        image : apple_news_1
    },{
        title : `Stock Market Today: S&P 500 rallies to record high as tech reigns supreme`,
        snippet : `https://www.investing.com/news/stock-market-news/dow-futures-waver-as-market-awaits-further-earnings-3277847`,
        source : `Investing.com`,
        image : apple_news_2
    },{
        title : `The S&P 500’s wild ride to an all-time high`,
        snippet : `https://www.investing.com/news/economy/the-sp-500s-wild-ride-to-an-alltime-high-3278619`,
        source : `Reuters`,
        image : apple_news_3
    }],
    priceData : [{
        date : `12-01-2024`,
        close : 185.92,
        open : 186.06,
        high : 186.74,
        low : 185.19,
        volume : 40477784
    },{
        date : `16-01-2024`,
        close : 183.63,
        open : 182.16,
        high : 184.26,
        low : 180.93,
        volume : 65435616
    },{
        date : `17-01-2024`,
        close : 182.68,
        open : 181.27,
        high : 182.93,
        low : 180.30,
        volume : 47189744
    },{
        date : `18-01-2024`,
        close : 188.63,
        open : 186.09,
        high : 189.14,
        low : 185.83,
        volume : 77401264
    },{
        date : `19-01-2024`,
        close : 191.56,
        open : 189.33,
        high : 191.95,
        low : 188.82,
        volume : 68471288
    }]
},{
    name : "Tesla",
    stockCode : 'TSLA',
    currentPrice : "$212.13",
    industry : `Automobiles & Auto Parts`,
    sector : `Consumer Cyclicals`,
    employees : 127855,
    market : `United States`,
    news : [{
        title : `BlackRock's Updated Bitcoin (BTC) Holdings Uncovered, Hold on Tight`,
        snippet : `https://www.investing.com/news/cryptocurrency-news/blackrocks-updated-bitcoin-btc-holdings-uncovered-hold-on-tight-3278616`,
        source : `U.Today`,
        image : tesla_news_1
    },{
        title : `BYD distributor to triple EV dealerships in Thailand`,
        snippet : `https://www.investing.com/news/stock-market-news/byd-distributor-to-triple-ev-dealerships-in-thailand-432SI-3278533`,
        source : `Investing.com`,
        image : tesla_news_2
    },{
        title : `EPA sends vehicle emissions reduction plan to White House for review`,
        snippet : `https://www.investing.com/news/stock-market-news/epa-sends-vehicle-emissions-reduction-plan-to-white-house-for-review-3278556`,
        source : `Reuters`,
        image : tesla_news_3
    }],
    priceData : [{
        date : `12-01-2024`,
        close : 218.89,
        open : 220.08,
        high : 225.34,
        low : 217.15,
        volume : 123044000
    },{
        date : `16-01-2024`,
        close : 219.91,
        open : 215.10,
        high : 223.49,
        low : 212.18,
        volume : 114850000
    },{
        date : `17-01-2024`,
        close : 215.55,
        open : 214.86,
        high : 215.67,
        low : 212.01,
        volume : 102579000
    },{
        date : `18-01-2024`,
        close : 211.88,
        open : 216.88,
        high : 217.45,
        low : 208.74,
        volume : 107809000
    },{
        date : `19-01-2024`,
        close : 212.13,
        open : 209.99,
        high : 213.19,
        low : 207.56,
        volume : 101571000
    }]
},{
    name : "NVIDIA",
    stockCode : 'NVDA',
    currentPrice : "$594.91",
    industry : `Semiconductors & Semiconductor Equipment`,
    sector : `Technology`,
    employees : 22473,
    market : `United States`,
    news : [{
        title : `Meta Platforms' Zuckerberg hints company is spending billions on NVIDIA AI chips`,
        snippet : `https://www.investing.com/news/stock-market-news/meta-platforms-zuckerberg-hints-company-is-spending-billions-on-nvidia-ai-chips-432SI-3278359`,
        source : `Investing.com`,
        image : nvidia_news_1
    },{
        title : `Citi promotes Marvel to Top Pick, Nvidia moved lower`,
        snippet : `https://www.investing.com/news/stock-market-news/citi-promotes-marvel-to-top-pick-nvidia-moved-lower-432SI-3278275`,
        source : `Investing.com`,
        image : nvidia_news_2
    },{
        title : `Tech stocks rally on AI chip demand; jobless claims hit year low`,
        snippet : `https://www.investing.com/news/stock-market-news/tech-stocks-rally-on-ai-chip-demand-jobless-claims-hit-year-low-93CH-3277945`,
        source : `Investing.com`,
        image : nvidia_news_3
    }],
    priceData : [{
        date : `12-01-2024`,
        close : 584.10,
        open : 546.20,
        high : 549.70,
        low : 543.30,
        volume : 35299360
    },{
        date : `16-01-2024`,
        close : 563.82,
        open : 550.18,
        high : 568.35,
        low : 549.00,
        volume : 44150756
    },{
        date : `17-01-2024`,
        close : 560.53,
        open : 563.47,
        high : 564.71,
        low : 547.40,
        volume : 47253316
    },{
        date : `18-01-2024`,
        close : 571.07,
        open : 572.60,
        high : 576.00,
        low : 561.07,
        volume : 48616608
    },{
        date : `19-01-2024`,
        close : 594.91,
        open : 579.89,
        high : 595.00,
        low : 572.25,
        volume : 53706944
    }]
}]

export const data = [
    {
      "id": "japan",
      "color": "hsl(277, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 206
        },
        {
          "x": "helicopter",
          "y": 58
        },
        {
          "x": "boat",
          "y": 13
        },
        {
          "x": "train",
          "y": 63
        },
        {
          "x": "subway",
          "y": 299
        },
        {
          "x": "bus",
          "y": 44
        },
        {
          "x": "car",
          "y": 80
        },
        {
          "x": "moto",
          "y": 253
        },
        {
          "x": "bicycle",
          "y": 277
        },
        {
          "x": "horse",
          "y": 161
        },
        {
          "x": "skateboard",
          "y": 153
        },
        {
          "x": "others",
          "y": 8
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(330, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 73
        },
        {
          "x": "helicopter",
          "y": 221
        },
        {
          "x": "boat",
          "y": 237
        },
        {
          "x": "train",
          "y": 224
        },
        {
          "x": "subway",
          "y": 276
        },
        {
          "x": "bus",
          "y": 174
        },
        {
          "x": "car",
          "y": 297
        },
        {
          "x": "moto",
          "y": 216
        },
        {
          "x": "bicycle",
          "y": 88
        },
        {
          "x": "horse",
          "y": 20
        },
        {
          "x": "skateboard",
          "y": 123
        },
        {
          "x": "others",
          "y": 298
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(113, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 206
        },
        {
          "x": "helicopter",
          "y": 36
        },
        {
          "x": "boat",
          "y": 230
        },
        {
          "x": "train",
          "y": 5
        },
        {
          "x": "subway",
          "y": 226
        },
        {
          "x": "bus",
          "y": 295
        },
        {
          "x": "car",
          "y": 228
        },
        {
          "x": "moto",
          "y": 162
        },
        {
          "x": "bicycle",
          "y": 82
        },
        {
          "x": "horse",
          "y": 263
        },
        {
          "x": "skateboard",
          "y": 254
        },
        {
          "x": "others",
          "y": 147
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(134, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 142
        },
        {
          "x": "helicopter",
          "y": 18
        },
        {
          "x": "boat",
          "y": 247
        },
        {
          "x": "train",
          "y": 197
        },
        {
          "x": "subway",
          "y": 210
        },
        {
          "x": "bus",
          "y": 78
        },
        {
          "x": "car",
          "y": 228
        },
        {
          "x": "moto",
          "y": 268
        },
        {
          "x": "bicycle",
          "y": 16
        },
        {
          "x": "horse",
          "y": 248
        },
        {
          "x": "skateboard",
          "y": 69
        },
        {
          "x": "others",
          "y": 200
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(101, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 86
        },
        {
          "x": "helicopter",
          "y": 24
        },
        {
          "x": "boat",
          "y": 69
        },
        {
          "x": "train",
          "y": 189
        },
        {
          "x": "subway",
          "y": 255
        },
        {
          "x": "bus",
          "y": 173
        },
        {
          "x": "car",
          "y": 298
        },
        {
          "x": "moto",
          "y": 22
        },
        {
          "x": "bicycle",
          "y": 115
        },
        {
          "x": "horse",
          "y": 16
        },
        {
          "x": "skateboard",
          "y": 243
        },
        {
          "x": "others",
          "y": 43
        }
      ]
    }
  ]