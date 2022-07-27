import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

function CardSkeleton() {
  return (
    <Box>
      <SkeletonCircle />
      <SkeletonText noOfLines={8} spacing={4} />
    </Box>
  )
}

export default CardSkeleton
