import { Flex } from '@chakra-ui/react';
import CardSkeleton from '../components/CardSkeleton';

function UserFetcher() {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      alignItems="center"
    >
      <CardSkeleton />
    </Flex>
  );
}

export default UserFetcher;
