import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    if(loading){
        <p>Loading..</p>
    }
    if(!user){
        return <Navigate state={location?.pathname} to="/auth/logIn"></Navigate>
    }
    return children;
};

export default PrivateRoute;