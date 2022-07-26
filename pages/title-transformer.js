import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

function TitleTransformer() {
  const colors = [
    'black',
    'gray',
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'indigo',
    'teal',
    'pink',
  ];

  const [randomIndex, setRandomIndex] = useState(0);
  const [number, setNumber] = useState(900);
  const [random, setRandom] = useState(false);

  const handleRandomizeColor = () => {
    setInterval(() => {
      const index = Math.floor(Math.random() * (colors.length - 1 - 0 + 1) + 0);
      const randomNumber = Math.round((Math.random() * (900 - 100) + 100) / 100) * 100;
      setRandomIndex(index);
      setNumber(randomNumber);
    }, 1000);
  };

  const handleRandomize = () => {
    if (random) {
      clearInterval();
    } else {
      handleRandomizeColor();
    }
    setRandom(!random);
  };

  const [title, setTitle] = useState([
    {
      id: 1,
      title: 'Intenship Program',
    },
  ]);

  const handleAddTitle = () => {
    setTitle([
      ...title,
      {
        id: title.length + 1,
        title: 'Intenship Program',
      },
    ]);
  };

  const handleRemoveTitle = () => {
    if (title.length > 1) {
      setTitle(title.slice(0, -1));
    }
  };
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      alignItems="center"
    >
      {title.map((item) => (
        <Heading
          as="h1"
          size="xl"
          my={4}
          color={`${
            !random ? colors[0] : colors[randomIndex + item.id]
          }.${number}`}
        >
          {item.title}
          {' '}
          -
          {item.id}
        </Heading>
      ))}

      <Box my={5}>
        <Divider orientation="horizontal" />
        <Stack p={3} spacing={5} direction="row">
          <Text>Running for: 1335s</Text>
          <Text>
            Title Count:
            {title.length}
          </Text>
        </Stack>
        <Divider orientation="horizontal" />
      </Box>

      <Stack spacing={4} direction={['column', 'row']}>
        <Button
          variantColor="gray"
          display={['block']}
          onClick={() => handleRandomize()}
        >
          {random ? 'Clear Color' : 'Randomize Color'}
          {' '}
        </Button>
        <Button
          onClick={() => handleAddTitle()}
          variantColor="gray"
          display={['block']}
          disabled={title.length >= 5}
        >
          Add title
          {' '}
        </Button>
        <Button
          variantColor="gray"
          onClick={() => handleRemoveTitle()}
          disabled={title.length <= 1}
        >
          Remove Title
        </Button>
      </Stack>
    </Flex>
  );
}

export default TitleTransformer;
