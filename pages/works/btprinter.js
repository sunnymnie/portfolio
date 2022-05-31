import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '@components/work'
//   import P from '../../components/paragraph'
import Layout from '@components/layouts/article'

const Work = () => (
    <Layout title="btprinter">
        <Container>
            <Title>
                Binance Top Printer <Badge>2021-</Badge>
            </Title>
            <div>
                Also known as btprinter, is my latest trading algorithm that I am running.
                In essence, the strategy requires periodically looking for the highest gainers over the past
                time period and takes a short position for a set amount of time. As of May 2022, it has returned 7.5x
                since January 2022.
            </div>
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

            <WorkImage src="/images/works/test1.png" alt="Inkdrop" />
            <WorkImage src="/images/works/test2.png" alt="Inkdrop" />
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe
                    src="https://www.youtube.com/embed/-qBavwqc_mY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'