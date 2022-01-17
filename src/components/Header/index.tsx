import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContex'
import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import { Profile } from './Profile'
import SearchBox from './SearchBox'

export default function Header() {
    const { onOpen } = useSideBarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    
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
            { !isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontsize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}


            <Logo />

             { isWideVersion && <SearchBox /> }

            <Flex
                alignItems="center"
                marginLeft="auto"
            >
                
                <NotificationsNav />

                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}