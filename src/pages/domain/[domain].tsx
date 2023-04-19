import { useRouter } from "next/router";
import Typography from '@mui/material/Typography'
import { Box, Grid } from "@mui/material";
import { useMedia } from "@/data/media";


const Domain = () => {
    const router = useRouter();
    const { domain } = router.query;

    const { media, error, isLoading } = useMedia();

    return ( 
        <>
            <Box p={6}>
                <Typography variant="h4" color="initial">{domain}</Typography>
            </Box>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                {/* 매체 선택 */}
                <Grid item>
                    <div>fsaf</div>
                </Grid>

                <Grid item>
                    <div>fsaf</div>
                </Grid>

                <Grid item>
                    <div>fsaf</div>
                </Grid>
            </Grid>
        </>
     );
}
 
export default Domain;
