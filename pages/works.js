
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import Section from '@components/section'
import Intro from '@components/intro'
import { WorkGridItem } from '@components/grid-item'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Intro>
                Here lies some of the work I have done. Take a gander, try them out - or not - I have pictures attached for your viewing pleasure
            </Intro>
            <Heading as="h3" fontSize={20} mb={4}>
                Highlighted Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="bookstore-eth"
                        title="Bookstore-Eth"
                        thumbnail="placeholder.png">
                        A prototype book-summary marketplace deployed on the Ropsten testnet. Made with React.js, Next.js, and TailwindCSS.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem
                        id="btprinter"
                        title="Binance Top Printer"
                        thumbnail="btprinter-thumb.png"
                    >
                        My latest trading strategy, leveraging the multitudes of Binance trading pairs and picking tops to short.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="ganache-faucet"
                        thumbnail="faucet-thumb.png"
                        title="Ganache Faucet">
                        A fun project made using Solidity and React.js, allowing the user to donate and retreive test eth on Ganache
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="seed-phrase-vault"
                        thumbnail="spv-thumb.png"
                        title="Seed Phrase Vault">
                        A Java application to store seed-phrases/passwords, front-end built using Java Swing.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>


            <Section>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Other Works
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="ytprinter"
                        thumbnail="ytprinter-thumb.png"
                        title="Youtube Printer">
                        High-leverage futures trading based on video publishing data
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="crypto-printer"
                        thumbnail="crypto-thumb.png"
                        title="Crypto Printer"
                    >
                        Exploratory project playing with the frontier of algorithmic trading and ML
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

        </Container>
    </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
