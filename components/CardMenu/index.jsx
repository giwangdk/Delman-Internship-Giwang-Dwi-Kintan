import { Box, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

function CardMenu() {
  return (
    <NextLink href="/">
      <Box
        borderWidth="1px"
        p={[6, 5, 7]}
        maxW={['auto', '250px']}
        borderRadius="md"
        m={3}
        boxShadow="md"
      >
        <Heading as="h3" size="md" mb={4}>
          Title Transformer
        </Heading>
        <Text fontSize="md">
          A simple title transformation panel
        </Text>
      </Box>
    </NextLink>
  )
}

export default CardMenu
