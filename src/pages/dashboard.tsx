import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Chart = dynamic(() => import ('react-apexcharts'), {
    ssr: false,
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]  
        },
        categories: [
            '2022-01-02T00:00:00.000Z',
            '2022-01-03T00:00:00.000Z',
            '2022-01-04T00:00:00.000Z',
            '2022-01-05T00:00:00.000Z',
            '2022-01-06T00:00:00.000Z',
            '2022-01-07T00:00:00.000Z',
            '2022-01-08T00:00:00.000Z',
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
}

const series = [
    { name: 'series1', data: [31,120,10,18,61,18,109] }
]

export default function Dashboard() {
    return (
        <Flex direction="column" height="100vh" >
            <Header />
            
            <Flex 
                width="100%" 
                marginY="6"
                maxWidth={1480} 
                marginX="auto"
                paddingX="6"
            >
                <SideBar />
                
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box 
                        padding={["6", "8"]}
                        marginRight={["6", "0"]}
                        backgroundColor="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" marginBottom="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box 
                        p={["6", "8"]}
                        marginRight={["6", "0"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}