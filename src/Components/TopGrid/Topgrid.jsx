import { Card, Grid, SimpleGrid } from "@mantine/core"
import { AdsCard } from "../AdsCard/AdsCard"
import { TrendingCard } from "../TrendingCard/Trendingcard"



export const TopGrid=()=>{
    return(<>
        <SimpleGrid
        cols={{base:1,sm:1}}
        >
        <Grid>
        <Grid.Col span={6}>
        <Card
        withBorder
        shadow="sm"
        radius='md'
        h='600px'
        ></Card>
        
        </Grid.Col>
        <Grid.Col span={6}>
        <AdsCard/>
        <TrendingCard/>
        </Grid.Col>
        </Grid>
        </SimpleGrid>
        
        </>)
}