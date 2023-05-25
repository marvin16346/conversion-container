import defaultAxios from "@/axios/axios";
import { Box, Dialog, DialogContent, DialogTitle, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import SyntaxEditor from "../common/SyntaxEditor";

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
                `/containers/${domain}/script`
            );
            console.log(res);
            if (res.status && res.status == 200) {
                setScript(res.data.common_script);
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
                    아래 내용을 head 태그 끝에 붙여넣으세요
                </Typography>
            </DialogTitle>

            <DialogContent
                sx={{
                    paddingTop: "20px !important"
                }}
            >
                <Box>
                    <SyntaxEditor
                        keyString="deploy"
                        text={script}
                        disabled
                    />
                    <Button 
                        variant="outlined"
                        onClick={() => {
                            navigator.clipboard.writeText(script)
                                .then(() => {
                                    alert("복사했습니다. ctrl + v로 붙여넣으세요");
                                })
                                .catch((err) => {
                                    alert("복사에 실패했습니다");
                                });
                        }}    
                    >
                      복사하기
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
 
export default DeployDialog;