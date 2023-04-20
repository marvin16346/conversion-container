import { useRouter } from "next/router";
import Typography from '@mui/material/Typography'
import { Box, Grid, Stack } from "@mui/material";
import Media from "@/component/domain/Media";
import ConversionProvider from "@/provider/ConversionProvider";
import Event from "@/component/domain/Event";
import Trigger from "@/component/domain/Trigger";
import MakingConversion from "@/component/domain/MakingConversion";


const Domain = () => {
    const router = useRouter();
    const { domain } = router.query;

    return ( 
        <Box>
            <Box p={8}>
                <Typography variant="h3" color="initial">{domain}</Typography>
            </Box>

            <ConversionProvider>
                <Stack spacing={4}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        // alignItems="center"
                    >
                        {/* 매체 선택 */}
                        <Grid item>
                            <Typography variant="h4" color="initial">매체</Typography>
                            <Media/>
                        </Grid>

                        <Grid item>
                            <Typography variant="h4" color="initial">이벤트</Typography>
                            <Event/>
                        </Grid>

                        <Grid item>
                            <Typography variant="h4" color="initial">트리거</Typography>
                            <Trigger/>
                        </Grid>
                    </Grid>

                    <MakingConversion/>
                </Stack>
            </ConversionProvider>   
        </Box>
     );
}
 
export default Domain;
