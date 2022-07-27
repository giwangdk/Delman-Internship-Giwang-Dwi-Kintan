import { Flex, Heading } from '@chakra-ui/react';
import CardSkeleton from '../components/CardSkeleton';

function UserFetcher() {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      alignItems="center"
    >
      <Heading as="h1" size="xl" my={4}>
        User Fetcher
      </Heading>
      <CardSkeleton />
    </Flex>
  );
}

export default UserFetcher;
