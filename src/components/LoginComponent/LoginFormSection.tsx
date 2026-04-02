import Input from "@/components/uis/Input.tsx";
import {Link} from "react-router-dom";
import {FORGOT_PASSWORD} from "@/constants/route.constant.ts";
import Button from "@/components/uis/Button.tsx";
import {type ChangeEvent, useState} from "react";
import type {LoginPayload} from "@/types/user.type.ts";

const LoginFormSection = () => {
    const [values, setValues] = useState<LoginPayload>({
        email: "",
        password: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <form method={"POST"} noValidate className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-1"}>
                <label htmlFor={"email"} className={"text-sm font-medium"}>Email<span className={"ml-2 text-error"}>*</span></label>
                <Input id={"email"} type={"email"} required autoComplete={"email"} name={"email"} aria-describedby={"email-error"} value={values.email} onChange={handleChange} placeholder={"Enter your email"}/>
                <span id={"email-error"} role={"alert"} className={"text-error"}></span>
            </div>
            <div className={"flex flex-col gap-1"}>
                <label htmlFor={"password"} className={"text-sm font-medium"}>Password<span className={"ml-2 text-error"}>*</span></label>
                <Input id={"password"} type={"password"} required autoComplete={"current-password"} name={"password"} aria-describedby={"password-error"} value={values.password} onChange={handleChange} placeholder={"Enter your password"}/>
                <span id={"password-error"} role={"alert"} className={"text-error"}></span>
            </div>
            <div className={"flex justify-end"}>
                <Link to={FORGOT_PASSWORD} className={"text-primary hover:text-primary-hover text-sm transition"}>Forgot Password?</Link>
            </div>
            <Button type={"submit"} className={"font-semibold"}>Login</Button>
        </form>
    );
};

export default LoginFormSection;