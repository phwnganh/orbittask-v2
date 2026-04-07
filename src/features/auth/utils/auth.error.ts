export const mapRegisterError = (message: string) => {
    if (message.includes("User already registered")) {
        return "Email already exists";
    }

    if (message.includes("Password should be at least")) {
        return "Password must be at least 8 characters";
    }

    return "Something went wrong. Please try again.";
};

export const mapLoginError = (message: string) => {
    if (message.includes("Invalid login credentials")) {
        return "Email or password is incorrect";
    }
    return "Something went wrong. Please try again.";
}