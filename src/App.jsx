import article from 'data/article.json';
import stats from './data/stats.json';
import forbesData from './data/forbes.json';

import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';
import Example from 'components/example/Example';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          userName={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />
        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />
        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbesData} />
        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
        <Example />
      </Container>
    </Section>
  );
};
