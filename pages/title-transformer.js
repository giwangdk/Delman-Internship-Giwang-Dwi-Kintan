import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

function TitleTransformer() {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      alignItems="center"
    >
      <Heading as="h1" size="xl">
        Internship Program
      </Heading>

      <Box my={5}>
        <Divider orientation="horizontal" />
        <Stack p={3} spacing={5} direction="row">
          <Text>Running for: 1335s</Text>
          <Text>Title Count: 1335s</Text>
        </Stack>
        <Divider orientation="horizontal" />
      </Box>

      <Stack spacing={4} direction={['column', 'row']}>
        <Button variantColor="gray" display={['block']}>
          Clear Color
          {' '}
        </Button>
        <Button variantColor="gray" display={['block']}>
          Add title
          {' '}
        </Button>
        <Button variantColor="gray">Remove Title</Button>
      </Stack>
    </Flex>
  );
}

export default TitleTransformer;
