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
    <Layout title="Seed Phrase Vault">
        <Container>
            <WorkImage src="spv-thumb.png" alt="seed phrase vault thumbnail" />
            <Title>
                Seed-Phrase Vault <Badge>2021</Badge>
            </Title>
            <Paragraph>
                This project was my first real experience in building software with Java.
                In essence, this application allows users to save their seed-phrases and add
                security questions. For each seed-phrase, the user can select how many security questions
                must be right before the seed-phrase can be accessed.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/sunnymnie/crypto-seed-phrase-storage" target="_blank">
                        https://github.com/sunnymnie/crypto-seed-phrase-storage <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>School project </span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java, Java Swing</span>
                </ListItem>
            </List>

            <Header>
                A slideshow demonstration
            </Header>
            <WorkImage src="spv-spm.png" alt="seed phrase vault main" />
            <Paragraph>
                To access the seed-phrase, user must answer their security questions they set previously
            </Paragraph>
            <WorkImage src="spv-ans.png" alt="seed phrase vault answering questions" />
            <Paragraph>
                Upon answering the questions correctly, the seed phrase is unlocked and offers viewing or deletion
            </Paragraph>
            <WorkImage src="spv-unlock.png" alt="seed phrase vault unlocked seed phrase" />
            <Paragraph>
                Here the seed-phrases are viewed individually
            </Paragraph>
            <WorkImage src="spv-individual.png" alt="seed phrase vault indivual viewing" />
            <Paragraph>
                Upon answering all the security questions correctly, the user can also add/edit/remove security questions
            </Paragraph>
            <WorkImage src="spv-questions.png" alt="seed phrase vault questions" />


        </Container>
    </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'