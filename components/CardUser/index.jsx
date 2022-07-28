import {
  Avatar, Box, Flex, Text
} from '@chakra-ui/react'
import React from 'react'

function CardUser({ user }) {
  const {
    name, picture, email, nat, registered, gender
  } = user
  return (
    <Box
      boxShadow="2xl"
      padding="8"
      width="40vh"
      borderWidth="1px"
      borderColor={gender === 'female' ? 'pink.200' : 'blue.200'}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar size="xl" src={picture.large} name={`${name.title} ${name.title} ${name.last}`} />
        <Text fontSize="20" mt="5">{`${name.title} ${name.last} ${name.title}`}</Text>
        <Text fontSize="15" color="gray.500">{email}</Text>
      </Flex>

      <Flex
        justifyContent="space-around"
        alignItems="center"
        mt="7"
      >
        <Box>
          <Text textAlign="center" fontWeight="600">{nat}</Text>
          <Text color="gray.500">Nationality</Text>
        </Box>
        <Box>
          <Text textAlign="center" fontWeight="600">{registered.age}</Text>
          <Text color="gray.500">Age</Text>
        </Box>
      </Flex>

    </Box>
  )
}

export default CardUser
