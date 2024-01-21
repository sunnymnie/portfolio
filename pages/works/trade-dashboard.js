import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Header, Paragraph, WorkImage, Meta } from "@components/work";
import Layout from "@components/layouts/article";

const Work = () => (
  <Layout title="trade-dashboard">
    <Container>
      <WorkImage
        src="trade-dashboard-timeline.png"
        alt="trade dashboard timeline"
      />
      <Title>
        Trade Dashboard <Badge>2023</Badge>
      </Title>
      <Paragraph>
        Trade Dashboard was an ambitious summer project where I wanted to build
        an application to fully organize all my discretionary trading activity,
        such as providing me a visualization on the progress of my current trade
        ideas via both a Kanban board and a timeline view.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/sunnymnie/trade-dashboard"
            target="_blank"
          >
            https://github.com/sunnymnie/trade-dashboard
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>Full stack CRUD application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, React, Redux, FastAPI, SQLAlchemy, Alembic, SQLite
          </span>
        </ListItem>
      </List>
      <Header>Main views</Header>
      <Paragraph>
        In the timeline view, I can add events, which can help me gauge when I
        would want to structure trades in proprtion to the start and end dates
        of the events. I can also use the kanban view to see my trades and can
        easily move them around with a drag-and-drop implementation.
      </Paragraph>
      <WorkImage
        src="trade-dashboard-kanban.png"
        alt="trade dashboard kanban"
      />
      <Header>Other views</Header>
      <Paragraph>
        The application supports a resizeable side-view for interacting with
        individual trades. The sidebar view is 'sticky' and persists when
        switching between the timeline view and kanban view, etc. In the
        implementation, the trade view supports markdown and all basic CRUD
        features
      </Paragraph>
      <WorkImage
        src="trade-dashboard-trade-info.png"
        alt="trade dashboard trade info"
      />
      <Paragraph>
        There is also a tweet analysis section which allows me to create
        'event-ranges' within and event, and to review tweets within a specific
        time range and which also include specific key-words in order to build a
        profile for different Twitter users.
      </Paragraph>
      <WorkImage
        src="trade-dashboard-analysis.png"
        alt="trade dashboard analysis"
      />
    </Container>
  </Layout>
);

export default Work;
