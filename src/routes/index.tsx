import { useRoutes } from "react-router-dom";
import appRoutes from "./AppRoutes";

function AppRoutes() {
    return useRoutes([...appRoutes])
}

export default AppRoutes