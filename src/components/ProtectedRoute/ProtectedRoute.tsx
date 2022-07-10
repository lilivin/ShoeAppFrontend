import React from 'react'
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}: {children: JSX.Element}) => {
    let token: string | null = localStorage.getItem('token');

    return token ? children : <Navigate to="/login" />;
}