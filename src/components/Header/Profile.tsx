import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
    return(
        <Flex alignItems="center">
            <Box marginRight="4" textAlign="right">
                <Text>Usuário</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >usuario@email.com</Text>
            </Box>
            <Avatar size="md" name="User" src="https://github.com/tilauro.png"/>
        </Flex>
    )
}