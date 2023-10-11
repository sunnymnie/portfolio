import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "@components/layouts/article";
import Section from "@components/section";
import Intro from "@components/intro";
import { WorkGridItem } from "@components/grid-item";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Intro>
          {/* Here lies some of the work I have done. Take a gander and try them out
          - I have included pictures for your viewing pleasure */}
          Here are some of the works I have created. Feel free to take a look,
          I&apos;ve included pictures for your viewing pleasure
        </Intro>
        <Heading as="h3" fontSize={20} mb={4}>
          Highlighted Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="trade-timeline"
              title="Trade Timeline"
              thumbnail="trade-timeline-thumb.png"
            >
              A trading dashboard made with Ruby on Rails, React, and Redux.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="interval-timer"
              title="Interval Timer"
              thumbnail="it-white-thumb.png"
            >
              A pomodoro timer made with React.js, Next.js, and Chakra UI
            </WorkGridItem>
          </Section>
          {/* <Section>
                        <WorkGridItem
                            id="bookstore-eth"
                            title="Bookstore-Eth"
                            thumbnail="bookstore-thumb.png">
                            A prototype book-summary marketplace deployed on the Ropsten testnet. Made with React.js, Next.js, and TailwindCSS
                        </WorkGridItem>
                    </Section> */}

          <Section>
            <WorkGridItem
              id="btprinter"
              title="Binance Top Printer"
              thumbnail="btprinter-thumb.png"
            >
              My latest trading strategy - leveraging the multitudes of Binance
              trading pairs to pick the tops to short
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ubc-dataset-query-app"
              thumbnail="ubc-thumb1.png"
              title="UBC Dataset Query Application"
            >
              A full-stack application allowing users to query information about
              UBC courses
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="seed-phrase-vault"
              thumbnail="spv-thumb.png"
              title="Seed Phrase Vault"
            >
              A Java application to store seed phrases/passwords, front-end
              built using Java Swing
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
              id="ganache-faucet"
              thumbnail="faucet-thumb.png"
              title="Ganache Faucet"
            >
              A fun project made using Solidity and React.js, allowing the user
              to donate and receive test eth on Ganache
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ytprinter"
              thumbnail="ytprinter-thumb.png"
              title="Youtube Printer"
            >
              High-leverage futures trading based on video publishing data
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="crypto-printer"
              thumbnail="crypto-thumb.png"
              title="Crypto Printer"
            >
              Mean-reversion strategy between pairs of assets using the z-score
              as the trading signal
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="bitcoin-printer"
              thumbnail="bitcoin-1.png"
              title="Bitcoin Printer"
            >
              Exploratory project playing with the frontier of algorithmic
              trading and ML
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
