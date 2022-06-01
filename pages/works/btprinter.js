import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import { Title, Header, Paragraph, WorkImage, Meta } from '@components/work'
import Layout from '@components/layouts/article'

const Work = () => (
    <Layout title="btprinter">
        <Container>
            <WorkImage src="btprinter-thumb.png" alt="btprinter thumbnail" />
            <Title>
                Binance Top Printer <Badge>2021-</Badge>
            </Title>
            <Paragraph>
                Also known as btprinter. This is the latest trading algorithm that I am running.
                In essence, the strategy requires periodically looking for the highest gainers over the past
                time period and takes a short position. As of May 2022, it has returned 7.5x
                since January 2022.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <span>coming soon...</span>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>Trading algorithm project / trading bot</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, Pandas, NumPy, Matplotlib</span>
                </ListItem>
            </List>

            <Header>
                Backtesting
            </Header>
            <WorkImage src="btprinter-theoretical-short.png" alt="btprinter short example" />
            <Paragraph>
                The above is a hypothetical trade btprinter will go short and then buy back for a lower cost.
            </Paragraph>
            <Paragraph>
                The following are the hypothetical returns of btprinter compared with the price of Bitcoin.
                Although I try to mimic real conditions by adding an excessive 0.4% trading fee for the backtests,
                there were many unforseen obstacles that led the real performance to be a tad worse, which I will
                elaborate below.
            </Paragraph>
            <WorkImage src="btprinter-theoretical.png" alt="btprinter backtest" />

            <Header>
                The performance
            </Header>
            <Paragraph>
                The trading algorithm works for now, but there are quite a few obstacles and flaws if you are
                considering building something similar.
                First of all, Binance sometimes does not have enough capital for you to borrow to go short. Sometimes
                the max you can borrow for a specific asset is limited to the hundred of dollars.
                Secondly, there is a big tail-risk associated with this strategy. When you are shorting something,
                you can get liquidated. And this strategy requires setting large stop-losses, so when margin-calls
                do come in, they hurt like a truck.
                And thirdly, a stress and tax headache. By now, btprinter has made thousands of trades, and sometimes
                I get overly anxious when it trades, fearing for a big loss. Below is a snapshot of a streak of winning trades.
            </Paragraph>
            <WorkImage src="btprinter-trades.png" alt="btprinter winning trades" />

            <Header>
                The design
            </Header>
            <Paragraph>
                The design of btprinter is pretty straightforward. In one repository I did all of the data analysis
                using Pandas, NumPy, Matplotlib, etc, on Jupyterlab. Another repository holds the actual trading
                algorithm. The program runs at intervals, and simply checks (1) if it needs to close any existing trade,
                (2) if there is any pair on Binance that matches the criteria to be shorted, and if so go short, and (3)
                regular cleanup work such as disabling isolated margin accounts, etc.
            </Paragraph>


        </Container>
    </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'