import Head from 'next/head'
import Image from 'next/image'
import { Container, Box, Heading } from '@chakra-ui/react'
// import styles from 'styles/Home.module.css'


const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="red"
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
      </Box>
    </Container >
  )
}

export default Home