import NextLink from 'next/link'
import Image from 'next/image'
import {
  Container,
  Box,
  Heading,
  Button,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react'
import Intro from '@components/intro'
import Section from '@components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Home = () => {
  return (
    <Container>
      <Intro>
        Hello, I am an aspiring full stack developer from BC, Canada.
      </Intro>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sunny Nie
          </Heading>
          <p>Always a student, always learning</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/sunny.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section heading="About">
        <div>
          I&apos;m a second-year CS student at UBC interested in software engineering and data science.
          I have built trading algorithms in Python with the help of Pandas, NumPy, Matplotlib, and Scikit-Learn
          for data analysis and backtesting.
          Recently I created some React and Next.js applications
          and have dabbled a bit in Solidity and machine learning.
        </div>
      </Section>
      <Box align="center" my={4}>
        <NextLink href="/works" passHref scroll={false}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My portfolio
          </Button>
        </NextLink>
      </Box>
      <Section heading="Interests">
        <div>front-end development, data-science, investing, .io games, eth</div>
      </Section>
      <Section heading="Add me">
        <List>
          <ListItem>
            <Link href="https://github.com/sunnymnie" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @sunnymnie
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/sunny-nie/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Sunny Nie
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container >
  )
}

export default Home