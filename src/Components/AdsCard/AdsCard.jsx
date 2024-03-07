import { Button, Card, Space, Text } from "@mantine/core"
import { IconArrowNarrowRight } from '@tabler/icons-react';




export const AdsCard=()=>{
    return(<>
        
        <Card
        ta='center'
        withBorder
        shadow="sm" 
        radius="md"
        style={{
            backgroundColor:'#228be6',
            color:"white"
        }}
        >
        <Text
        fw={700}
        >Get Started with KoinX for FREE</Text>
        <Space h='lg'/>
        <Text
        fw={400}
        >
        with our range of features that you can equip for free, KoinX allows you to be more
        educated and aware of your tax reports.
        </Text>
        <Space h='lg'/>
        <Button
        color="white"
        h={50}
        p='15px'
        rightSection={<IconArrowNarrowRight/>}
        style={{
            color:"black",
            fontWeight:700,
            fontSize:'18px',
            borderRadius:"10px"

        }}
        >
        Get Started for FREE
        
        </Button>
        </Card>
        </>)
}