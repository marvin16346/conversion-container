import { Grid, Typography, Divider, IconButton, Stack } from "@mui/material"
import Media from "../unit/Media"
import { useRouter } from "next/router"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
import MediaEditDialog from "../dialog/MediaEditDialog";
import { makeMedia } from "@/data/media";
import MediaAddDialog from "../dialog/MediaAddDialog";



const MediaPanel = () => {
    const router = useRouter();
    const { domain } = router.query;
    const [open, setOpen] = useState<boolean>(false);


    return ( 
        <>
            <Grid item xs={6}>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                >
                    <Typography variant="h4" color="initial">매체</Typography>
                    <IconButton
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <AddCircleIcon color="primary"/>
                    </IconButton>
                </Stack>
                <Divider color="gray"/>
                <Media
                    domain={domain as string}
                />
            </Grid>


            <MediaAddDialog
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
     );
}
 
export default MediaPanel;