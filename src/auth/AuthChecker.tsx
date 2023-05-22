import Login from "@/pages/login";
import { AuthContext } from "@/provider/AuthProvider";
import { useRouter } from "next/router";
import { ReactElement, useContext } from "react";

type Props = {
    children : ReactElement
}

const AuthChecker = ({ children }: Props) => {
    const { accessToken } = useContext(AuthContext);
    const router = useRouter();

    if (!accessToken && router.pathname != "/login/google/callback") {
        return <Login/>;
    }

    return ( 
        <>
            { children }
        </>
     );
}
 
export default AuthChecker;