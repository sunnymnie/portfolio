import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Header, Paragraph, WorkImage, Meta } from '@components/work'
import Layout from '@components/layouts/article'

const Work = () => (
    <Layout title="Crypto Printer">
        <Container>
            <WorkImage src="crypto-thumb.png" alt="crypto printer thumbnail" />
            <Title>
                Crypto Printer <Badge>2021</Badge>
            </Title>
            <Paragraph>
                The strategy for this project is based on two cointegrating price series and buying
                when the z-score sufficiently deviates from the mean. Profit is taken when cointegrating series mean-reverts.
                This strategy worked until things stopped mean-reverting.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/sunnymnie/crypto-printer" target="_blank">
                        https://github.com/sunnymnie/crypto-printer<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>Trading algorithm project</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, Pandas, NumPy, Matplotlib</span>
                </ListItem>
            </List>

            <Header>
                About
            </Header>
            <Paragraph>
                The following is an example of the trades this program would perform,
                where the up-arrow represents buy and the down-arrow represents sell.
                The second graph represents the z-score, and the third graph shows the profits and losses.
            </Paragraph>
            <WorkImage src="crypto-1.png" alt="crypto printer trades" />

            <Paragraph>
                This project involved two steps: finding cointegrating assets and building the trading algorithm to trade them.
                Below is an example of the cointegrating assets found and our backtest results
            </Paragraph>
            <WorkImage src="crypto-2.png" alt="crypto printer cointegrating assets" />
            <Paragraph>
                The problem with this strategy is that the only way to figure out
                when assets stop cointegrating is to eat fat losses.
            </Paragraph>



        </Container>
    </Layout>
)

export default Work
