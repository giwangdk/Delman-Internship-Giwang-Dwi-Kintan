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
        <CardMenu />
        <CardMenu />
      </Flex>
    </Flex>
  );
}
