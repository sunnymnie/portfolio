import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box>
        <Heading display="inline-block" as="h2" fontSize={24} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const Header = ({ children }) => (
    <Box>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const Paragraph = ({ children }) => (
    <Box mb={4}>
        <div>
            {children}
        </div>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={`/images/works/${src}`} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)