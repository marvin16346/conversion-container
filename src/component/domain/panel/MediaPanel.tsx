import { Grid, Typography, Divider } from "@mui/material"
import Media from "../unit/Media"
import { useRouter } from "next/router"


const MediaPanel = () => {
    const router = useRouter();
    const { domain } = router.query;

    return ( 
        <Grid item xs={6}>
            <Typography variant="h4" color="initial">매체</Typography>
            <Divider color="gray"/>
            <Media
                domain={domain as string}
            />
        </Grid>
     );
}
 
export default MediaPanel;