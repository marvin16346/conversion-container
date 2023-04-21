import { useContext } from 'react';
import { MakingConversionContext, AllConversionContext } from "@/provider/ConversionProvider"
import { Box, Button, Container, Grid, Typography } from '@mui/material';


const MakingConversion = () => {
    const { makingConversion, isAllSet } = useContext(MakingConversionContext);
    const { pushToAllConversion } = useContext(AllConversionContext);

    return ( 
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                textAlign="center"
                spacing={4}
            >
                {/* 매체 선택 */}
                <Grid item xs={4}>
                    <Typography variant="h5" color="initial">{makingConversion.media?.name}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant="h5" color="initial">{makingConversion.event?.name}</Typography>
                </Grid>

                <Grid item xs={4}>
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
                    <Button 
                        variant="contained"
                        onClick={
                            () => {
                                pushToAllConversion(makingConversion);
                            }
                        }
                    >
                        추가하기
                    </Button>
                </Box>
            }
        </Box>
    );
}
 
export default MakingConversion;