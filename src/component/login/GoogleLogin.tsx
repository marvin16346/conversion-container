import { Button } from "@mui/material";
import axios from "axios";
import GoogleIcon from '@mui/icons-material/Google';

const GoogleLogin = () => {

    return ( 
        <Button
          variant="contained"
          startIcon={<GoogleIcon/>}
        //   className="g_id_signin"
            onClick={() => {
                axios("https://localhost:5000/login/google")
                    .then(res => window.location.href = res.data.redirect_uri)
                    .catch(err => console.error(err))
                }
            }
        >
          구글 로그인
        </Button>
     );
}
 
export default GoogleLogin;