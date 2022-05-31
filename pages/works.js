
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import Section from '@components/section'
import { WorkGridItem } from '@components/grid-item'

const test = "test.png"
// import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
// import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Highlighted Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="bookstore-eth"
                        title="Bookstore-Eth"
                        thumbnail="test2.png">
                        A prototype book-summary marketplace deployed on the Ropsten testnet. Made with React.js and Next.js.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="portfolio"
                        title="Portfolio Website"
                        thumbnail={test}
                    >
                        This portfolio website. Made with React.js and Next.js.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem
                        id="btprinter"
                        title="Binance Top Printer"
                        thumbnail={test}
                    >
                        My latest trading strategy, leveraging the multitudes of pairs on Binance and picking tops to short.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="crypto-seed-phrase-storage"
                        thumbnail={test}
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
                        thumbnail={test}
                        title="Youtube Printer">
                        High-leverage futures trading based on video publishing data
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="crypto-printer"
                        thumbnail={test}
                        title="Crypto Printer"
                    >
                        Exploratory project playing with the frontier of algorithmic trading and ML
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="ganache-faucet"
                        thumbnail={test}
                        title="Ganache Faucet">
                        A fun starter-project made using Solidity and React
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

        </Container>
    </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
