import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Text, Th, Thead, Tr, Td, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import SideBar from "../../components/SideBar";


export default function UserList() {
    const isWideVersion = useBreakpointValue({
       base: false,
       lg: true, 
    })

    return (
        <Box>
            <Header />
            <Flex 
                width="100%" 
                marginY="6" 
                maxWidth={1480} 
                marginX="auto" 
                paddingX="6"
            >
                <SideBar />

                <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
                    <Flex marginBottom="8" justifyContent="space-between" alignItems="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Link href="users/create" passHref>
                            <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine}
                            fontSize="20" />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                        
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th paddingX={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Usuários
                                </Th>
                                { isWideVersion && <Th>
                                    Data de usuários
                                </Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td paddingX={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Usuário1
                                        </Text>
                                        <Text fontSize="sm" color="gray.300">
                                            usuario@email.com
                                        </Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>
                                    01 de Janeiro de 2023
                                </Td>}
                                { isWideVersion && <Td>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine}
                                    fontSize="16" />}
                                    >
                                        Criar novo
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td paddingX={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Usuário1
                                        </Text>
                                        <Text fontSize="sm" color="gray.300">
                                            usuario@email.com
                                        </Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>
                                    01 de Janeiro de 2023
                                </Td>}
                                {  isWideVersion && <Td>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine}
                                    fontSize="16" />}
                                    >
                                        Criar novo
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td paddingX={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Usuário1
                                        </Text>
                                        <Text fontSize="sm" color="gray.300">
                                            usuario@email.com
                                        </Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>
                                    01 de Janeiro de 2023
                                </Td>}
                                { isWideVersion && <Td>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine}
                                    fontSize="16" />}
                                    >
                                        Criar novo
                                    </Button>
                                </Td>}
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}