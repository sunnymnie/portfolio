import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Header, Paragraph, WorkImage, Meta } from '@components/work'
import Layout from '@components/layouts/article'

const Work = () => (
    <Layout title="UBC Dataset query application">
        <Container>
            <WorkImage src="ubc-thumb.png" alt="UBC dataset query application thumbnail" />
            <Title>
                UBC Dataset Query Application <Badge>2022</Badge>
            </Title>
            <Paragraph>
                This school project was my first experience building a full-stack application.
                The backend is a TypeScript query application that returns sorted and filtered parts of a
                UBC courses dataset according to a complex query syntax.
                The front end is built with React and allows the user to interact with the backend via
                RESTful APIs hosted with Express.js. The project used Mocha (chai) to
                maintain the unit tests and used Agile scrum techniques learned in class to coordinate group work.
            </Paragraph>
            <List my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://sites.google.com/view/ubc-cpsc310-21w2-intro-to-se/academic-honesty?authuser=0#h.p_ID_32" target="_blank">
                        cannot be posted<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Type</Meta>
                    <span>School project </span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Node.js, Mocha (chai), Bulma, Express.js, TypeScript</span>
                </ListItem>
            </List>

            <Header>
                A demonstration
            </Header>
            <Paragraph>
                The application has two different queries the user can use.
                The first is a simple query that filters courses by year to see whether the averages have
                moved up or down over the years.
                The second query type is a transformation query that groups all the courses in a
                department by a metric (such as average) and returns a table sorted by that metric.
                The following demonstration walks through a simple query example and a transformation example.
            </Paragraph>
            <WorkImage src="ubc-select.png" alt="UBC select course" />
            <Paragraph>
                The user can select courses they want to query for the simple query.
            </Paragraph>
            <WorkImage src="ubc-simple-result.png" alt="UBC simple query result" />
            <Paragraph>
                After providing a valid course and ID, the program returns the query result presented in a table.
                Here we see the average grades of CPSC 310. If the user enters an invalid course, the following appears.

            </Paragraph>
            <WorkImage src="ubc-invalid.png" alt="UBC invalid query result" />
            <Paragraph>
                For transformation queries, the user provides a department and their transformation criteria
                (average, maximum, minimum) for course grades.

            </Paragraph>
            <WorkImage src="ubc-transformations.png" alt="UBC transformation query" />
            <Paragraph>
                The following is a transformation by average for all CPSC courses.
            </Paragraph>
            <WorkImage src="ubc-transformations-avg.png" alt="UBC transformation query result" />


        </Container>
    </Layout>
)

export default Work
