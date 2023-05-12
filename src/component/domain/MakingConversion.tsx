import { useContext } from 'react';
import { MakingConversionContext } from "@/provider/ConversionProvider"
import { Box, Button, Container, Grid, Typography, TextField } from '@mui/material';
import Conversion from './unit/Conversion';


const MakingConversion = () => {
    const { makingConversion, isAllSet } = useContext(MakingConversionContext);

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
                <Grid item xs={6}>
                    <Typography variant="h5" color="initial">{makingConversion.media?.name}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h5" color="initial">{makingConversion.event?.name}</Typography>
                </Grid>

            </Grid>

            {
                isAllSet() 
                &&
                <Conversion/>
            }
        </Box>
    );
}
 
export default MakingConversion;

