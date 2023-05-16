import { Grid, Stack, Typography, IconButton, Divider } from "@mui/material";
import Event from "@/component/domain/unit/Event";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EventEditDialog from "@/component/domain/dialog/EventEditDialog";
import { useState } from "react";
import { makeEvent } from "@/data/event";

const EventPanel = () => {
    const [open, setOpen] = useState<boolean>(false);


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
                <Event/>
            </Grid>

            <EventEditDialog
                event={makeEvent()}
                open={open}
                onClose={() => setOpen(false)}
                apiMethod={"post"}
            />
        </>
     );
}
 
export default EventPanel;