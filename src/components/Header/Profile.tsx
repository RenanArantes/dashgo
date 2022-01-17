import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return(
        <Flex alignItems="center">
            {showProfileData && (
                <Box marginRight="4" textAlign="right">
                    <Text>Usuário</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >usuario@email.com</Text>
                </Box>
            )}
            <Avatar size="md" name="User" src="https://github.com/tilauro.png"/>
        </Flex>
    )
}