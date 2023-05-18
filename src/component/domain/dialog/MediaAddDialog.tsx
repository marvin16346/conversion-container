import {  Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemButton, ListItemText, TextareaAutosize, Typography, Button, Stack, TextField } from "@mui/material";
import TrackingId from "@/component/domain/unit/TrackingId";
import { Media } from "@/data/media";
import { useState } from "react";
import SyntaxEditor from "../../common/SyntaxEditor";
import { useRouter } from "next/router";
import defaultAxios from "@/axios/axios";
import PlatformOption from "../unit/PlatformOption";

type Props = {
    domain: string,
    open: boolean,
    onClose: Function,
}

const MediaAddDialog = ({ domain, open, onClose }: Props) => {
    const [trackingList, setTrackingList] = useState<Array<string>>([]);
    const [selectedPlatform, setSelectedPlatform] = useState<string>("");

    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                <Typography variant="h4">
                    매체 추가
                </Typography>
            </DialogTitle>

            <DialogContent>
                <Stack spacing={8}>
                    <Box>
                        <PlatformOption
                            domain={domain}
                            onSelect={setSelectedPlatform}
                        />
                    </Box>

                    <Box>
                        <Typography variant="h5">
                            공통 유틸리티 스크립트
                        </Typography>
                        <SyntaxEditor
                            text={""}
                            keyString="media-editor"
                        />
                    </Box>

                    <Box>
                        <Typography variant="h5">
                            트래킹 ID 리스트
                        </Typography>
                        <TrackingId
                            trackingList={trackingList} 
                            setTrackingList={setTrackingList}
                        />
                    </Box>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button 
                    variant="contained"
                    onClick={onClose}    
                >
                    취소
                </Button>
                <Button 
                    variant="contained"
                    onClick={async () => {
                        if (!selectedPlatform) return;
                        const res = await defaultAxios.post(
                            `/containers/${domain}/mediums`, 
                            {
                                platform_name: selectedPlatform,
                                base_code : document.getElementById("media-editor-code-input")!.value,
                                tracking_list: trackingList,
                                is_using: true,
                            }    
                        )
                        if (res.status == 200 || res.status == 201) {
                            onClose();
                        }
                    }}
                >
                    저장
                </Button>
            </DialogActions>
        </Dialog>
     );
}
 
export default MediaAddDialog;