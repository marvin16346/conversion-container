import { Item, Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemButton, ListItemText, TextareaAutosize, Typography, Button, Stack, TextField } from "@mui/material";
import TrackingId from "@/component/domain/unit/TrackingId";
import { Media } from "@/data/media";
import { useState } from "react";
import SyntaxEditor from "../common/SyntaxEditor";

type Props = {
    domain: string
    media: Media,
    open: boolean,
    onClose: Function,
    onSubmit: Function
}

const MediaEditDialog = ({ domain, media, open, onClose, onSubmit }: Props) => {
    // const [open, setOpen] = useState<boolean>(false);

    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                <Typography variant="h4">
                    {media.name} 설정
                </Typography>
            </DialogTitle>

            <DialogContent>
                <Stack spacing={8}>
                    <Box>
                        <Typography variant="h5">
                            공통 유틸리티 스크립트
                        </Typography>
                        <SyntaxEditor/>
                        {/* <TextareaAutosize
                            className="textarea-code"
                        /> */}
                    </Box>

                    <Box>
                        <Typography variant="h5">
                            트래킹 ID 리스트
                        </Typography>
                        {/* version + media */}
                        <TrackingId 
                            domain={domain}
                        />
                        <Stack direction={'row'} >
                            <TextField
                                id="more-tracking-id"
                                label="추가할 트래킹 id"
                                sx={{
                                    flexGrow: 1
                                }}
                                onChange={() => {}}
                            />
                            <Button variant="outlined">
                                추가
                            </Button>
                        </Stack>

                    </Box>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button variant="contained">
                    취소
                </Button>
                <Button variant="contained">
                    저장
                </Button>
            </DialogActions>
        </Dialog>
     );
}
 
export default MediaEditDialog;