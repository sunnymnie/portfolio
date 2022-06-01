import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not found</Heading>
            <Text>Huh. Couldn&apos;t seem to find it</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound