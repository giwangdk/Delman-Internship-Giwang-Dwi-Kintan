import {
  Box, Button, Divider, Flex, Heading
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import CardSkeleton from '../components/CardSkeleton';
import CardUser from '../components/CardUser';

function UserFetcher() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://randomuser.me/api');
      setUser(response.data.results[0]);
    } catch (e) {
      alert(e);
    }
    console.log(user);
    setIsLoading(false);
  };
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      alignItems="center"
    >
      <Box>
        <Heading as="h2" size="xl" my={20} textAlign="center">
          User Fetcher
        </Heading>
        {user ? <CardUser user={user} /> : <CardSkeleton />}
        <Divider orientation="horizontal" my={8} />
        <Button
          isLoading={isLoading}
          variantColor="gray"
          width="100%"
          onClick={() => handleFetchUser()}
        >
          {!user ? 'Fetch User' : 'Refetch User'}
        </Button>
      </Box>
    </Flex>
  );
}

export default UserFetcher;
