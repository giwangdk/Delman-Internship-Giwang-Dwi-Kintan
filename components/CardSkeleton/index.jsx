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
      <SkeletonText noOfLines={8} mt={3} spacing={2} />
    </Box>
  )
}

export default CardSkeleton
