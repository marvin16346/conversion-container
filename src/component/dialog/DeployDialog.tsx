import defaultAxios from "@/axios/axios";
import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
    domain: string,
    open: boolean,
    onClose: Function
}

const DeployDialog = ({ domain, open, onClose }: Props) => {
    const [script, setScript] = useState<string>("");

    useEffect(() => {
        async function getScript() {
            const res = await defaultAxios.get(
                `/containers/${domain}/scripts`
            );
            if (res.status == 200) {
                setScript(res.data.code);
            }
        }
        if (open) {
            getScript();
        }
        
        return () => {
        }
    }, [open]);
    

    return ( 
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
                <Typography variant="h5">
                    아래 내용을 head 사이에 붙여넣으세요
                </Typography>
            </DialogTitle>

            <DialogContent
                sx={{
                    paddingTop: "20px !important"
                }}
            >
                <Box>
                    {script}
                </Box>
            </DialogContent>
        </Dialog>
    );
}
 
export default DeployDialog;