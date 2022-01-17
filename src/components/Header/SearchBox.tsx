import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
    const searchInputRef = useRef<HTMLInputElement>(null)

    return (
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
                ref={searchInputRef}
            >
            </Input>
            <Icon as={RiSearchLine} fontSize="20" />
        </Flex>

    )
}