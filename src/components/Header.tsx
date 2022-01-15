import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotification2Line, RiUserAddLine } from 'react-icons/ri'

export default function Header() {
    return(
        <Flex 
            as="header"
            width="100%"
            maxWidth="1480"
            height="20"
            marginX="auto"
            marginTop="4"
            paddingX="6"
            align="center"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                width="64"
            >
                dashgo
                <Text as="span" marginLeft="1" color="pink.500">.</Text>    
            </Text>

            <Flex
                as="label"
                flex="1"
                paddingY="4"
                paddingX="8"
                marginLeft="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                background="gray.800"
                borderRadius="full"
            >
                <Input
                    color="gray.500"
                    variant="unstyled"
                    placeholder="Buscar na plataforma"
                    paddingX="4"
                    marginRight="4"
                    _placeholder={{color: 'gray.400'}}
                >
                </Input>
                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>

            <Flex
                alignItems="center"
                marginLeft="auto"
            >
                
                <HStack 
                    spacing="4"
                    marginX="8"
                    paddingRight="8"
                    paddingY="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotification2Line} fontSize="20"/>
                    <Icon as={RiUserAddLine} fontSize="20"/>
                </HStack>

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
            </Flex>
        </Flex>
    )
}