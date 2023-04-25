import Login from "@/pages/login";
import { AuthContext } from "@/provider/AuthProvider";
import { ReactElement, useContext } from "react";

type Props = {
    children : ReactElement
}

const AuthChecker = ({ children }: Props) => {
    const { accessToken } = useContext(AuthContext);

    if (!accessToken) {
        return <Login/>;
    }

    return ( 
        <>
            { children }
        </>
     );
}
 
export default AuthChecker;