import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return signed ? <Outlet /> : <Navigate to="/LoginAdmin" />;
};