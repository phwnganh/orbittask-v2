import Button from "@/components/uis/Button.tsx";
import {useNavigate} from "react-router-dom";

const ForbiddenPage = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate("/");
    }
    return (
        <div className={"min-h-screen flex flex-col items-center justify-center bg-bg-primary text-text-primary"}>
            <h1 className="text-6xl font-bold text-error">403</h1>
            <p className="mt-4 text-lg">You don’t have permission to access this page.</p>
            <Button variant={"secondary"} onClick={handleBackToHome}>Go back home</Button>
        </div>
    );
};

export default ForbiddenPage;