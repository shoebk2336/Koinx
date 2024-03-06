import { Box, Button } from "@mantine/core"
import { ButtonCopy } from "../Components/custombtn"
import { HeaderSearch } from "../Components/Navbar/navbar"



export const Home=()=>{
    return(<>
        <Box>
        <HeaderSearch/>
        <Button>Mantine</Button>
        <ButtonCopy/>
        </Box>
        </>)
}