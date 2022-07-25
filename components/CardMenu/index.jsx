import { Box, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

function CardMenu({
  href, heading, description, ...props
}) {
  return (
    <NextLink href={href}>
      <Box
        borderWidth="1px"
        p={[6, 5, 7]}
        maxW={['auto', '250px']}
        borderRadius="md"
        m={3}
        boxShadow="md"
        {...props}
      >
        <Heading as="h3" size="md" mb={4}>
          {heading}
        </Heading>
        <Text fontSize="md">
          {description}
        </Text>
      </Box>
    </NextLink>
  )
}

export default CardMenu
