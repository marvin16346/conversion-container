import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import defaultAxios from "@/axios/axios";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const GoogleLoginCallback = () => {
    const router = useRouter();
    const { code } = router.query;

    const { setAccessToken, setRefreshToken, setUsername } = useContext(AuthContext);

    useEffect(() => {
      if (!code) {
        return;
      }

      async function getToken() {
        const res = await defaultAxios.get(
          `/login/google?${Object.keys(router.query).map((k) => `${k}=${router.query[k]}`).join("&")}`
        );
        if (res.status == 200) {
          setAccessToken(res.data.access_token);
          setRefreshToken(res.data.refresh_token);
          setUsername(res.data.user_code);
          router.replace("/");
        } else {
          console.error(res.data);
        }
      }

      getToken();    
    
      return () => {
      }
    }, [code]);
    

    return ( 
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
        >
            <HourglassEmptyIcon 
              className="rotation"
              color="primary"
              sx={{
                fontSize: "10rem"
              }}
            />
            <p>
              로그인 중
            </p>
        </Grid>
      </Grid>
     );
}
 
export default GoogleLoginCallback;