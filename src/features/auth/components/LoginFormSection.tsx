import Input from "@/shared/components/Input.tsx";
import {Link, useNavigate} from "react-router-dom";
import {FORGOT_PASSWORD} from "@/shared/constants/route.constant.ts";
import Button from "@/shared/components/Button.tsx";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {useLogin} from "@/features/auth/hooks/useLogin.ts";
import type {LoginPayload} from "@/features/auth/types/auth.type.ts";
import Alert from "@/shared/components/Alert.tsx";

const LoginFormSection = () => {
    const [values, setValues] = useState<LoginPayload>({
        email: "",
        password: "",
    })
    const {mutate, isPending, error} = useLogin()
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(values, {
            onSuccess: async () => {
                navigate("/")
            }
        })

    }
    return (
        <form method={"POST"} noValidate className={"flex flex-col gap-4 sm:gap-5"} onSubmit={handleSubmit}>
            {error && <Alert variant={"error"} title={"Failed to login"} message={error.message}/>}
            <div className={"flex flex-col gap-1"}>
                <label htmlFor={"email"} className={"text-xs sm:text-sm font-medium"}>Email<span className={"ml-2 text-error"}>*</span></label>
                <Input className={"text-sm"} id={"email"} type={"email"} required autoComplete={"email"} name={"email"} aria-describedby={"email-error"} value={values.email} onChange={handleChange} placeholder={"Enter your email"}/>
                <span id={"email-error"} role={"alert"} className={"text-error"}></span>
            </div>
            <div className={"flex flex-col gap-1"}>
                <label htmlFor={"password"} className={"text-xs sm:text-sm font-medium"}>Password<span className={"ml-2 text-error"}>*</span></label>
                <Input className={"text-sm"} id={"password"} type={"password"} required autoComplete={"current-password"} name={"password"} aria-describedby={"password-error"} value={values.password} onChange={handleChange} placeholder={"Enter your password"}/>
                <span id={"password-error"} role={"alert"} className={"text-error"}></span>
            </div>
            <div className={"flex justify-end"}>
                <Link to={FORGOT_PASSWORD} className={"text-primary hover:text-primary-hover text-sm transition"}>Forgot Password?</Link>
            </div>
            <Button disabled={isPending} type={"submit"} className={"font-semibold"}>{isPending ? "Logging in..." : "Login"}</Button>
        </form>
    );
};

export default LoginFormSection;