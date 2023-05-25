import SyntaxEditor from "@/component/common/SyntaxEditor";
import { Dialog, DialogTitle, Typography, DialogContent, Stack, Box, TextField, Button, DialogActions, FormControl, FormLabel, FormHelperText, FormGroup } from "@mui/material";
import { Event, EventDetail } from "@/data/event";
import defaultAxios from "@/axios/axios";
import useSWR, { mutate } from 'swr';
import { useState, useEffect } from "react";

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

    const [name, setName] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    
    useEffect(() => {
        eventDetail && setName(eventDetail?.name);
        eventDetail && setUrl(eventDetail?.url_reg);
    
      return () => {
      }
    }, [eventDetail]);
    

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
                                placeholder="입력해주세요"
                                error={!name.trim()}
                                value={name}
                                onChange={(evt) => setName(evt.target.value)}
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
                                placeholder="입력해주세요"
                                error={!url.trim()}
                                value={url}
                                onChange={(evt) => setUrl(evt.target.value)}
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
                                name: name,
                                url_reg: url,
                                func_code: document.getElementById(funcId)!.innerText,
                            }
                        );
                        if (res.status == 200) {
                            mutate(
                                `/containers/${domain}/events`, 
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
