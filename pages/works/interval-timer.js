import {
    Container,
    Badge,
    List,
    ListItem,
    Link
} from '@chakra-ui/react'
import { Title, Header, Paragraph, WorkImage, Meta } from '@components/work'
import Layout from '@components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Work = () => {
    return (
        <Layout title="Interval Timer">
            <Container>
                <WorkImage src="it-black-thumb.png" alt="interval timer thumbnail" />
                <Title>
                    Interval Timer <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A minimalist pomodoro timer app made with React, Next.js, and Chakra UI.
                </Paragraph>
                <List my={4}>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://interval-timer-sunnymnie.vercel.app/" target="_blank">
                            https://interval-timer-sunnymnie.vercel.app/<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/sunnymnie/interval-timer" target="_blank">
                            https://github.com/sunnymnie/interval-timer<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Type</Meta>
                        <span>Front-end project / hobby site</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Next.js, Chakra UI</span>
                    </ListItem>
                </List>

                <Header>
                    A demonstration
                </Header>
                <Paragraph>
                    The user starts by adding the tasks they want to complete
                </Paragraph>
                <WorkImage src="it-black-start.png" alt="starting user interface" />

                <Paragraph>
                    During the work period, the user can edit the number of blocks a task should take by hovering over the task
                </Paragraph>
                <WorkImage src="it-black-click.png" alt="hover options" />
            </Container>
        </Layout>
    )
}

export default Work
