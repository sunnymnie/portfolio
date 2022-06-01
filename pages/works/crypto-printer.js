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
                Crypto Printer + Bitcoin Printer <Badge>2020-2021</Badge>
            </Title>
            <Paragraph>
                Two separate projects done a long time ago, so merging them together, but they're highly different.
                Bitcoin Printer started off first, and tried to implement Advances in Financial Machine Learning
                by Marcos López de Prado. Lots of trials and tribulations but still ended up empty handed -- the
                material is just a tad too advanced. Crypto printer is a separate project, where upon finding
                two assets that cointegrate, short one and long the other when they deviate from the mean
                by a substantial amount. Crypto printer was profitable for a period of time, but I pulled the plug
                after a big loss.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Bitcoin printer</Meta>
                    <Link href="https://github.com/sunnymnie/bitcoin-printer" target="_blank">
                        https://github.com/sunnymnie/bitcoin-printer<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Crypto printer</Meta>
                    <Link href="https://github.com/sunnymnie/crypto-printer" target="_blank">
                        https://github.com/sunnymnie/crypto-printer<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>Trading algorithm project / Exploratory</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, Pandas, NumPy, Matplotlib, Scikit-learn</span>
                </ListItem>
            </List>

            <Header>
                Bitcoin Printer
            </Header>
            <Paragraph>
                A lot of work was spent on Bitcoin printer, and my conclusion is that machine-learning for predicting
                the markets is super hard. In this project, I walked through Advances in Financial Machine Learning
                by Marcos López de Prado, and learned many things. Some of which are: want shallow trees, use
                weighted sequential bootstrap not random bootstrap, take a look at fractionally differentiated features and
                serial correlations. Below is an example of an output when creating a weighted sequential booststrap.
            </Paragraph>
            <WorkImage src="bitcoin-1.png" alt="bitcoin printer weighted sequential booststrap" />
            <Header>
                Crypto Printer
            </Header>
            <Paragraph>
                The strategy for this project is as quoted:
                "The strategy this model uses is based on two cointegrating price-series and buying
                when the z-score is sufficiently deviated from the mean.
                Profit is taken when cointegrating series mean-reverts." It worked until things stopped
                mean-reverting. Below is an example of the trades this program would perform
            </Paragraph>
            <WorkImage src="crypto-1.png" alt="crypto printer trades" />

            <Paragraph>
                This project involved two parts: finding cointegrating assets and building the
                trading algorithm to trade them. Below is an example of the cointengrating assets found and
                our backtest results
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
