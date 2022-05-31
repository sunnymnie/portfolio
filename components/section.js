import { Heading } from "@chakra-ui/react"


const Section = ({ heading, children }) => {
    return (
        <div>
            <Heading as="h3" variant="section-title">{heading}</Heading>
            {children}
        </div>
    )
}

export default Section