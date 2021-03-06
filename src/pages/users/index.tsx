import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Text, Th, Thead, Tr, Td, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import SideBar from "../../components/SideBar";
import useUsers, { getUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";

export default function UserList({ users }) {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching ,error } = useUsers(page /*{initialData: users}*/)

    const isWideVersion = useBreakpointValue({
       base: false,
       lg: true, 
    })

    async function handlePrefetchUser(userId: number) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)

            return response.data
        }, {
            staleTime: 1000 * 60 * 10,
        })
    }

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
                            { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
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
                                    {data.users.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td paddingX={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <ChakraLink color="purple.400" onMouseEnter={() => handlePrefetchUser(Number(user.id))}>
                                                            <Text fontWeight="bold">
                                                                {user.name}
                                                            </Text>
                                                        </ChakraLink>
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
                            <Pagination
                                totalCountRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                             />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}

// initial data SSR
// export const getServerSideProps: GetServerSideProps = async () => {
//     const {users, totalCount} = await getUsers(1)

//     return {
//         props: {
//             users,
//         }
//     }
// }