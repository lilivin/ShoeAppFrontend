import React, { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import UserShoesList from "./components/UserShoesList/UserShoesList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  

  return (
    <> 
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/user-shoes-list" element={
            <ProtectedRoute>
              <UserShoesList />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
