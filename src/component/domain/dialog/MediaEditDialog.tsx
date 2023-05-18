import {  Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemButton, ListItemText, TextareaAutosize, Typography, Button, Stack, TextField } from "@mui/material";
import TrackingId from "@/component/domain/unit/TrackingId";
import { Media, MediaDetail } from "@/data/media";
import { useEffect, useState } from "react";
import SyntaxEditor from "../../common/SyntaxEditor";
import defaultAxios from "@/axios/axios";
import useSWR, {mutate} from 'swr';


type Props = {
    domain: string,
    platform: string,
    open: boolean,
    onClose: Function,
}

const MediaEditDialog = ({ domain, platform, open, onClose }: Props) => {
    const [trackingList, setTrackingList] = useState<Array<string>>([]);
    const { data: mediaDetail }: {data: MediaDetail | undefined} = useSWR(`/containers/${domain}/mediums/${platform}`);

    useEffect(() => {
      mediaDetail && setTrackingList(mediaDetail.tracking_list);
      return () => {
      }
    }, [mediaDetail]);
    

    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                <Typography variant="h4">
                    {platform} 설정
                </Typography>
            </DialogTitle>

            {
            mediaDetail
            &&
            <DialogContent>
                <Stack spacing={8}>
                    <Box>
                        <Typography variant="h5">
                            공통 유틸리티 스크립트
                        </Typography>
                        <SyntaxEditor
                            text={mediaDetail.base_code}
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
            }

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
                        const res = await defaultAxios.put(
                            `/containers/${domain}/mediums/${platform}`, 
                            {
                                base_code : document.getElementById("media-editor-code-input")!.value,
                                tracking_list: trackingList
                            }    
                        )
                        if (res.status == 200) {
                            mutate(
                                `/containers/${domain}/mediums/${platform}`, 
                            );
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
 
export default MediaEditDialog;
