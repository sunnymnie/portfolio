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
                The strategy requires periodically looking for the highest gainers over a set time
                and taking a short position when appropriate.
                As of May 2022, this strategy has returned 7.5x since its inception.
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
                The backtests use an excessive 0.4% trading fee to simulate actual 0.1% fees + slippage.
                However, the tests suffer from survivorship bias, which I assume is negligible, and a tad of lookahead bias.
            </Paragraph>
            <WorkImage src="btprinter-theoretical.png" alt="btprinter backtest" />

            <Header>
                The performance
            </Header>
            <Paragraph>
                The trading algorithm has been a reliable workhorse, but it has suffered it's fair share of failues.
                There have also been quite a few obstacles that I have encountered.
                First, Binance sometimes does not have enough capital for you to borrow to go short.
                Sometimes the maximum you can borrow for a specific asset is limited to hundreds of dollars.
                Secondly, there is a big tail risk associated with this strategy because of the
                omnipresent liquidation risk associated with fading a pump.
                Also, since this strategy uses large stop losses, margin calls hurt like a truck.
                And thirdly, stress and tax headaches. By now, btprinter has made thousands of trades
                and sometimes emotions from a substantial loss can ruin a day.
                Below is a snapshot of a streak of winning trades.
            </Paragraph>
            <WorkImage src="btprinter-trades.png" alt="btprinter winning trades" />

            <Header>
                The design
            </Header>
            <Paragraph>
                The design of btprinter is pretty straightforward.
                The program first runs in intervals and checks if it needs to close any existing position.
                It then sees if any pairs on Binance match the criteria to be traded and goes short if required.
                Finally, it performs regular maintenance work such as disabling
                isolated margin accounts and converting dust.
            </Paragraph>


        </Container>
    </Layout>
)

export default Work
