import { Flex, Text, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

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
        </Flex>
    )
}