import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>John Doe</Text>
          <Text color="gray.300" fontSize="small">
            JohnDoe@example.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="John Doe"
        src="https://avatars.githubusercontent.com/u/89668244?v=4"
      />
    </Flex>
  )
}
