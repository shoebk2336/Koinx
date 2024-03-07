import { Box, Card, Grid, SimpleGrid, Space, Text } from "@mantine/core"
import { IconArrowZigZag } from '@tabler/icons-react';
import { IconFileDescription } from '@tabler/icons-react';


export const SentimentCard=()=>{

    return(<>
        <Card
        withBorder
        shadow="md"
        p={15}
        >
        <Text
        fw={700}
        style={{
            fontSize:'24px'
        }}
        >Sentiment</Text>
        <Space h='lg'/>
        <Text fw={700} 
        style={{fontSize:"18px"}}
        >Key Events</Text>
        <Space h='lg'/>
        <SimpleGrid cols={2}>
        
        <DisplayCard
        clr="#e8f4fd"
        Iconclr="#0082ff"
        icon={<IconFileDescription style={{marginTop:"25%"}}/>}
        />
        
        <DisplayCard
        clr="#e8f4fd"
        Iconclr="#0fba83"
        icon={<IconFileDescription style={{marginTop:"25%"}}/>}
        />
        </SimpleGrid>
        </Card>
        </>)
}

const DisplayCard=(data)=>{
    const {Iconclr,icon,clr}=data
    return(<>
        <Card
        withborder
        shadow='md'
        p='15'
        style={{
        backgroundColor:clr,
        borderRadius:"15px"
    }}
        >
        <Grid>
        <Grid.Col>
        <Box
        w='50px'
        h='50px'
        ta='center'
        bg={Iconclr}
        c='white'
        style={{borderRadius:'30px'
    }}
    >
    {icon}
    </Box>
    </Grid.Col>
    <Grid.Col>
    <Text
    fw={600}
    style={{fontSize:"15px"}}
    >
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </Text>
    <Space h='lg'/>
    <Text>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    </Text>
    `</Grid.Col>
        </Grid>
        </Card>
        
        </>)
}