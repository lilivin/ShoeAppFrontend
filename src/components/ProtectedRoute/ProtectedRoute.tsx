import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { addUser } from '../../store/actions/userActions';

export const ProtectedRoute = ({children}: {children: JSX.Element}) => {
    const dispatch = useDispatch();
    let token: string | null = localStorage.getItem('token');

    if(token){
        fetch(`http://localhost:3000/v1/auth/me`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
        }).then(async response => {
            return response.json()
          })
          .then(data => {
            console.log(data)
            if(data){
              dispatch(addUser(data));
            }
          })
    }

    return token ? children : <Navigate to="/login" />;
}