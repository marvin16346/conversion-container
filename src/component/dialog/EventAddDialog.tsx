import SyntaxEditor from "@/component/common/SyntaxEditor";
import { Dialog, DialogTitle, Typography, DialogContent, Stack, Box, TextField, Button, DialogActions, FormControl, FormLabel, FormHelperText, FormGroup } from "@mui/material";
import { Event } from "@/data/event";
import defaultAxios from "@/axios/axios";
import useSWR, { mutate } from 'swr';
import { useState } from "react";


type Props = {
    domain: string,
    open: boolean,
    onClose: Function,
};

const nameId = "event-name";
const funcId = "event-editor-code-input";
const urlId = "event-url-text";

const EventAddDialog = ({ domain, open, onClose }: Props) => {

    const [name, setName] = useState<string>("");
    const [url, setUrl] = useState<string>("");

    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                <Typography variant="h4">
                    이벤트 추가
                </Typography>
            </DialogTitle>

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
                                error={!name.trim()}
                                placeholder="입력해주세요"
                                value={name}
                                onChange={(evt) => setName(evt.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>
                                이벤트 등록 함수
                            </FormLabel>
                            <SyntaxEditor
                                text={""}
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
                                error={!url.trim()}
                                placeholder="입력해주세요"
                                value={url}
                                onChange={(evt) => setUrl(evt.target.value)}
                            />
                        </FormGroup>
                    </Stack>
                </FormControl>
            
            </DialogContent>
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
                        const res = await defaultAxios.post(
                            `/containers/${domain}/events`, 
                            {
                                name: name,
                                url_reg: url,
                                func_code: document.getElementById(funcId)!.innerText,
                            }
                        );
                        if (res.status == 200 || res.status == 201) {
                            mutate(`/containers/${domain}/events`);
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
 
export default EventAddDialog;
