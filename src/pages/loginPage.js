import LoginForm from "../components/loginForm/loginForm";
import {useAuth} from "../utilities/authUtility";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [checkingUserState, setCheckingUserState] = useState(true);

    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setIsUserLoggedIn(true);
            navigate("/admin")
        } else {
            setIsUserLoggedIn(false);
            setCheckingUserState(false);
        }
    }, [navigate, user]);
    console.log(user);
    return (
        <div className="bg-[#F2F2F2] w-full h-full flex justify-center items-center">
            {checkingUserState && <div>CHECKING USER PRIVILEGES</div>}
            {!checkingUserState && !isUserLoggedIn && <LoginForm/>}
        </div>
    )
}

export default LoginPage;
