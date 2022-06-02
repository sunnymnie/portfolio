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
    <Layout title="Bitcoin Printer">
        <Container>
            <WorkImage src="bitcoin-1.png" alt="bitcoin printer thumbnail" />
            <Title>
                Bitcoin Printer <Badge>2020-2021</Badge>
            </Title>
            <Paragraph>
                Bitcoin Printer started as a naive attempt to predict the price of bitcoin with a machine learning model.
                Later, this project evolved to trying to implement Advances in Financial Machine Learning by
                Marcos López de Prado. After lots of trials and tribulations,
                this project still ended up empty-handed - the material is just a tad too advanced.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/sunnymnie/bitcoin-printer" target="_blank">
                        https://github.com/sunnymnie/bitcoin-printer<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>Exploratory trading algorithm project</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, Pandas, NumPy, Matplotlib, Scikit-learn</span>
                </ListItem>
            </List>

            <Header>
                About
            </Header>
            <Paragraph>
                A lot of work was spent on Bitcoin printer, and my conclusion is that machine learning for
                predicting the markets is super hard. In this project, a friend and I walked through
                Advances in Financial Machine Learning by Marcos López de Prado and we learned many things.
                Some of these are: want shallow trees, use weighted sequential bootstrap instead
                of random bootstrap, and consider fractionally differentiated features and serial correlations.
                The header image is an example of an output when creating a weighted sequential bootstrap.
            </Paragraph>



        </Container>
    </Layout>
)

export default Work
