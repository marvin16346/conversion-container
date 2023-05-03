import { useRouter } from "next/router";
import Typography from '@mui/material/Typography'
import { Box, Divider, Grid, IconButton, Stack } from "@mui/material";
import ConversionProvider from "@/provider/ConversionProvider";
import MakingConversion from "@/component/domain/MakingConversion";
import EditBox from "@/component/domain/EditBox";
import MediaPanel from '@/component/domain/panel/MediaPanel';
import EventPanel from '@/component/domain/panel/EventPanel';

const VersionManager = () => {
    const router = useRouter();
    const { domain, version } = router.query;

    return ( 
        <Box>
            <Box p={8}>
                <Typography variant="h3" color="initial">{domain}</Typography>
                <Typography variant="h4" color="initial">{version}</Typography>
            </Box>

{/* 
            <Box>
                <TextareaAutosize
                    id="script-textarea"
                    aria-label="minimum height"
                    placeholder="스크립트를 작성해주세요"
                    minRows={10}
                    style={{
                        width: "100%",
                        padding: 20
                    }}
                />
                <ButtonGroup variant="contained" aria-label="outlined button group">
                    <Button
                        onClick={() => {
                            defaultAxios.put(
                                `/api/domain/${domain}/version/${version}`,
                                {
                                    content: document.getElementById("script-textarea")?.value
                                }
                            );
                        }}
                    >
                        수정하기
                    </Button>
                    <Button>
                        새로운 버전
                    </Button>
                </ButtonGroup>
            </Box> */}

            <ConversionProvider>
                <Stack spacing={8}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        textAlign="center"
                        spacing={4}
                    >
                        {/* 매체 */}
                        <MediaPanel/>

                        {/* 이벤트 */}
                        <EventPanel/>

                        {/* <Grid item xs={4}>
                            <Typography variant="h4" color="initial">트리거</Typography>
                            <Divider color="gray"/>
                            <Trigger/>
                        </Grid> */}
                    </Grid>

                    <MakingConversion/>

                    <EditBox/>

                    {/* <AllConversion/> */}
                </Stack>
            </ConversionProvider>   
        </Box>
     );
}
 
export default VersionManager;
