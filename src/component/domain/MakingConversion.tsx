import { useContext } from 'react';
import { MakingConversionContext, AllConversionContext } from "@/provider/ConversionProvider"
import { Box, Button, Container, Grid, Typography, TextField } from '@mui/material';
import SyntaxEditor from '../common/SyntaxEditor';


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
                <>
                    <Grid 
                        container
                        justifyContent="space-around"
                        textAlign="center"
                        spacing={4}
                        direction="row"
                    >
                        <Grid item xs={6}>
                            <Typography variant="h6" color="initial">key</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" color="initial">호출할 함수</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                              id="trigger-key"
                              label="trigger 함수의 key"
                              sx={{
                                width: "100%"
                              }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <SyntaxEditor/>
                        </Grid>

                    </Grid>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
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
                            저장하기
                        </Button>
                    </Box>
                </>
            }
        </Box>
    );
}
 
export default MakingConversion;