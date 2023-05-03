import { Grid, Stack, Typography, IconButton, Divider } from "@mui/material";
import Event from "@/component/domain/unit/Event";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const EventPanel = () => {
    return ( 
        <Grid item xs={6}>
            <Stack
                direction={"row"}
                justifyContent={"center"}
            >
                <Typography variant="h4" color="initial">이벤트</Typography>
                <IconButton
                    onClick={() => {}}
                >
                    <AddCircleIcon color="primary"/>
                </IconButton>
            </Stack>
            <Divider color="gray"/>
            <Event/>
        </Grid>
     );
}
 
export default EventPanel;