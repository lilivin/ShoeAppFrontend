import React from 'react';
import {
    Link
  } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <ul>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/user-shoes-list">User Shoes List</Link>
            </ul>
        </>
    )
}
