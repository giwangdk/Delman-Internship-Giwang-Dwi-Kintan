import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

function Navbar() {
  return (
    <Box p={5}>
      <Link href="/"><Text fontSize={25} fontWeight="bold">Delman.io</Text></Link>
    </Box>
  )
}

export default Navbar
