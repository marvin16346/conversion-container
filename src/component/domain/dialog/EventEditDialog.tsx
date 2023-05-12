import SyntaxEditor from "@/component/common/SyntaxEditor";
import domain from "@/pages/api/domain";
import media from "@/pages/api/media";
import { Dialog, DialogTitle, Typography, DialogContent, Stack, Box, TextField, Button, DialogActions } from "@mui/material";
import { version } from "react";
import { Event } from "@/data/event";

type Props = {
    event: Event,
    open: boolean,
    onClose: Function,
    onSubmit: Function
};

const EventEditDialog = ({ event, open, onClose, onSubmit }: Props) => {

    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                <Typography variant="h4">
                    이벤트 설정
                </Typography>
            </DialogTitle>

            <DialogContent
                sx={{
                    paddingTop: "20px !important"
                }}
            >
                <Stack spacing={8}>
                    <Box>
                        <TextField
                            id="event-name"
                            label="이벤트명"
                            sx={{
                                flexGrow: 1
                            }}
                            defaultValue={event.name}
                           
                        />
                    </Box>

                    <Box>
                        <Typography variant="h5">
                            이벤트 등록 함수
                        </Typography>
                        <SyntaxEditor
                            text={""}
                            keyString="event-editor"
                        />
                    </Box>

                    <Box>
                        <Typography variant="h5">
                            이벤트 발생 url 정규식
                        </Typography>
                        <Stack direction={'row'} >
                            <TextField
                                id="event-url-text"
                                label="이벤트가 발생할 url (정규식)"
                                sx={{
                                    flexGrow: 1
                                }}
                                onChange={() => {}}
                            />
                        </Stack>

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
                >
                    저장
                </Button>
            </DialogActions>
        </Dialog>
     );
}
 
export default EventEditDialog;