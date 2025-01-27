import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carrega dados do localStorage ao iniciar
  useEffect(() => {
    const loadStorageData = async () => {
      setLoading(true);

      const storageAdmin = localStorage.getItem("@Auth:admin");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageAdmin && storageToken) {
        try {
          // Configura o token no cabeçalho para futuras requisições
          api.defaults.headers.common["Authorization"] = `Bearer ${storageToken}`;
          
          const parsedAdmin = JSON.parse(storageAdmin);
          const response = await api.get(`/admin/${parsedAdmin.id}`);

          if (response.status === 200) {
            setAdmin(response.data.admin);
          } else {
            logout(); // Limpa dados inválidos
          }
        } catch (error) {
          console.error("Erro ao carregar dados do admin:", error);
          logout();
        }
      } else {
        setAdmin(null); // Usuário não autenticado
      }

      setLoading(false);
    };

    loadStorageData();
  }, []);

  // Função de login
  const signIn = async ({ email, password }) => {
    setError(null); // Limpa erros anteriores

    try {
      const response = await api.post("/auth", { email, password });

      if (response.data.error) {
        setError(response.data.error);
        alert(response.data.error); // Mensagem de erro
      } else {
        setAdmin(response.data.admin);
        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

        // Salva dados no localStorage
        localStorage.setItem("@Auth:token", response.data.token);
        localStorage.setItem("@Auth:admin", JSON.stringify(response.data.admin));
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setError("Erro ao realizar login. Tente novamente.");
    }
  };

  // Função de logout
  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("@Auth:token");
    localStorage.removeItem("@Auth:admin");
    api.defaults.headers.common["Authorization"] = null;
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        signed: !!admin, // true se admin for válido
        loading,
        signIn,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};