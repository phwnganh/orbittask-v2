import Input from "@/components/uis/Input.tsx";
import {Link} from "react-router-dom";
import {FORGOT_PASSWORD} from "@/constants/route.constant.ts";
import Button from "@/components/uis/Button.tsx";

const LoginFormSection = () => {
    return (
        <form method={"POST"} noValidate className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-1"}>
                <label htmlFor={"email"}>Email<span className={"ml-2 text-error"}>*</span></label>
                <Input id={"email"} type={"email"} placeholder={"Enter your email"}/>
            </div>
            <div className={"flex flex-col gap-1"}>
                <label htmlFor={"password"}>Password<span className={"ml-2 text-error"}>*</span></label>
                <Input id={"password"} type={"password"} placeholder={"Enter your password"}/>
            </div>
            <Link to={FORGOT_PASSWORD} className={"text-primary hover:text-primary-hover"}>Forgot Password?</Link>
            <Button type={"submit"} className={"font-semibold"}>Login</Button>
        </form>
    );
};

export default LoginFormSection;