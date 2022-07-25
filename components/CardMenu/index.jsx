import { Box, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function CardMenu({
  href, heading, description, ...props
}) {
  return (
    <NextLink href={href}>
      <Box
        cursor="pointer"
        borderWidth="1px"
        p={[6, 5, 7]}
        width={['290px', '290px']}
        borderRadius="md"
        m={3}
        boxShadow="md"
        {...props}
      >
        <Heading
          as="h3"
          size="md"
          mb={4}
          display="flex"
          alignItems="center"
        >
          {heading}
          <ArrowForwardIcon w={23} ml={3} />
        </Heading>
        <Text fontSize="md">
          {description}
        </Text>
      </Box>
    </NextLink>
  )
}

export default CardMenu

CardMenu.propTypes = {
  href: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
