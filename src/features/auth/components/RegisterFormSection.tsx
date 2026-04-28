import Input from "@/shared/components/Input.tsx";
import Button from "../../../shared/components/button/Button.tsx";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {VERIFIED_ACCOUNT} from "@/shared/constants/route.constant.ts";
import {useRegister} from "@/features/auth/hooks/useRegister.ts";
import type {RegisterPayload} from "@/features/auth/types/auth.type.ts";
import Alert from "@/shared/components/Alert.tsx";

const RegisterFormSection = () => {
    const [values, setValues] = useState<RegisterPayload>({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    })
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
        const {name, value} = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    const {mutate, isPending, error} = useRegister()
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({
            email: values.email,
            password: values.password,
            first_name: values.first_name,
            last_name: values.last_name,
        }, {
            onSuccess: () => {
                navigate(VERIFIED_ACCOUNT, {
                    state: {
                        email: values.email,
                    }
                })
            }
        })

    }
    return (
        <form method={"POST"} noValidate className={"flex flex-col gap-4 sm:gap-5"} onSubmit={onSubmit}>

            {error && <Alert variant={"error"} title={"Failed to signup"} message={error.message}/>}
            <div className={"flex flex-col gap-1"}>
                <div className={"flex flex-col sm:items-center sm:flex-row gap-4"}>
                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"firstName"} className={"text-xs sm:text-sm font-medium"}>First Name<span className={"ml-2 text-error"}>*</span></label>
                        <Input className={"text-sm"} id={"firstName"} type={"text"} required autoComplete={"given-name"} aria-describedby={"firstName-error"} value={values.first_name} onChange={handleChange} name={"first_name"} placeholder={"Enter your first name"}/>
                        <span id={"firstName-error"} role={"alert"} className={"text-error"}></span>
                    </div>
                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"lastName"} className={"text-xs sm:text-sm font-medium"}>Last Name<span className={"ml-2 text-error"}>*</span></label>
                        <Input className={"text-sm"} id={"lastName"} type={"text"} required autoComplete={"family-name"} aria-describedby={"lastName-error"} value={values.last_name} onChange={handleChange} name={"last_name"} placeholder={"Enter your last name"}/>
                        <span id={"lastName-error"} role={"alert"} className={"text-error"}></span>
                    </div>
                </div>

                <div className={"flex flex-col gap-1"}>
                    <label htmlFor={"email"} className={"text-xs sm:text-sm font-medium"}>Email<span className={"ml-2 text-error"}>*</span></label>
                    <Input className={"text-sm"} id={"email"} type={"email"} required autoComplete={"email"} name={"email"} aria-describedby={"email-error"} value={values.email} onChange={handleChange} placeholder={"Enter your email"}/>
                    <span id={"email-error"} role={"alert"} className={"text-error"}></span>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <label htmlFor={"password"} className={"text-xs sm:text-sm font-medium"}>Password<span className={"ml-2 text-error"}>*</span></label>
                    <Input className={"text-sm"} id={"password"} type={"password"} required autoComplete={"new-password"} name={"password"} aria-describedby={"password-error"} value={values.password} onChange={handleChange} placeholder={"Enter your password"}/>
                    <span id={"password-error"} role={"alert"} className={"text-error"}></span>
                </div>
            </div>
            <Button disabled={isPending} type={"submit"} className={"font-semibold"}>{isPending ? "Registering..." : "Register"}</Button>
        </form>
    );
};

export default RegisterFormSection;