import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { loading, user } = use(AuthContext)
    return (
        loading ? children : 
             (
                <div>
                    {user ? children : <Navigate state={location.pathname} to='/login'></Navigate>}
                </div>
            )
    );
};

export default PrivateRoute;