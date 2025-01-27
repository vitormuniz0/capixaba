import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { Container, Content, StyledFormGroup, TitleForm } from "./style";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import { Navigate } from "react-router-dom";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signed, loading } = useContext(AuthContext);
  const [showError, setShowError] = useState(null); // Inicializando o estado
  const [error, setError] = useState(null);

  if (!AuthContext) {
    throw new Error("AuthContext não inicializado corretamente");
  }

  if (!signIn) {
    console.error("AuthContext não foi inicializado corretamente");
  }

  useEffect(() => {
    if (signed) {
      console.log("Usuário logado");
    }
  }, [signed]);

  useEffect(() => {
    if (error) {
      setShowError(error); // Exibe o erro no alerta
      setTimeout(() => setShowError(null), 3000); // Remove o alerta após 3 segundos
    }
  }, [error]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const data = { email, password };
    await signIn(data);
  };

  if (signed) {
    return <Navigate to="/homeAdmin" />;
  } else {
    return (
      <Container>
        <Content>
          <StyledFormGroup onSubmit={handleSignIn}>
            <Form>
              <TitleForm>Login</TitleForm>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Senha</FormLabel>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <button className="btn-login" type="submit">
                Entrar
              </button>
            </Form>
          </StyledFormGroup>
        </Content>
      </Container>
    );
  }
};

export default LoginAdmin;
