import SyntaxEditor from "@/component/common/SyntaxEditor";
import { Dialog, DialogTitle, Typography, DialogContent, Stack, Box, TextField, Button, DialogActions, FormControl, FormLabel, FormHelperText, FormGroup } from "@mui/material";
import { Event, EventDetail } from "@/data/event";
import defaultAxios from "@/axios/axios";
import useSWR, { mutate } from 'swr';

type Props = {
    domain: string,
    event: string,
    open: boolean,
    onClose: Function,
};

const nameId = "event-name";
const funcId = "event-editor-code-input";
const urlId = "event-url-text";

const EventEditDialog = ({ domain, event, open, onClose }: Props) => {
    const { data: eventDetail }: {data: EventDetail | undefined} = useSWR(`/containers/${domain}/events/${event}`);

    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                <Typography variant="h4">
                    이벤트 설정
                </Typography>
            </DialogTitle>

            {
            eventDetail
            &&
            <DialogContent
                sx={{
                    paddingTop: "20px !important"
                }}
            >
                <FormControl  
                    component="fieldset"    
                >
                    <Stack
                        spacing={4}
                    >
                        <FormGroup>
                            <FormLabel>
                                이벤트명
                            </FormLabel>
                            <TextField
                                id={nameId}
                                sx={{
                                    flexGrow: 1
                                }}
                                defaultValue={eventDetail.name}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>
                                이벤트 등록 함수
                            </FormLabel>
                            <SyntaxEditor
                                text={eventDetail.func_code}
                                keyString="event-editor"
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <FormLabel>
                                이벤트 발생 url 정규식
                            </FormLabel>
                            <TextField
                                id={urlId}
                                sx={{
                                    flexGrow: 1
                                }}
                                defaultValue={eventDetail.url_reg}
                            />
                        </FormGroup>
                    </Stack>
                </FormControl>
            
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
                    type="submit"
                    variant="contained"
                    onClick={async () => {
                        const res = await defaultAxios.put(
                            `/containers/${domain}/events/${event}`, 
                            {
                                name: document.getElementById(nameId)!.value,
                                url_reg: document.getElementById(urlId)!.value,
                                func_code: document.getElementById(funcId)!.innerText,
                            }
                        );
                        if (res.status == 200) {
                            mutate(
                                `/containers/${domain}/events/${document.getElementById(nameId)!.value}`, 
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
 
export default EventEditDialog;
