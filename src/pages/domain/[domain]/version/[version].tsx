import { useRouter } from "next/router";
import Typography from '@mui/material/Typography'
import { Box, Divider, Grid, Stack, ButtonGroup, Button } from "@mui/material";
import Media from "@/component/domain/unit/Media";
import ConversionProvider from "@/provider/ConversionProvider";
import Event from "@/component/domain/unit/Event";
import Trigger from "@/component/domain/unit/Trigger";
import MakingConversion from "@/component/domain/MakingConversion";
import AllConversion from "@/component/domain/AllConversion";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import defaultAxios from "@/axios/axios";
import SyntaxEditor from "@/component/common/SyntaxEditor";
import EditBox from "@/component/domain/EditBox";


const VersionManager = () => {
    const router = useRouter();
    const { domain, version } = router.query;

    return ( 
        <Box>
            <Box p={8}>
                <Typography variant="h3" color="initial">{domain}</Typography>
                <Typography variant="h4" color="initial">{version}</Typography>
            </Box>

            <SyntaxEditor></SyntaxEditor>
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
                        <Grid item xs={6}>
                            <Typography variant="h4" color="initial">매체</Typography>
                            <Divider color="gray"/>
                            <Media
                                domain={domain as string}
                            />
                        </Grid>

                        {/* 이벤트 */}
                        <Grid item xs={6}>
                            <Typography variant="h4" color="initial">이벤트</Typography>
                            <Divider color="gray"/>
                            <Event/>
                        </Grid>

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
