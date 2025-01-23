import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingStorageData = async () => {
      setLoading(true);
      const storageAdmin = localStorage.getItem("@Auth:admin");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageAdmin && storageToken) {
        try {
          const response = await api.get(`/admin/${admin.id}`, {
            headers: {
              Authorization: `Bearer ${storageToken}`,
            },
          });

          if (response.status === 200) {
            setAdmin(response.data.admin);
          } else {
            setAdmin(null);
            localStorage.removeItem("@Auth:token");
            localStorage.removeItem("@Auth:admin");
          }
        } catch (error) {
          console.error("Error loading user data:", error);
          setAdmin(null);
          localStorage.removeItem("@Auth:token");
          localStorage.removeItem("@Auth:admin");
        }
      } else {
        setAdmin(false);
      }
      setLoading(false);
    };
    loadingStorageData();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/auth", {
        email,
        password,
      });

      if (response.data.error) {
        alert(response.data.error);
      } else {
        setAdmin(response.data.admin);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        localStorage.setItem("@Auth:token", response.data.token);
        localStorage.setItem(
          "@Auth:admin",
          JSON.stringify(response.data.admin)
        );
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      if (error.response) {
        console.error("Response error data:", error.response.data);
      }
      setError(
        "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde."
      );
    }
  };

  const adminId = admin?.id;

  return (
    <AuthContext.Provider
      value={{
        admin,
        signed: !!admin,
        loading,
        signIn,
        adminId,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
