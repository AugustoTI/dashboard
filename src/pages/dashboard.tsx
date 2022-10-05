import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
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
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-09-18T00:00:00.000Z',
      '2022-09-19T00:00:00.000Z',
      '2022-09-20T00:00:00.000Z',
      '2022-09-21T00:00:00.000Z',
      '2022-09-22T00:00:00.000Z',
      '2022-09-23T00:00:00.000Z',
      '2022-09-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}
const series1 = [{ name: 'series-1', data: [31, 120, 10, 28, 61, 10, 109] }]
const series2 = [{ name: 'series-2', data: [21, 100, 30, 48, 161, 90, 39] }]

const Dashboard: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxW={1400} mx="auto" my="6" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignContent="flex-start">
          <Box p={['6', '8']} borderRadius={8} bg="gray.800" pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} series={series1} options={options} />
          </Box>
          <Box p={['6', '8']} borderRadius={8} bg="gray.800" pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} series={series2} options={options} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard
