import defaultAxios from "@/axios/axios";
import { Dialog, DialogTitle, Typography, DialogContent, Stack, Box, DialogActions, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const domainId = "container-domain-text"
const descId = "container-desc-text"

type Props = {
    open: boolean,
    onClose: Function
}

const ContainerAddDialog = ({ open, onClose }: Props) => {
    const [domain, setDomain] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    useEffect(() => {
        
        return () => {
        }
    }, []);
    

    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                {/* <Typography variant="h4"> */}
                    컨테이너 생성
                {/* </Typography> */}
            </DialogTitle>

            <DialogContent>
                <Stack spacing={8}>
                    <Box>
                        <Typography variant="h5">
                            도메인
                        </Typography>
                        <TextField
                            id={domainId}
                            sx={{
                                flexGrow: 1
                            }}
                            placeholder="입력해주세요"
                            error={!domain.trim()}
                            value={domain}
                            onChange={(evt) => setDomain(evt.target.value)}
                        />
                    </Box>

                    <Box>
                        <Typography variant="h5">
                            설명
                        </Typography>
                        <TextField
                            id={descId}
                            sx={{
                                flexGrow: 1
                            }}
                            placeholder="입력해주세요"
                            error={!desc.trim()}
                            value={desc}
                            onChange={(evt) => setDesc(evt.target.value)}
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
                        const res = await defaultAxios.post(
                            `/containers`, 
                            {
                                domain : domain,
                                description: desc
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
 
export default ContainerAddDialog;