import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Header, Paragraph, WorkImage, Meta } from "@components/work";
import Layout from "@components/layouts/article";

const Work = () => (
  <Layout title="tweet-history">
    <Container>
      {/* <WorkImage src="tweet-history-thumb.png" alt="Tweet History thumbnail" /> */}
      <Title>
        Tweet History <Badge>2023</Badge>
      </Title>
      <Paragraph>
        Tweet History is an agglomeration of smaller side projects for the
        specific purpose of keeping a history of my Twitter feed. It is made up
        of two parts, a Tweet downloader part that automatically downloads the
        tweets I see on my timeline as I am browsing, and the full-stack
        application that I can use to reference historic &apos;snapshots&apos;
        of my Twitter feed. The Tweet downloader part uses Selenium Webdriver
        and SQLAlchemy to interface with the sqlite database, and the full-stack
        application has a Go backend with Solid.js frontend.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/sunnymnie/tweet-history"
            target="_blank"
          >
            https://github.com/sunnymnie/tweet-history
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>
            Full stack CRUD application with Selenium Webdriver script
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Ruby on Rails, React, Redux</span>
        </ListItem>
      </List>

      <Header>The dashboard</Header>
      <WorkImage
        src="tweet-history-dashboard.png"
        alt="Tweet History dashboard"
      />
      <Paragraph>
        In the dashboard view, I can access snapshots of tweets I&apos;ve saved.
        If I browsed Twitter for a day and have saved tweets seen that day, that
        day appears green with the total number of saved tweets and clicking
        that date opens up the tweets view. Otherwise, they will be white. I can
        access the previous and next month through both the URL and the buttons
        on the dashboard.
      </Paragraph>
      <Header>Tweets view</Header>
      <WorkImage src="tweet-history-sample.png" alt="Tweet History sample" />
      <Paragraph>
        For a date with tweets, I can scroll through all the tweets I&apos;ve
        saved that day with a very lightweight and compact UI. The UI also saves
        the replies and quote tweets I&apos;ve seen as well as providing a URL
        to the original Tweet.
      </Paragraph>
      <WorkImage src="tweet-history-fancy.png" alt="Tweet History fancy" />
      <Paragraph>
        I can also access the previous and next day&apos;s tweets with the
        dashboard buttons or via the URL (by typing a different date).
        Additionally, I click on the current date to go back to the monthly
        dashboard.
      </Paragraph>
    </Container>
  </Layout>
);

export default Work;
