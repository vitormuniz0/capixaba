import { createContext, useEffect, useState } from "react";
import api from "../Services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingStorageData = async () => {
      setLoading(true);
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        try {
          const response = await api.get("/user", {
            headers: {
              Authorization: `Bearer ${storageToken}`,
            },
          });

          if (response.status === 200) {
            setUser(response.data);
          } else {
            setUser(null);
            localStorage.removeItem("@Auth:token");
            localStorage.removeItem("@Auth:user");
          }
        } catch (error) {
          console.error("Error loading user data:", error);
          setUser(null);
          localStorage.removeItem("@Auth:token");
          localStorage.removeItem("@Auth:user");
        }
      } else {
        setUser(false);
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
        setUser(response.data.user);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        localStorage.setItem("@Auth:token", response.data.token);
        localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setError(
        "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde."
      );
    }
  };

  const userId = user?.id;

  return (
    <AuthContext.Provider
  value={{
    user,
    signed: !!user,
    loading,
    signIn,
    userId,
    error,
  }}
>
  {console.log("AuthContext.Provider value:", {
    user,
    signed: !!user,
    loading,
    signIn,
    userId,
    error,
  })}
  {children}
</AuthContext.Provider>
  );
};
