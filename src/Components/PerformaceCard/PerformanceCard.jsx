import { Card, Divider, Group, Progress, SimpleGrid, Space, Stack, Text } from "@mantine/core"


export const PerformanceCard=()=>{
    const Bar=[
        {StartTitle:"Today's Low",EndTitle:"Today's High",low:'46,930.22',high:"49,343.83"},
        {StartTitle:"52W Low",EndTitle:"52W High",low:'16,930.22',high:"49,743.83"}
    ]

   
    return(<>
        <Card
        withBorder
        shadow="md"
        padding={15}
        >
        <Text
        fw={700}
        style={{

            fontSize:'24px'
        }}
        >
        Perfromance
        </Text>
        <Space h='lg'/>

        {Bar.map((data,index)=>
            <Group key={index}
            justify="space-between"
            >
            <Stack
            ta='left'
            mb={18}
            >
            <Text
            mb={-15}
            fw={600}
            >{data.StartTitle}</Text>
            <Text >{data.low}</Text>
            </Stack>
            <Progress value={50} striped animated c='red' />
            <Stack
            ta='left'
            mb={18}
            >
            <Text
            mb={-15}
            fw={600}
            >{data.EndTitle}</Text>
            <Text>{data.high}</Text>
            </Stack>
            </Group>
            )}
            <Space h='xl'/>
            {<FundamentalSection/>}
            
                    </Card>
        
        </>)
}


const FundamentalSection=()=>{

    const FundamentalData1=[
        {title:"Bitcoin Price",value:'$16,874.12'},
        {title:"24h Low / 24h High",value:'$16,874.12/ $16,874.12'},
        {title:"7d Low / 7d High",value:'$16,874.12/ $16,874.12'},
        {title:"Trading Volume",value:'$16,874.12'},
        {title:"Market Cap Rank",value:'#1'},
        
    ]

    const FundamentalData2=[
        {title:"Market Cap",value:'$16,874.12'},
        {title:"Market Cap Dominance",value:'$16,874.12'},
        {title:"Volume / Market Cap",value:'$16,874.12'},
        {title:"All-Time High",value:'$16,874.12'},
        {title:"All-Time Low",value:'$16,874.12'},
        
    ]
    return(<>
        <Text
            fw={700}
        style={{
            fontSize:'24px'
        }}
            >Fundamentals</Text>

            <Space h='xl'/>
            <SimpleGrid cols={{base:1,sm:2}}
            
            spacing='100px'
            
            >
            <Stack
            
            
            >
            {FundamentalData1.map((data,index)=>
                <>
                <Group key={index} justify="space-between">
                <Text c='dimmed'>{data?.title}</Text>
                <Text fw={500}>{data?.value}</Text>
                
                
                </Group>
                <Divider size='sm'/>
                </>
                
                )}
            </Stack>

            <Stack
            
            
            >
            {FundamentalData2.map((data,index)=>
                <>
                <Group key={index} justify="space-between">
                <Text c='dimmed'>{data?.title}</Text>
                <Text fw={500}>{data?.value}</Text>
                
                
                </Group>
                <Divider size='sm'/>
                </>
                
                )}
            </Stack>
            
            </SimpleGrid>

        </>)
}