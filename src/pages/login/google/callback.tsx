import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/provider/AuthProvider";


const GoogleLoginCallback = () => {
    const router = useRouter();
    const { code } = router.query;

    const { setAccessToken, setRefreshToken, setUsername } = useContext(AuthContext);

    useEffect(() => {
      // const func = async () => {
      //   const res = await fetch(`https://localhost:5000/login/google/callback?code=${code}`);
      //   const data = await res.json();
      //   console.log(data);
      // };

      // func();
      if (!code) {
        return;
      }

      fetch(`https://localhost:5000/login/google/callback?code=${code}`)
        .then(res => {
          res.json()
            .then(data => {
              setAccessToken(data.access_token);
              setRefreshToken(data.refresh_token);
              setUsername(data.username);
              router.back();
            })
        })
        .catch(err => {
          console.error(err);
        });
        
    
      return () => {
      }
    }, [code]);
    

    return ( 
        <Box>
            로그인 대기
        </Box>
     );
}
 
export default GoogleLoginCallback;