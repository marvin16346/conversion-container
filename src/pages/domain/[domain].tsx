import { useRouter } from "next/router";
import Typography from '@mui/material/Typography'
import { Box, Divider, Grid, Stack } from "@mui/material";
import Media from "@/component/domain/Media";
import ConversionProvider from "@/provider/ConversionProvider";
import Event from "@/component/domain/Event";
import Trigger from "@/component/domain/Trigger";
import MakingConversion from "@/component/domain/MakingConversion";
import AllConversion from "@/component/domain/AllConversion";


const Domain = () => {
    const router = useRouter();
    const { domain } = router.query;

    return ( 
        <Box>
            <Box p={8}>
                <Typography variant="h3" color="initial">{domain}</Typography>
            </Box>

            <ConversionProvider>
                <Stack spacing={8}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        textAlign="center"
                        spacing={4}
                        // alignItems="center"
                    >
                        {/* 매체 선택 */}
                        <Grid item xs={4}>
                            <Typography variant="h4" color="initial">매체</Typography>
                            <Divider color="gray"/>
                            <Media/>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant="h4" color="initial">이벤트</Typography>
                            <Divider color="gray"/>
                            <Event/>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant="h4" color="initial">트리거</Typography>
                            <Divider color="gray"/>
                            <Trigger/>
                        </Grid>
                    </Grid>

                    <MakingConversion/>

                    <AllConversion/>
                </Stack>
            </ConversionProvider>   
        </Box>
     );
}
 
export default Domain;
