import GoogleLogin from "@/component/login/GoogleLogin";
import { Box, Typography } from "@mui/material";

const login = () => {
    return ( 
        <Box
        >
            <Typography 
                variant="h5" 
                py={5}
            >
                로그인 후 이용해주세요
            </Typography>
            <GoogleLogin/>
        </Box>
     );
}
 
export default login;