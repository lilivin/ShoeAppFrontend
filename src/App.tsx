import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
