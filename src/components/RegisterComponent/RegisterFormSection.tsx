import Input from "@/components/uis/Input.tsx";
import Button from "@/components/uis/Button.tsx";

const RegisterFormSection = () => {
    return (
        <form method={"POST"} noValidate className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-1"}>
                <div className={"flex flex-col sm:items-center sm:flex-row gap-4"}>
                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"firstName"} className={"text-sm font-medium"}>First Name<span className={"ml-2 text-error"}>*</span></label>
                        <Input id={"firstName"} type={"text"} required autoComplete={"given-name"} aria-describedby={"firstName-error"} placeholder={"Enter your first name"}/>
                        <span id={"firstName-error"} role={"alert"} className={"text-error"}></span>
                    </div>
                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"lastName"} className={"text-sm font-medium"}>Last Name<span className={"ml-2 text-error"}>*</span></label>
                        <Input id={"lastName"} type={"text"} required autoComplete={"family-name"} aria-describedby={"lastName-error"} placeholder={"Enter your last name"}/>
                        <span id={"lastName-error"} role={"alert"} className={"text-error"}></span>
                    </div>
                </div>

                <div className={"flex flex-col gap-1"}>
                    <label htmlFor={"email"} className={"text-sm font-medium"}>Email<span className={"ml-2 text-error"}>*</span></label>
                    <Input id={"email"} type={"email"} required autoComplete={"email"} name={"email"} aria-describedby={"email-error"} placeholder={"Enter your email"}/>
                    <span id={"email-error"} role={"alert"} className={"text-error"}></span>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <label htmlFor={"password"} className={"text-sm font-medium"}>Password<span className={"ml-2 text-error"}>*</span></label>
                    <Input id={"password"} type={"password"} required autoComplete={"new-password"} name={"password"} aria-describedby={"password-error"} placeholder={"Enter your password"}/>
                    <span id={"password-error"} role={"alert"} className={"text-error"}></span>
                </div>
            </div>
            <Button type={"submit"} className={"font-semibold"}>Register</Button>
        </form>
    );
};

export default RegisterFormSection;