export type LoginPayload = {
    email: string;
    password: string;
}

export type RegisterPayload = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

export type Profile = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: "Admin" | "User";
    date_of_birth: string;
    phone_number: string;
    address: string;
    avatar_url: string;
}