import { useContext } from 'react';
import { MakingConversionContext } from "@/provider/ConversionProvider"
import { Box, Button, Container, Grid, Typography } from '@mui/material';


const MakingConversion = () => {
    const { makingConversion, isAllSet } = useContext(MakingConversionContext);


    return ( 
        <Box>
            {/* <Typography variant="h4" color="initial">현재 아이템</Typography> */}

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                // alignItems="center"
            >
                {/* 매체 선택 */}
                <Grid item>
                    <Typography variant="h5" color="initial">{makingConversion.media?.name}</Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h5" color="initial">{makingConversion.event?.name}</Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h5" color="initial">{makingConversion.trigger?.name}</Typography>
                </Grid>
            </Grid>

            {
                isAllSet() 
                &&
                <Box
                    p={3}
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Button variant="contained">
                        추가하기
                    </Button>
                </Box>
            }
        </Box>
    );
}
 
export default MakingConversion;