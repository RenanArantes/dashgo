import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import Input from "../../components/Form/Input";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function CreateUSer() {
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

                <Box flex="1" borderRadius={8} bg="gray.800" padding={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">
                        Criar usuário
                    </Heading>
                    <Divider marginY="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                            <Input name="name" label="Nome completo"  />
                            <Input name="email" type="email" label="E-mail"  />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                            <Input name="password" type="password" label="Senha"  />
                            <Input name="password_confirmation" type="password" label="Confirme sua senha"  />
                        </SimpleGrid>
                    </VStack>

                    <Flex marginTop="8" justifyContent="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}