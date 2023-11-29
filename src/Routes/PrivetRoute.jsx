import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-bars loading-lg text-warning mx-auto"></span>
        </div>

    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;