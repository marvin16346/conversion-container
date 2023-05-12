import SyntaxEditor from "@/component/common/SyntaxEditor";
import { Grid, Typography, TextField, Box, Button } from "@mui/material";
import { useRouter } from 'next/router';
import { useConversion } from '@/data/conversion';
import { useContext, useEffect, useState } from 'react';
import Loading from '@/component/common/Loading';
import { MakingConversionContext } from "@/provider/ConversionProvider"

const Conversion = () => {
    const router = useRouter();
    const { domain } = router.query;
    const { makingConversion, saveConversion } = useContext(MakingConversionContext);
    const { conversion, isLoading, error, mutate } = useConversion({
        domain: domain! as string,
        media: makingConversion.media!.name,
        event: makingConversion.event!.name
    });
    const [triggerKey, setTriggerKey] = useState<string>("");

    useEffect(() => {
        setTriggerKey(conversion.triggerKey!);
            
        return () => {
        }
    }, [conversion]);

    
    return (
        isLoading
        ?
        <Loading/>
        :
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
                        value={triggerKey}
                        onChange={(evt) => setTriggerKey(evt.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SyntaxEditor
                        keyString="conversion-editor"
                        text={new String(conversion.executionCode!)}
                    />
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
                        async () => {
                            const res = await saveConversion(
                                document.getElementById("trigger-key")!.value,
                                document.getElementById("conversion-editor-code-input")!.value,
                            );
                            // TODO: mutate
                            // mutate();
                        }
                    }
                >
                    저장하기
                </Button>
            </Box>
        </>
    );
}
 
export default Conversion;