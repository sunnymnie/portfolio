import Head from 'next/head'
import Image from 'next/image'
import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import Section from '@components/section'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        mb={6}
        p={3}
        textAlign="center"
      // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      // css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I am an aspiring full stack developer from Coquitlam BC, Canada.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sunny Nie
          </Heading>
          <p>Always a student ( Developer / Data Analyst / Investor )</p>
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
        <div>Sunny Nie is a person</div>
      </Section>
    </Container >
  )
}

export default Home