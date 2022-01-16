import { Stack, Button, Box } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

export default function Pagination() {
    return(
        <Stack
            direction="row"
            spacing="6"
            marginTop="8"
            justify="space-between"
            alignItems="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem number={1} isCurrent/>
                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
            </Stack>            
        </Stack>
    )
}