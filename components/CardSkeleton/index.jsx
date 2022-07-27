import {
  Box, SkeletonCircle, SkeletonText
} from '@chakra-ui/react'

function CardSkeleton() {
  return (
    <Box
      boxShadow="2xl"
      padding="8"
      width="40vh"
    >
      <SkeletonCircle mx="auto" size={20} />
      <SkeletonText noOfLines={8} mt={5} spacing={3} />
    </Box>
  )
}

export default CardSkeleton
