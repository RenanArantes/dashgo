import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useBreakpointValue, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContex";
import SideBarNav from "./SideBarNav";

export default function SideBar() {
    const { isOpen, onClose } = useSideBarDrawer()

    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSideBar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SideBarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
   
    return(
       <Box
        as="aside"
        width="64"
        marginRight="8"
       >
           <SideBarNav />
       </Box>
   )
}