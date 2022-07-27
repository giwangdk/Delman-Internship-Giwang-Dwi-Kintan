import {
  Box, Button, Divider, Flex, Heading
} from '@chakra-ui/react';
import CardSkeleton from '../components/CardSkeleton';

function UserFetcher() {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      alignItems="center"
    >
      <Box>
        <Heading as="h1" size="xl" my={4} textAlign="center">
          User Fetcher
        </Heading>
        <CardSkeleton />
        <Divider orientation="horizontal" my={10} />
        <Button variantColor="gray" width="100%">
          Fetch User
        </Button>
      </Box>
    </Flex>
  );
}

export default UserFetcher;
