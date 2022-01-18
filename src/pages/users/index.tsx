import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Text, Th, Thead, Tr, Td, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from 'react-query';

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import SideBar from "../../components/SideBar";


export default function UserList() {
    const { data, isLoading, error } = useQuery('chave-do-chache-users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()
        
        const users = data.users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR',{
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        }, {
            staleTime: 1000 * 5
        })

        return users
    })

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
                                {isWideVersion && <Text>Criar novo</Text>}
                            </Button>
                        </Link>                     
                    </Flex>
                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>    
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
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
                                    {data.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td paddingX={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">
                                                            {user.name}
                                                        </Text>
                                                        <Text fontSize="sm" color="gray.300">
                                                            {user.email}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                                { isWideVersion && <Td>
                                                    {user.createdAt}
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
                                                        Editar
                                                    </Button>
                                                </Td>}
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}