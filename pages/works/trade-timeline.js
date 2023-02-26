import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Header, Paragraph, WorkImage, Meta } from "@components/work";
import Layout from "@components/layouts/article";

const Work = () => (
  <Layout title="trade-timeline">
    <Container>
      <WorkImage
        src="trade-timeline-thumb.png"
        alt="trade timeline thumbnail"
      />
      <Title>
        Trade Timeline <Badge>2023-</Badge>
      </Title>
      <Paragraph>
        Trade Timeline is a Ruby on Rails app with a React and Redux frontend
        that allows investors to keep track of their trades on a zoomable
        timeline. I created Trade Timeline to address the challenges I faced as
        an investor in keeping track of my trades, particularly when following a
        thesis-driven approach. I found it difficult to discern how far away a
        catalyst was and keep track of when to accumulate or sell. By presenting
        all trades on a zoomable timeline, Trade Timeline helps me keep
        everything in perspective and make informed decisions about my trades.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/sunnymnie/trade-timeline"
            target="_blank"
          >
            https://github.com/sunnymnie/trade-timeline
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>Full stack CRUD application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Ruby on Rails, React, Redux</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Work;
