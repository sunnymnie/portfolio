import Head from 'next/head'
import NavBar from '@components/navbar'
import { Box, Container } from '@chakra-ui/react'



const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Sunny's Portfolio" />
                <title>Sunny Nie - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>

                {children}

            </Container>
        </Box>
    )
}

export default Main