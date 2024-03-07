import { Box, Button } from "@mantine/core"
import { ButtonCopy } from "../Components/custombtn"
import { HeaderSearch } from "../Components/Navbar/navbar"
import { AdsCard } from "../Components/AdsCard/AdsCard"
import { TrendingCard } from "../Components/TrendingCard/Trendingcard"
import { TopGrid } from "../Components/TopGrid/Topgrid"
import { DoubleHeader } from "../Components/DoubleHeader/DoubleHeader"
import { PerformanceCard } from "../Components/PerformaceCard/PerformanceCard"
import { SentimentCard } from "../Components/SentimentCard/SentimentCard"



export const Home=()=>{
    return(<>
        <Box>
        <HeaderSearch/>
        <TopGrid/>
        <DoubleHeader/>
        <PerformanceCard/>
        <SentimentCard/>
        </Box>
        </>)
}