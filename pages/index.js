import { Flex, Heading } from '@chakra-ui/react';
import { CardMenu } from '../components';

export default function Home() {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      alignItems="center"
    >
      <Heading as="h1" size="xl" mb={5}>
        Internship Program
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexBasis={['auto', '45%']}
        flexWrap="wrap"
      >
        <CardMenu
          href="/title-transformer"
          heading="Title Transformation"
          description="A simple title transformation panel"
        />

        <CardMenu
          href="/user-fetcher"
          heading="User Fetcher"
          description="A simple API fetching and rendering process"
        />
      </Flex>
    </Flex>
  );
}
