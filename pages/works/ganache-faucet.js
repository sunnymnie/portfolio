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
    <Layout title="Ganache Faucet">
        <Container>
            <WorkImage src="faucet-thumb.png" alt="ganache faucet thumbnail" />
            <Title>
                Ganache Faucet <Badge>2022</Badge>
            </Title>
            <Paragraph>
                This was a fun project made with React with the faucet smart-contract coded in Solidity.
                The only purpose was to learn React as this was my first experience using this framework,
                as well as getting my first experience deploying a smart-contract onto Ganache.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/sunnymnie/ganache-faucet" target="_blank">
                        https://github.com/sunnymnie/ganache-faucet <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>Personal project</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Bulma, Web3, Ganache, Solidity</span>
                </ListItem>
            </List>

            <Header>
                A demonstration
            </Header>
            <Paragraph>
                When the donate 1 eth button is pressed, Metamask is launched and upon accepting, the user will
                send 1 eth to the smart contract
            </Paragraph>
            <WorkImage src="faucet-donate.png" alt="donating 1 eth to the faucet" />
            <Paragraph>
                Upon a successful donation, the use can withdraw 0.1 eth at a time. Here's what happens if
                the user has donated before and tries to withdraw 0.1 eth
            </Paragraph>
            <WorkImage src="faucet-withdrawal.png" alt="withdrawing 0.1 eth from faucet" />
            <Paragraph>
                And that's all. Not much more functionality other than an elegant starter project.
            </Paragraph>
        </Container>
    </Layout>
)

export default Work
