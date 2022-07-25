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
          href="/"
          heading="Title Transformation"
          description="A simple title transformation panel"
        />

        <CardMenu
          href="/"
          heading="User Fetcher"
          description="A simple API fetching and rendering process"
        />
      </Flex>
    </Flex>
  );
}
