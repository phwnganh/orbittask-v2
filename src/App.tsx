import {useAuthListener} from "@/features/auth/hooks/useAuthListener.ts";
import AppRoute from "@/routes/app.route.tsx";

const App = () => {
    useAuthListener()
    return (
        <AppRoute/>
    );
};

export default App;