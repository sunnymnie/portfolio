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
                The rundown of this trading strategy is simple: see a Youtube video pop, sell what you're holding
                now, buy the futures of the asset the Youtube video covers. I used some thread pools and was able
                to get from Youtube video detection to longing 20x with futures in around 3 seconds, which was plenty
                enough.
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
            Unfortunately never got the chance to completely play around with this strategy. Once I had finished it,
            the crypto bear-market was setting in and a new video may not break the 1% gain I needed to cash out.



        </Container>
    </Layout>
)

export default Work
