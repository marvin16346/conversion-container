import { Button } from "@mui/material";
import axios from "axios";
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from "next/router";

const REDIRECT_URI = "http://localhost:3000/login/google/callback"

const GoogleLogin = () => {
    const router = useRouter();

    return ( 
        <Button
          variant="contained"
          startIcon={<GoogleIcon/>}
        //   className="g_id_signin"
            onClick={() => {
                router.push(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid email profile`);
              }
            }
        >
          구글 로그인
        </Button>
     );
}
 
export default GoogleLogin;