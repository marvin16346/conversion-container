import { useRouter } from "next/router";
import Typography from '@mui/material/Typography'
import { Box, Divider, Grid, IconButton, Stack } from "@mui/material";
import ConversionProvider from "@/provider/ConversionProvider";
import MakingConversion from "@/component/domain/MakingConversion";
import MediaPanel from '@/component/domain/panel/MediaPanel';
import EventPanel from '@/component/domain/panel/EventPanel';

const VersionManager = () => {
    const router = useRouter();
    const { domain, version } = router.query;

    return ( 
        <Box>
            <Box p={8}>
                <Typography variant="h3" color="initial">{domain}</Typography>
                <Typography variant="h4" color="initial">{version}</Typography>
            </Box>

            <ConversionProvider>
                <Stack spacing={8}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        textAlign="center"
                        spacing={4}
                    >
                        {/* 매체 */}
                        <MediaPanel/>

                        {/* 이벤트 */}
                        <EventPanel/>
                    </Grid>

                    <MakingConversion/>

                    {/* <AllConversion/> */}
                </Stack>
            </ConversionProvider>   
        </Box>
     );
}
 
export default VersionManager;
