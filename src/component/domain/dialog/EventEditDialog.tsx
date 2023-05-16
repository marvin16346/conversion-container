import SyntaxEditor from "@/component/common/SyntaxEditor";
import { Dialog, DialogTitle, Typography, DialogContent, Stack, Box, TextField, Button, DialogActions, FormControl, FormLabel, FormHelperText, FormGroup } from "@mui/material";
import { Event } from "@/data/event";
import defaultAxios from "@/axios/axios";

type Props = {
    event: Event,
    open: boolean,
    onClose: Function,
    apiMethod: "put" | "post"
};

const nameId = "event-name";
const funcId = "event-editor-code-input";
const urlId = "event-url-text";

const EventEditDialog = ({ event, open, onClose, apiMethod }: Props) => {

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
                                defaultValue={event.name}
                            
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
                                onChange={() => {}}
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
                        console.log(apiMethod)
                        const res = await defaultAxios[apiMethod](
                            apiMethod == "put" ? `/event/${event.name}` : '/event', 
                            {
                                name: document.getElementById(nameId)!.value,
                                regUrl: document.getElementById(urlId)!.value,
                                eventListener: document.getElementById(funcId)!.value,
                            }
                        );
                        if (res.status == 200) {
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