import defaultAxios from "@/axios/axios";
import SyntaxEditor from "@/component/common/SyntaxEditor";
import { Dialog, DialogTitle, Typography, DialogContent, Stack, Box, DialogActions, Button, TextField } from "@mui/material";

const domainId = "container-domain-text"
const descId = "container-desc-text"

type Props = {
    open: boolean,
    onClose: Function
}

const ContainerAddDialog = ({ open, onClose }: Props) => {
    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                <Typography variant="h4">
                    컨테이너 생성
                </Typography>
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
                                domain : document.getElementById(domainId)!.value,
                                description: document.getElementById(descId)!.value
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