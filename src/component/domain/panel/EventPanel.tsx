import { Grid, Stack, Typography, IconButton, Divider } from "@mui/material";
import Event from "@/component/domain/unit/Event";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
import { useRouter } from "next/router";
import EventAddDialog from "../dialog/EventAddDialog";

const EventPanel = () => {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    const { domain } = router.query;

    return ( 
        <>
            <Grid item xs={6}>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                >
                    <Typography variant="h4" color="initial">이벤트</Typography>
                    <IconButton
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <AddCircleIcon color="primary"/>
                    </IconButton>
                </Stack>
                <Divider color="gray"/>
                <Event
                    domain={domain as string}
                />
            </Grid>

            {
                domain
                &&
                <EventAddDialog
                    domain={domain as string}
                    open={open}
                    onClose={() => setOpen(false)}
                />
            }
        </>
     );
}
 
export default EventPanel;