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
    <Layout title="ytprinter">
        <Container>
            <WorkImage src="ytprinter-thumb.png" alt="ytprinter thumbnail" />
            <Title>
                Youtube Printer <Badge>2021</Badge>
            </Title>
            <Paragraph>
                The rundown of this trading strategy is simple: see a Youtube video get published,
                sell current holdings, and buy the futures of the asset the Youtube video covers.
                I used some thread pools and was able to get from Youtube video detection to longing
                20x with futures in around 3 seconds, which was plenty enough.
                Also this program handles finishing the trade by repurchasing previously sold holdings
                in proportional amounts given the strategy made or lost money.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/sunnymnie/ytprinter" target="_blank">
                        https://github.com/sunnymnie/ytprinter<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>Trading algorithm project / trading bot</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, Pandas, Matplotlib</span>
                </ListItem>
            </List>

            <Header>
                The results
            </Header>
            <Paragraph>
                Unfortunately, I never got the chance fully take advantage of this strategy.
                Once I had finished it, the crypto bear market had set in and retail interest in crypto waned.
                And as a result, the impact of Youtube videos on asset prices became negligible.
            </Paragraph>


        </Container>
    </Layout>
)

export default Work
