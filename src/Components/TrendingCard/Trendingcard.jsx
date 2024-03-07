import { Card, Chip, Group, Space, Text } from "@mantine/core"


export const TrendingCard=()=>{

    const Trending=[
        {title:"Ethereum (ETH)",icon:"",rate:"8.21"},
        {title:"Bitcoin (BTC)",icon:"",rate:"8.21"},
        {title:"Polygon (MATIC)",icon:"",rate:"8.21"},
    ]



    return(<>
        <Card
        withBorder
        shadow="sm"
        p='md'
        pt='xl'
        pb='xl'
        radius='md'
        mt={20}
        >
        <Text
        fw={700}
        style={{
            fontSize:"26px"
        }}
        >
        Trending Coins (24h)
        </Text>
        <Space h='lg'/>
        {Trending.map((coin,index)=>
            <Group key={index}
            justify="space-between"
            m={"10 0 10 0"}
            >
            <Text
            fw={500}
            style={{fontSize:"16px"}}
            >{coin.title}</Text>
            <Chip checked color="lime" 
            variant="light" size="lg" 
            radius="sm">{coin.rate} %</Chip>
            </Group>
            )}
        </Card>
        
        
        </>)
}