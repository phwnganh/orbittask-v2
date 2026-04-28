import {useNavigate} from "react-router-dom";
import Button from "../../shared/components/button/Button.tsx";

const ForbiddenPage = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate("/");
    }
    return (
        <div className={"min-h-screen flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"}>
            <h1 className="text-6xl font-bold text-error">403</h1>
            <p className="text-lg">You don’t have permission to access this page.</p>
            <Button variant={"secondary"} onClick={handleBackToHome}>Go back home</Button>
        </div>
    );
};

export default ForbiddenPage;