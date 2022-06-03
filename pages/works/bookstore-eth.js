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
    <Layout title="Bookstore-Eth">
        <Container>
            <WorkImage src="bookstore-thumb.png" alt="bookstore eth thumbnail" />
            <Title>
                Bookstore-Eth <Badge>2022-</Badge>
            </Title>
            <Paragraph>
                This is an ongoing project built with React, Next.js, and TailwindCSS.
                In this app, users will be able to browse and buy book summaries using test ether.
                The true purpose of this project is to motivate me to read more and to develop my skills in React and Next.js.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/sunnymnie/bookstore-eth" target="_blank">
                        https://github.com/sunnymnie/bookstore-eth <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Link</Meta>
                    <span>coming soon...</span>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>Personal project / Marketplace</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Next.js, TailwindCSS, Web3, Ganache, Solidity</span>
                </ListItem>
            </List>

            <Header>
                About
            </Header>
            <Paragraph>
                When the user is not connected to Metamask, a prompt will either guide the user to install Metamask or to connect.
            </Paragraph>
            <WorkImage src="bookstore-connect.png" alt="bookstore eth connect" />
            <Paragraph>
                If the user is not connected to the ethereum main network, another warning will appear.
            </Paragraph>
            <WorkImage src="bookstore-wrong.png" alt="bookstore eth connected to wrong network" />
            <Paragraph>
                After connecting to the right network, the user can buy book summaries. (functionality coming later).
            </Paragraph>
            <WorkImage src="bookstore-marketplace.png" alt="bookstore eth connected to wrong network" />
            <Paragraph>
                The user can also click on a summary and get a page for more information about the summary.
            </Paragraph>
            <WorkImage src="bookstore-book.png" alt="bookstore eth template book" />

        </Container>
    </Layout>
)

export default Work
